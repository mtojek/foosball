<template>
  <div class="recent-matches">
    <div class="section">
      <h1 class="title">Recent Matches</h1>
      <div class="body">
        <table class="table">
          <tbody>
            <tr>
              <td class="name">John Smith</td>
              <td class="score" rowspan="2">
                3 : 0
              </td>
              <td class="name">Jerry Ford</td>
            </tr>
            <tr>
              <td class="name">Bevis Titus</td>
              <td class="name">Nash Nicky</td>
            </tr>
            <tr>
              <td class="name">John Smith</td>
              <td class="score" rowspan="2">
                1 : 2
              </td>
              <td class="name">Jerry Ford</td>
            </tr>
            <tr>
              <td class="name">Bevis Titus</td>
              <td class="name">Nash Nicky</td>
            </tr>
            <tr>
              <td class="name">John Smith</td>
              <td class="score" rowspan="2">
                2 : 2
              </td>
              <td class="name">Jerry Ford</td>
            </tr>
            <tr>
              <td class="name">Bevis Titus</td>
              <td class="name">Nash Nicky</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecentMatches',
};
</script>

<style lang="sass" scoped>
  td.name
    text-align: center
  td.score
    font-size: 1.5rem
    font-weight: bold
    vertical-align: middle
  tr:nth-child(odd)
    td.name
      border: none
  tr:nth-last-child(2)
    td.score
      border: none
</style>
