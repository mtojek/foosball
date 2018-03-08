const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);
const database = admin.database();

const createNewLeader = () => { return { "played": 0, "won": 0, "drawn": 0, "lost": 0, "points": 0 } };
const teamAWon = match => match.team_a.score > match.team_b.score ;
const teamsDrawn = match => match.team_a.score === match.team_b.score;

function calculatePlayerStats(team, oldStats, match) {
  let stats = oldStats;

  if (stats === undefined) {
    stats = createNewLeader();
  }

  stats.played = stats.played + 1;
  stats.drawn = stats.drawn + teamsDrawn(match);

  if (team === 'A') {
    stats.won = stats.won + teamAWon(match);
    stats.lost = stats.lost + (!teamAWon(match) && !teamsDrawn(match));
    stats.points = stats.points + match.team_a.score;
  } else {
    stats.won = stats.won + (!teamAWon(match) && !teamsDrawn(match));
    stats.lost = stats.lost + teamAWon(match);
    stats.points = stats.points + match.team_b.score;
  }
  return stats;
}

exports.onUpdateLeaderboard = functions.database.ref('matches/{uid}')
  .onWrite(event => {
    return event.data.ref.parent.once('value')
      .then(snapshot => {
        const leaders = {};
        const matches = snapshot.val();
        for (let key in matches) {
          const match = matches[key];
          leaders[match.team_a.first] = calculatePlayerStats('A', leaders[match.team_a.first], match);
          leaders[match.team_a.second] = calculatePlayerStats('A', leaders[match.team_a.second], match);
          leaders[match.team_b.first] = calculatePlayerStats('B', leaders[match.team_b.first], match);
          leaders[match.team_b.second] = calculatePlayerStats('B', leaders[match.team_b.second], match);
        }
        return leaders;
      })
      .then(leaders => database.ref('leaderboard').update(leaders))
      .then(() => {
        console.log('Leaderboard has been updated.');
        return true;
      });
  });
