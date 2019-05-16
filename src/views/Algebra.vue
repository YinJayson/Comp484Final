<template>
  <div>
    <h1>Algebra</h1>
    <div class="function-container">
      <div class="name">
        <p id = "point-slope">
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
        <p><b>Calculate Factorial</b></p>
      </div>
      <div class="form">
        <div class="input-block">
          <div class="formula">
            <p><i>n! = n * (n-1) * (n-2) * ... * (1)</i></p>
          </div>
          <div class="input">
            <div><p><input type="number" placeholder="n" v-model="n2"> !</p></div>
            <button v-on:click='calc2'>Calculate!</button>
          </div>
        </div>
        <div class="answer">
          <p>Answer</p>
          <p v-show="showAnswer2">{{answer2}}</p>
        </div>
      </div>
    </div>

    <div class="function-container">
      <div class="name">
        <p><b>FOIL</b></p>
      </div>
      <div class=form>
        <div class="input-block">
          <div class="formula">
            <p><i>(a + b) x (c + d)</i></p>
          </div>
          <div class="input">
            <div><p>(<input type="number" placeholder="a" v-model="a3"> + <input type="number" placeholder="b" v-model="b3">) x (<input type="number" placeholder="c" v-model="c3"> + <input type="number" placeholder="d" v-model="d3">)</p></div>
            <button v-on:click='calc3'>Calculate!</button>
          </div>
        </div>
        <div class="answer">
          <p>Answer</p>
          <p v-show="showAnswer3">{{answer3}}</p>
        </div>
      </div>
    </div>

  <div class="function-container">
    <div class="name">
      <p><b>Quadratic Formula: Find x</b></p>
    </div>
    <div class=form>
      <div class="input-block">
        <div class="formula">
          <p><i><img src="@/assets/quadratic1.png"> and <img src="@/assets/quadratic2.png"></i></p>
        </div>
        <div class="input">
          <div>
            <p>a = <input type="number" placeholder="a" v-model="a4">&nbsp;&nbsp;&nbsp;b = <input type="number" placeholder="b" v-model="b4">&nbsp;&nbsp;&nbsp;c = <input type="number" placeholder="c" v-model="c4"></p>
          </div>
          <button v-on:click='calc4'>Calculate!</button>
        </div>
      </div>
      <div class="answer">
        <p>Answer</p>
        <p v-show="showAnswer4">{{answer4}}</p>
      </div>
    </div>
  </div>
  <!-- <div class="function-container">
    <div class="name">
      <p><b>Function Name</b></p>
    </div>
    <div class=form>
      <div class="input-block">
        <div class="formula">
          <p><i>Formula</i></p>
        </div>
        <div class="input">
          <!--
            Change depending on formula
            For inputs, set v-model to the variable you want it to be
          <div><p><input type="number" placeholder="y" v-model="y1"></p></div>
          <!--
            Set v-on:click to the method you want to do
            Methods need to be implemented in the <script> tag below in the methods{} section
          <button v-on:click='calc1'>Calculate!</button>
        </div>
      </div>
      <div class="answer">
        <p>Answer</p>
        <!--
          v-show is for conditional rendering
          set v-show to a boolean or remove to show by default
          The {{}} brackets prints out the value of the variable in the brackets
        <p v-show="showAnswer1">{{answer1}}</p>
      </div>
    </div>
  </div> -->
</div>
</template>

<script>
export default {
  data() {
    return {
      /* Variables go here */
      answer1: null,
      showAnswer1: false,
      y1: null,
      x1: null,
      b1: null,
      answer2: null,
      showAnswer2: false,
      n2: null,
      answer3: null,
      showAnswer3: false,
      a3: null,
      b3: null,
      c3: null,
      d3: null,
      a4: null,
      b4: null,
      c4: null,
      answer4: null,
      showAnswer4: false,
      temp1: null,
      temp2: null
    };
  },
  methods: {
    /*
     * Methods go here
     * For whatever reason, you will need to reference your variables as this.variable
     */
    calc1() {
      this.showAnswer1 = true;
      if (this.y1 == null || this.x1 == null || this.b1 == null) {
        this.answer1 = "One or more fields not given";
      }
      else if (this.x == 0) {
        this.answer1 = "m can be anything";
      }
      else {
        this.answer1 = "m = " + (this.y1 - this.b1) / this.x1; 
      }
    },
    calc2() {
      this.showAnswer2 = true;
      if (this.n2 == null) {
        this.answer2 = "One or more fields not given";
      }
      else if(this.n2 < 0) {
        this.answer2 = "n cannot be negative";
      }
      else {
        this.temp1 = 1;
        for (this.temp2 = 2; this.temp2 <= this.n2; this.temp2++)
        {
          this.temp1 *= this.temp2;
        }
        this.answer2 = this.n2 + "! = " + this.temp1;
      }
    },
    calc3() {
      this.showAnswer3 = true;
      if(this.a3 == null || this.b3 == null || this.c3 == null || this.d3 == null) {
        this.answer3 = "One or more fields not given";
      }
      else {
        this.answer3 = "(" + this.a3 + " + " + this.b3 + ") x (" + this.c3 + " + " + this.d3 + ") = " + (this.a3 * this.c3 + this.a3 * this.d3 + this.b3 * this.c3 + this.b3 * this.d3);
      }
    },
    calc4() {
      this.showAnswer4 = true;
      if(this.a4 == null || this.b4 == null || this.c4 == null) {
        this.answer4 = "One or more fields not given";
      }
      else if (this.a4 == 0) {
        this.answer4 = "a cannot be 0";
      }
      else {
        this.answer4 = "x = " + ((-this.b4 + Math.sqrt(Math.pow(this.b4, 2) - (4 * this.a4 * this.c4))) / (2 * this.a4)) + " and " + 
        "x = " + ((-this.b4 - Math.sqrt(Math.pow(this.b4, 2) - (4 * this.a4 * this.c4))) / (2 * this.a4));
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
  width: 50px;
  text-align: center;
}
</style>
