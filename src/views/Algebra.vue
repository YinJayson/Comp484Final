<template>
  <div>
    <h1>Algebra</h1>

    <div class="function-container">
      <div class="name">
        <p><b>Point-Slope Form: Find m</b></p>
      </div>
      <div class=form>
        <div>
          <div class="formula">
            <p><i>y = mx + b</i></p>
          </div>
          <div class="input">
            <div><p><input type="number" placeholder="y" class="1y"> = m<input type="number" placeholder="x" name="1x"> + <input type="number" placeholder="b" name="1b"></p></div>
            <button @click="calculateFindM">Calculate!</button>
          </div>
        </div>
        <div class="answer">
          <p>Answer</p>
        </div>
      </div>
    </div>

    <div class="function-container">
        <div class="name">
          <p><b>Function Name</b></p>
        </div>
        <div class=form>
          <div>
            <div class="formula">
              <p><i>Function Formula</i></p>
            </div>
            <div class="input">
              <p>Input Form</p>
              <button>Calculate!</button>
            </div>
          </div>
          <div class="answer">
            <p>Answer</p>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
  export default {
  methods: {
    calculateFindM: function(event) {
      console.log(document.querySelector(".1y"));
    }
  }
}
</script>

<style scoped>
  input {
    width: 15%;
  }
</style>