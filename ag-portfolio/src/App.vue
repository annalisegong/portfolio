<template>
    <TopNav />
    <MainBody />
    <MyFooter />
</template>

<script>
import TopNav from './components/topNav.vue'
import MainBody from "@/components/mainBody.vue"
import MyFooter from "@/components/footer.vue";
export default {
  name: 'App',
  components: {
    TopNav,
    MainBody,
    MyFooter
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif, Space-Grotesk;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #1e1d2b;
  color: #2c3e50;
}
</style>
