<template>
  <div class = "container" id = "app">
    <h1>Home</h1>
    <img src=../assets/hated_math_1200x627.jpg alt="Math">
    <div class="nav">
    <h2>Welcome!</h2>
    <p>This is a website designed to help with math by providing answers to equations</p>
    <h2>What do you need help with?</h2>
    <hr>
    <ul style="list-style-type:none;">
      <li><router-link :to="{ path: 'algebra' }">Algebra</router-link></li>
      <!--<p v-show="formulas">point-slope</p>-->
      <li><router-link :to="{ path: 'geometry' }">Geometry</router-link></li>
      <li><router-link :to="{ path: 'calculus' }">Calculus</router-link></li>
      <router-view></router-view>
    </ul>
    </div>
  </div>
</template>

<script>

export default{
  name:'app',
  data(){
    return{
      nav: ""
    }
  }
  /*data() {
    return {
      formulas: false
    }
  },
  methods: {
    toggleFunction() {
      this.formulas = true
    }
  }*/
}
</script>

<style scoped>
  .fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>