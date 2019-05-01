<template>
  <div id="app">
    <Header />
    <div id="content">
      <router-view/>
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
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.4;
    background: gray;
  }

  #content {
    padding: 5px 5px 100% 5px;
    background: white;
    margin: 0% 10% 0% 10%;
  }

  #content h1 {
    text-align: center;
  }

  #content div {
    padding: 5px;
  }
  #content .function-container {
    border: 5px ridge gray;
    padding: 10px;
    margin: 5%;
  }
  
  #content .name {
    border: 5px solid black;
  }
  #content .form {
    border: 5px solid gray;
    display: flex;
  }
  #content .input-block {
    width: 70%;
    padding: 0px;
  }
  #content .input {
    border: 5px solid black;
    margin-right: auto;
  }
  #content .answer {
    border: 5px solid black;
    margin-left: auto;
    width: 25%;
  }
  #content .answer p {
    text-align: center;
  }

  input[type=number]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  }
</style>
