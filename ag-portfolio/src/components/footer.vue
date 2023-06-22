<template>
  <v-container class="footer-style" style="font-family: Mukta, Space-Grotesk, sans-serif">
    <v-row style="align-items: center">
      <h5>An investment in knowledge pays the best interest</h5>
      <v-spacer></v-spacer>
      <v-btn href="https://github.com/annalisegong?tab=repositories"
             target="_blank"
             class="btn-style">
        <v-icon>mdi-github</v-icon>
      </v-btn>
      <v-btn href="https://linkedin.com/in/annalise-gong/"
             target="_blank"
             class="btn-style">
        <v-icon>mdi-linkedin</v-icon>
      </v-btn>
      <v-btn href="https://www.instagram.com/annagong4/"
             target="_blank"
             class="btn-style">
        <v-icon>mdi-instagram</v-icon>
      </v-btn>
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
  padding-bottom: 50px;
  align-items: center;
}
.btn-style{
  width: 60px;
  height: 60px;
  border-radius: 50%; /* Makes the button a perfect circle */
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: none;
  text-decoration: none;
  color: #DBE0E9;
  background-color: transparent;
  box-shadow: none;
  font-size: 18pt;
}
h5{
  font-size: 12pt;
  font-weight: 400;
  margin: 2px 8px;
}
@media (min-width: 375px) and (max-width: 700px){
  h5{
    font-size: 10pt;
    font-weight: 400;
  }
  .btn-style {
    width: 60px;
    height: 60px;
    font-size: 15pt;
  }
}
</style>
