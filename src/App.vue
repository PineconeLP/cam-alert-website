<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>
import Home from "./pages/Home";

export default {
  name: "App",
  components: {
    Home
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Ropa+Sans");

* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: "Ropa Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

  --color-primary: #607ce1;
}
</style>
