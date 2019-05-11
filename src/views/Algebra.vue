<template>
  <div>
    <h1>Algebra</h1>
    <div class="function-container">
      <div class="name">
        <p>
          <b>Point-Slope Form: Find m</b>
        </p>
      </div>
      <div class="form">
        <div class="input-block">
          <div class="formula">
            <p>
              <i>y = mx + b</i>
            </p>
          </div>
          <div class="input">
            <div>
              <p>
                <input type="number" placeholder="y" v-model="y1"> = m
                <input type="number" placeholder="x" v-model="x1"> +
                <input type="number" placeholder="b" v-model="b1">
              </p>
            </div>
            <button v-on:click="calc1">Calculate!</button>
          </div>
        </div>
        <div class="answer">
          <p>Answer</p>
          <p v-show="showAnswer1">{{answer1}}</p>
        </div>
      </div>
    </div>

    <div class="function-container">
      <div class="name">
        <p>
          <b>Function Name</b>
        </p>
      </div>
      <div class="form">
        <div class="input-block">
          <div class="formula">
            <p>
              <i>Formula</i>
            </p>
          </div>
          <div class="input">
            <!--
              Change depending on formula
              For inputs, set v-model to the variable you want it to be
            -->
            <div>
              <p>
                <input type="number" placeholder="y" v-model="y1">
              </p>
            </div>
            <!--
              Set v-on:click to the method you want to do
              Methods need to be implemented in the <script> tag below in the methods{} section
            -->
            <button v-on:click="calc1">Calculate!</button>
          </div>
        </div>
        <div class="answer">
          <p>Answer</p>
          <!--
            v-show is for conditional rendering
            set v-show to a boolean or remove to show by default
            The {{}} brackets prints out the value of the variable in the brackets
          -->
          <p v-show="showAnswer1">{{answer1}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      /* Variables go here */
      answer1: 0,
      showAnswer1: false,
      y1: null,
      x1: null,
      b1: null
    };
  },
  methods: {
    /*
     * Methods go here
     * For whatever reason, you will need to reference your variables as this.variable
     */
    calc1() {
      if (this.y1 == null || this.x1 == null || this.b1 == null) {
        this.answer1 = "One or more fields not given";
        this.showAnswer1 = true;
      } else if (this.x == 0) {
        this.answer1 = "m can be anything";
        this.showAnswer1 = true;
      } else {
        this.answer1 = "m = " + (this.y1 - this.b1) / this.x1;
        this.showAnswer1 = true;
      }
    }
  }
};
</script>

<style scoped>
/* 
 * style scoped applies styling to this page only
 * If you want to change styling for the whole site, go to src/App.vue and go to the <style> tag
 */
input {
  width: 15%;
}
</style>