<template>
    <v-container class="menu-background">
      <v-row align="center"
             no-gutters
             justify="space-evenly"
             style="min-width: 100%; min-height: 100%;">
        <v-col id="m-logo">
          logo goes here
        </v-col>
        <v-col id="m-projects">
          <a href="#">Projects</a>
        </v-col>
        <v-col id="m-tech">
          <a href="#">Technologies</a>
        </v-col>
        <v-col id="m-about">
          <a href="#">About</a>
        </v-col>
        <v-col id="m-resume">
          <a href="#">Resume</a>
        </v-col>
        <v-col>
<!-- add instagram link href-->
          <v-btn icon
                 href="https://github.com/annalisegong?tab=repositories"
                 target="_blank"
                 style="padding-right: 2px">gh</v-btn>
          <v-btn icon
                 href="https://linkedin.com/in/annalise-gong/"
                 target="_blank"
                 style="padding-left: 2px; padding-right: 2px">li</v-btn>
          <v-btn icon
                 href="#"
                 target="_blank"
                 style="padding-left: 2px">ig</v-btn>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
export default {
  name: 'TopNav',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  //margin: 40px 0 0;
  //font-size: 20pt;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  font-size: 20pt;
  color: #DBE0E9;
}
.menu-background{
  background-color: #495874;
  color: #DBE0E9;
  width: 100%;
}

</style>
