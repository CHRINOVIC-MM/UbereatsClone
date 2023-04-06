<template>
  <div id="app">
    <HomeComponent/>
  </div>
</template>

<script>
import HomeComponent  from "./pages/HomeComponent.vue";

export default {
  name: 'App',
  components:{
    HomeComponent,
  }
}
</script>

<style>
@import url('./style/reset.css');
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  padding: 0px 20px;
  
}
</style>
