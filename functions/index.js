const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);
const database = admin.database();

function createNewLeader() {
  return {
    "played": 0,
    "won": 0,
    "drawn": 0,
    "lost": 0,
    "points": 0,
  };
}

function team_a_won(match) {
  return match.team_a.score > match.team_b.score;
}

function teams_drawn(match) {
  return match.team_a.score === match.team_b.score;
}

function updateTeamAPlayer(stats, match, action) {
  if (stats === null) {
    stats = createNewLeader();
  }

  var k = action === 'create' ? 1 : -1;
  return {
    "played": stats.played + k,
    "won": stats.won + team_a_won(match) * k,
    "drawn": stats.drawn + teams_drawn(match) * k,
    "lost": stats.lost + (!team_a_won(match) && !teams_drawn(match)) * k,
    "points": stats.points + match.team_a.score * k,
  };
}

function updateTeamBPlayer(stats, match, action) {
  if (stats === null) {
    stats = createNewLeader();
  }
  var k = action === 'create' ? 1 : -1;
  return {
    "played": stats.played + k,
    "won": stats.won + (!team_a_won(match) && !teams_drawn(match)) * k,
    "drawn": stats.drawn + teams_drawn(match) * k,
    "lost": stats.lost + team_a_won(match) * k,
    "points": stats.points + match.team_b.score * k,
  };
}

exports.onCreateMatch = functions.database.ref('matches/{uid}')
  .onCreate(event => {
    const match = event.data.val();

    // Team A
    return Promise.all([
      database.ref('/leaderboard/' + match.team_a.first)
        .transaction((stats) => updateTeamAPlayer(stats, match, 'create')),
      database.ref('/leaderboard/' + match.team_a.second)
        .transaction((stats) => updateTeamAPlayer(stats, match, 'create')),
      database.ref('/leaderboard/' + match.team_b.first)
        .transaction((stats) => updateTeamBPlayer(stats, match, 'create')),
      database.ref('/leaderboard/' + match.team_b.second)
        .transaction((stats) => updateTeamBPlayer(stats, match, 'create'))
    ]).then(() => {
      console.log('All records updated.');
      return true;
    });
  });

exports.onDeleteMatch = functions.database.ref('matches/{uid}')
  .onDelete(event => {
    const match = event.data._data;

    // Team A
    return Promise.all([
      database.ref('/leaderboard/' + match.team_a.first)
        .transaction((stats) => updateTeamAPlayer(stats, match, 'delete')),
      database.ref('/leaderboard/' + match.team_a.second)
        .transaction((stats) => updateTeamAPlayer(stats, match, 'delete')),
      database.ref('/leaderboard/' + match.team_b.first)
        .transaction((stats) => updateTeamBPlayer(stats, match, 'delete')),
      database.ref('/leaderboard/' + match.team_b.second)
        .transaction((stats) => updateTeamBPlayer(stats, match, 'delete'))
    ]).then(() => {
      console.log('All records updated.');
      return true;
    });
  });

// FIXME: onUpdate can't be handled right now.
