<template>
<div>
  <h1>Calculus</h1>

  <div class="function-container">
    <div class="name">
      <p>
        <b>Find the derivative respect to x</b>
      </p>
    </div>
    <div class="form">
      <div class="input-block">
        <div class="formula">
        <i>d/dx = nx<sup>n-1</sup></i>
        </div>
        <div class="input">
          <div>
            <p>
              <input type="number" placeholder="n" v-model="z1"> x
              <sup><input type="number" placeholder="n" v-model="z2"></sup>
            </p>
          </div>
          <button v-on:click="calc5">Calculate!</button>
        </div>
      </div>
      <div class="answer">
        <p>Answer</p>
        <p v-show="showAnswer5">{{temp5}}<sup>{{tempp5}}</sup>{{answer5}}<sup>{{ap5}}</sup></p>
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
      answer5: 0,
      showAnswer5: false,
      ap5: null,
      temp5: null,
      tempp5: null,
      z1: null,
      z2: null
    };
  },
  methods: {
    /*
     * Methods go here
     * For whatever reason, you will need to reference your variables as this.variable
     */
    calc5() {
      /*
      this.answer5 = math.derivative('x^3', 'x').eval({x: 4});
      this.showAnswer5 = true;
      */
      if (this.z1 == null){
        this.answer5 = "One field is not given.";
        this.showAnswer5 = true;
      }
      else if (this.z1 < 0 || this.z2 < 0) {
        this.answer5 = "Negative is illegal!";
        this.showAnswer5 = true;
      }
      else if (this.z2 == 1) {
      this.temp5 = (this.z1) + "x";
      this.answer5 = " = " + (this.z1);
      this.ap5 = null;
      this.showAnswer5 = true;
      }
      else if (this.z2 == 2) {
        this.temp5 = (this.z1) + "x";
        this.tempp5 = (this.z2);
        this.answer5 = " = " + (this.z1*this.z2) + "x";
        this.showAnswer5 = true;
      }
      else if (this.z2 == null) {
        this.temp5 = (this.z1) + " = ";
        this.showAnswer5 = true;
      }
      else {
        this.temp5 = (this.z1) + "x";
        this.tempp5 = (this.z2);
        this.answer5 = " = " + (this.z1*this.z2) + "x";
        this.ap5 = (this.z2 - 1);
        this.showAnswer5 = true;
      }
      }
  }
};
</script>

<style scoped>
</style>