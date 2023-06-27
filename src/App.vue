<template>
  <div>
    <link rel="stylesheet" data-href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&amp;display=swap">
    <TopNav />
    <MainBody />
    <MyFooter />
  </div>
</template>

<script>
import TopNav from './components/topNav.vue'
import MainBody from "@/components/mainBody.vue"
import MyFooter from "@/components/footer.vue"
export default {
  name: 'App',
  components: {
    TopNav,
    MainBody,
    MyFooter
  }
}
</script>
