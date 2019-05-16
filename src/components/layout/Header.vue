<template>
  <header class="header">
    <h1>Learn2Math</h1>
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/algebra">Algebra</router-link>|
      <router-link to="/geometry">Geometry</router-link>|
      <router-link to="/calculus">Calculus</router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>
.header {
  background: #94a2b2;
  color: #fff;
  text-align: center;
  padding: 10px;
}

.header a {
  color: #fff;
  padding-left: 5px;
  padding-right: 5px;
  text-decoration: none;
}

</style>
