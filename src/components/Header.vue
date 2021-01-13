<template>
  <header>
    <h1>Dat com</h1>
    <router-link to="/">Home</router-link>
    <router-link to="/success">Success</router-link>
  </header>
</template>
<script>
export default {
  name: "Header"
};
</script>
<style scoped>
header {
  background: black;
  padding: 10px 0;
  text-align: center;
}

h1 {
  color: white;
}
a {
  text-decoration: none;
  text-transform: uppercase;
  color: white;
  font-size: 14px;
}

header a:nth-child(2){
  margin-right: 5px;
}
</style>