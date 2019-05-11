<template>
  <div>
    <h1>Calculus</h1>
    <div class="function-container">
      <div class="name">
        <p>
          <b>Find the derivative</b>
        </p>
      </div>
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
 * style scoped applies styling to this page only
 * If you want to change styling for the whole site, go to src/App.vue and go to the <style> tag
 */
input {
  width: 15%;
}
</style>
