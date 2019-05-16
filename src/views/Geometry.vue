<template>
  <div>
    <h1>Geometry</h1>
    <div class="function-container">
      <div class="name">
        <p>
          <b>Rectangle - Find Perimeter and Area</b>
        </p>
      </div>
      <div class="form">
        <div class="input-block">
          <div class="formula"><img src=../assets/rectangle.png alt="Rectangle"></div>
          <div class="input">
            <div>
              <p>
                l =
                <input type="number" placeholder="l" v-model="l1">
                <br>w =
                <input type="number" placeholder="w" v-model="w1">
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
          <b>Square - Find Perimeter and Area</b>
        </p>
      </div>
      <div class="form">
        <div class="input-block">
          <div class="formula"><img src=../assets/square.png alt="Square"></div>
          <div class="input">
            <div>
              <p>
                s =
                <input type="number" placeholder="s" v-model="s1">
              </p>
            </div>
            <button v-on:click="calc2">Calculate!</button>
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
        <p>
          <b>Triangle - Find Perimeter and Area</b>
        </p>
      </div>
      <div class="form">
        <div class="input-block">
          <div class="formula"><img src=../assets/triangle.png alt="Triangle"></div>
          <div class="input">
            <div>
              <p>
                a =
                <input type="number" placeholder="a" v-model="a1">
                <br>b =
                <input type="number" placeholder="b" v-model="b1">
                <br>c =
                <input type="number" placeholder="c" v-model="c1">
                <br>h =
                <input type="number" placeholder="h" v-model="h1">
              </p>
            </div>
            <button v-on:click="calc3">Calculate!</button>
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
        <p>
          <b>Sphere - Find Volume</b>
        </p>
      </div>
      <div class="form">
        <div class="input-block">
          <div class="formula"><img src=../assets/sphere.png alt="Sphere"></div>
          <div class="input">
            <div>
              <p>
                r =
                <input type="number" placeholder="r" v-model="r1">
              </p>
            </div>
            <button v-on:click="calc4">Calculate!</button>
          </div>
        </div>
        <div class="answer">
          <p>Answer</p>
          <p v-show="showAnswer4">{{answer4}}</p>
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
      l1: null,
      w1: null,
      answer2: 0,
      showAnswer2: false,
      s1: null,
      answer3: 0,
      showAnswer3: false,
      a1: null,
      b1: null,
      c1: null,
      h1: null,
      answer4: 0,
      showAnswer4: false,
      r1: null
    };
  },
  methods: {
    /*
     * Methods go here
     * For whatever reason, you will need to reference your variables as this.variable
     */
    // RECANGLE FUNCTION
    calc1() {
      if (this.l1 == null || this.w1 == null) {
        this.answer1 = "One or more fields not given";
        this.showAnswer1 = true;
      } else if (this.l1 < 0 || this.w1 < 0) {
        this.answer1 =
          "Negative is illegal! Shape cannot have negative number.";
        this.showAnswer1 = true;
      } else {
        this.answer1 =
          "P = " +
          (2 * this.l1 + 2 * this.w1) +
          " " +
          "A = " +
          this.l1 * this.w1;
        this.showAnswer1 = true;
      }
    },

    // SQUARE FUNCTION

    calc2() {
      if (this.s1 == null) {
        this.answer2 = "One field is not given";
        this.showAnswer2 = true;
      } else if (this.s1 < 0) {
        this.answer2 =
          "Negative is illegal! Shape cannot have negative number.";
        this.showAnswer2 = true;
      } else {
        this.answer2 =
          "P = " + 4 * this.s1 + " " + "A = " + Math.pow(this.s1, 2);
        this.showAnswer2 = true;
      }
    },

    // TRIANGLE FUNCTION

    calc3() {
      if (
        this.a1 == null ||
        this.b1 == null ||
        (this.c1 == null) | (this.h1 == null)
      ) {
        this.answer3 = "One or more fields are not given";
        this.showAnswer3 = true;
      } else if (this.a1 < 0 || this.b1 < 0 || this.c1 < 0 || this.h1 < 0) {
        this.answer3 =
          "Negative is illegal! Shape cannot have negative number.";
        this.showAnswer3 = true;
      } else {
        this.answer3 =
          "P = " +
          (this.a1 * 1 + this.b1 * 1 + this.c1 * 1) +
          " " +
          "A = " +
          (1 / 2) * (this.b1 * this.h1);
        this.showAnswer3 = true;
      }
    },

    calc4() {
      if (this.r1 == null) {
        this.answer4 = "One field is not given.";
        this.showAnswer4 = true;
      } else if (this.r1 < 0) {
        this.answer4 =
          "Negative is illegal! Shape cannot have negative number.";
        this.showAnswer4 = true;
      } else {
        var ans = (4 / 3) * Math.PI * Math.pow(this.r1, 3);
        this.answer4 = "V = " + ans.toFixed(2);
        this.showAnswer4 = true;
      }
    }
  }
};
</script>

<style scoped>
</style>
