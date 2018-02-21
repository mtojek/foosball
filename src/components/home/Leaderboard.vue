<template>
  <div class="leaderboard">
    <div class="section">
      <h1 class="title">Leaderboard</h1>
      <div class="body">
        <table class="table is-hoverable">
          <thead>
            <tr>
              <th><abbr title="Position">Pos</abbr></th>
              <th>Name</th>
              <th><abbr title="Played">Pld</abbr></th>
              <th><abbr title="Won">W</abbr></th>
              <th><abbr title="Drawn">D</abbr></th>
              <th><abbr title="Lost">L</abbr></th>
              <th><abbr title="Points">Pts</abbr></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>John Smith</td>
              <td>13</td>
              <td>3</td>
              <td>1</td>
              <td>2</td>
              <td>21</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jerry Ford</td>
              <td>7</td>
              <td>3</td>
              <td>1</td>
              <td>2</td>
              <td>19</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Bevis Titus</td>
              <td>6</td>
              <td>2</td>
              <td>1</td>
              <td>2</td>
              <td>18</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Nash Nicky</td>
              <td>3</td>
              <td>0</td>
              <td>1</td>
              <td>2</td>
              <td>7</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Leaderboard',
};
</script>

<style>
</style>
