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
            <p>
              <i>d/dx</i>
            </p>
          </div>
          <div class="input">
            <div>
              <p>
                <input type="number" placeholder="x" v-model="x"> x
              </p>
            </div>
            <buttom v-on:click="Calculus">Caclculate!</buttom>
          </div>
        </div>
        <div class="answer">
          <p>Answer</p>
          <p v-show="showAnswer1">{{Answer}}</p>
        </div>
      </div>
    </div>

    <div class="function-container">
      <div class="name">
        <p>
          <b>Find the derivative respect to y</b>
        </p>
      </div>
      <div class="form">
        <div class="input-block">
          <div class="formula">
            <p>
              <i>d/dy</i>
            </p>
          </div>
          <div class="input">
            <div>
              <p>
                <input type="number" placeholder="y" v-model="y"> y
              </p>
            </div>
            <buttom v-on:click="Calculus">Caclculate!</buttom>
          </div>
        </div>
        <div class="answer">
          <p>Answer</p>
          <p v-show="showAnswer1">{{Answer}}</p>
        </div>
      </div>
    </div>

    <div class="function-container">
      <div class="name">
        <p>
          <b>Evaluate the integral respect to x</b>
        </p>
      </div>
      <div class="form">
        <div class="input-block">
          <div class="formula">
            <p>
              <i>dx</i>
            </p>
          </div>
          <div class="input">
            <div>
              <p>
                <input type="number" placeholder="x" v-model="x"> x
              </p>
            </div>
            <buttom v-on:click="Calculus">Caclculate!</buttom>
          </div>
        </div>
        <div class="answer">
          <p>Answer</p>
          <p v-show="showAnswer1">{{Answer}}</p>
        </div>
      </div>
    </div>

    <div class="function-container">
      <div class="name">
        <p>
          <b>Evaluate the integral respect to y</b>
        </p>
      </div>
      <div class="form">
        <div class="input-block">
          <div class="formula">
            <p>
              <i>dy</i>
            </p>
          </div>
          <div class="input">
            <div>
              <p>
                <input type="number" placeholder="y" v-model="y"> y
              </p>
            </div>
            <buttom v-on:click="Calculus">Caclculate!</buttom>
          </div>
        </div>
        <div class="answer">
          <p>Answer</p>
          <p v-show="showAnswer1">{{Answer}}</p>
        </div>
      </div>
    </div>

    <div class="codepad-input hide" style="display:block;">
      <span
        id="main-input"
        class="mathquill mathquill-editable mathquill-rendered-math"
        rel="tooktip"
        title
      >
        <span class="textarea">
          <textarea></textarea>
        </span>
        <big>&int;</big>
        <sub class="limit empty" style="left: -0.25em;">::after</sub>
        <sub class="limit empty" style="left:-0.5em; margin-right:-0.3375em;">::after</sub>
        <span></span>
        <var>d</var>
        <var>x</var>
      </span>
    </div>
  </div>
</template>

<script>
//includes the calculus library as CalculusEquation
var CalculusEquation = require("../App");

CalculusEquation = function() {
  return {};
};
// return the function when this file is included using require
module.exports = CalculusEquation;

// Init the test suite
describe("Calculus Equation", function() {
  // what the test tests
  it("should initialize a calculus equation object", function() {
    // here is the meat of the test

    // create a new CaculusEquation object
    var y = new CalculusEquation("x", "x^2");

    // expect an object to have been created
    expect(y).toEqual(jasmine.any(object));
  });
});

var y = new CalculusEquation("x", "x^2");

y.at(2); //should return 4
y.at(6); //should return 36

y.derivative(); // should return CaclulusEquation("x", "2x");
y.integral(); // should return CalculusEquation("x", "x^3/3")

// calls to derivative and integral can be chaired
var z = new CalculusEquation("x", "2x^2 + 3x");

z.derivative().derivative(); // should return CalculusEquation("x","4")
z.derivative().at(2); //should returnn 7

// can handle trig function
var f = new CalculusEquation("x", "cos(x)");
f.derivative(); // should return CalculusEquation("x", "-sin(x)");
// export default {
//   data() {
//     return {
//       answer1: 0,
//       showAnswer1: false,
//       d: null,
//       dx: null
//     };
//   },
//   methods: {
//     /*
//      * Methods go here
//      * For whatever reason, you will need to reference your variables as this.variable
//      * the color background: #F96932
//      */
//      calculus(){
//        if()
//      }
//   }
//};
</script>

<style scoped>
/* 
 * testing testing testing
 * style scoped applies styling to this page only
 * If you want to change styling for the whole site, go to src/App.vue and go to the <style> tag
 */
input {
  width: 15%;
}
</style>
