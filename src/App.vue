<template>
  <div id="app">
    <Header />
    <div id="content">
      <transition name="slide-fade">
      <router-view/>
      </transition>
    </div>
  </div>
</template>

<script>
import Header from './components/layout/Header';

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat');
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    line-height: 1.4;
    background: #a3cacc;
  }

  #content {
    padding: 5px 5px 100% 5px;
    background: white;
    margin: 0% 10% 0% 10%;
  }

  #content h1 {
    font: 3.2em 'Montserrat', sans-serif;
    margin-bottom: .2em;
    text-align: center;
  }

  #content h2 {
    font: 1.6em 'Montserrat', sans-serif;
    margin-bottom: .4em;
  }

  #content .nav {
    text-align: center;
    border: 5px solid #bfe2b5;
    padding: 10px;
    margin: 5%;
  }

  #content li a {
    text-decoration: none;
    color: black;
  }

  #content li a:visited {
    color: none;
  }

  #content li a:hover {
    color: gray;
  }

  #content div {
    padding: 5px;
  }
  #content .function-container {
    border: 5px solid #bfe2b5;
    padding: 10px;
    margin: 5%;
  }
  
  #content .name {
    border: 5px ridge #e1f2ab;
  }
  #content .form {
    border: 5px ridge #e1f2ab;
    display: flex;
  }
  #content .input-block {
    width: 70%;
    padding: 0px;
  }
  #content .input {
    border: 5px solid #acaeaf;
    margin-right: auto;
  }
  #content .answer {
    border: 5px solid #acaeaf;
    margin-left: auto;
    width: 25%;
  }
  #content .answer p {
    text-align: center;
  }

    .slide-fade-enter-active {
    transition: all 1s ease;
  }
  .slide-fade-leave-active {
    transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to {
    transform: translateY(50px);
    opacity: 0;
  }
  
  button {
    background-color: #94a2b2;
    border: none;
    border-radius: 8px;
    color: white;
    padding: 5px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 14px;
    margin: 4px 2px;
  }

  input[type=number]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  }
</style>
