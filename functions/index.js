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
    return Promise.all([
      event.data.ref.parent.once('value'),
      database.ref('players').once('value'),
    ]).then(results => {
      const matches = results[0].val();
      const players = results[1].val();

      const leaders = {};
      for (let key in players) {
        leaders[key] = createNewLeader();
      }

      for (let key in matches) {
        const match = matches[key];
        leaders[match.team_a.first] = calculatePlayerStats('A', leaders[match.team_a.first], match);
        leaders[match.team_a.second] = calculatePlayerStats('A', leaders[match.team_a.second], match);
        leaders[match.team_b.first] = calculatePlayerStats('B', leaders[match.team_b.first], match);
        leaders[match.team_b.second] = calculatePlayerStats('B', leaders[match.team_b.second], match);
      }
      return leaders;
    }).then(leaders => database.ref('leaderboard').update(leaders))
      .then(() => {
        console.log('Leaderboard has been updated.');
        return true;
      });
  });


function isAdmin(user) {
  let admin = false;
  user.providerData.forEach(profile => {
    if (profile.providerId === 'github.com' && profile.uid === '14044910') {
      admin = true;
    }
  });
  return admin;
}

exports.onUserSignup = functions.auth.user().onCreate(event => {
  const user = event.data;
  if (isAdmin(user)) {
    const customClaims = {
      admin: true,
    };

    return admin.auth().setCustomUserClaims(user.uid, customClaims)
      .then(() => {
        // Update real-time database to notify client to force refresh.
        const metadataRef = admin.database().ref("metadata/" + user.uid);
        // Set the refresh time to the current UTC timestamp.
        // This will be captured on the client to force a token refresh.
        return metadataRef.set({refreshTime: new Date().getTime()});
      })
      .catch(error => {
        console.log(error);
        return false;
      });
  }
  return true;
});
