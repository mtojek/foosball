<template>
  <div class="new-match">
    <h1 class="title">New Match</h1>
    <div class="body">
      <form>
        <div class="field">
          <label class="label">Team A</label>
          <div class="select">
            <select>
              <option>John Smith</option>
              <option>Jerry Ford</option>
              <option>Bevis Titus</option>
              <option>Nash Nicky</option>
            </select>
          </div>
          <div class="select">
            <select>
              <option>Jerry Ford</option>
              <option>John Smith</option>
              <option>Bevis Titus</option>
              <option>Nash Nicky</option>
            </select>
          </div>
        </div>
        <div class="field">
          <label class="label">Team B</label>
          <div class="select">
            <select>
              <option>Bevis Titus</option>
              <option>John Smith</option>
              <option>Jerry Ford</option>
              <option>Nash Nicky</option>
            </select>
          </div>
          <div class="select">
            <select>
              <option>Nash Nicky</option>
              <option>John Smith</option>
              <option>Jerry Ford</option>
              <option>Bevis Titus</option>
            </select>
          </div>
        </div>
        <div class="field">
          <label class="label">Score</label>
          <div class="short-input">
            <input class="input" type="number" min="0" placeholder="0" required>
          </div>
          <div class="colon">:</div>
          <div class="short-input">
            <input class="input" type="number" min="0" placeholder="0" required>
          </div>
        </div>
        <div class="field">
          <div class="control">
            <button class="button is-primary">Submit</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewMatch',
};
</script>

<style lang="sass" scoped>
  div.colon
    display: inline-block
    position: relative
    top: 0.25em
  div.short-input
    display: inline-block
    width: 4em
</style>

