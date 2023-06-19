<template>
  <v-container class="footer-style">
    <v-row>
      <h5>An investment in knowledge pays the best interest</h5>
      <v-spacer></v-spacer>
      <v-btn icon
             href="https://github.com/annalisegong?tab=repositories"
             target="_blank"
             class="btn-style">gh</v-btn>
      <v-btn icon
             href="https://linkedin.com/in/annalise-gong/"
             target="_blank"
             class="btn-style">li</v-btn>
      <v-btn icon
             href="#"
             target="_blank"
             class="btn-style">ig</v-btn>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'MyFooter',

  }
</script>

<style scoped>
.footer-style{
  background-color: #1e1d2b;
  color: #9e9e9e;
  padding-bottom: 20px;
  align-items: center;
}
.btn-style{
  margin-left: 6px;
  margin-right: 6px;
}
</style>
