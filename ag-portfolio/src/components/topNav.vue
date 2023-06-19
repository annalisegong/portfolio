<template>
  <link href = "https://fonts.googleapis.com/icon?family=Material+Icons" rel = "stylesheet">
  <v-container class="menu-background">
      <v-row no-gutters
             class="justify-space-between text-center"
             style="min-width: 100%; min-height: 100%; align-items: center;">
        <v-col>
          logo goes here
        </v-col>
        <v-col>
          <a href="#Projects" style="text-decoration: none;" @click="scrollToSection('Projects')"><h4>Projects</h4></a>
        </v-col>
        <v-col>
          <a href="#Technologies" style="text-decoration: none" @click="scrollToSection('Technologies')"><h4>Technologies</h4></a>
        </v-col>
        <v-col>
          <a href="#About" style="text-decoration: none" @click="scrollToSection('About')"><h4>About</h4></a>
        </v-col>
        <v-col>
          <a href="#Resume" style="text-decoration: none" @click="scrollToSection('Resume')"><h4>Resume</h4></a>
        </v-col>
        <v-col>
<!-- add instagram link href-->
          <v-btn icon
                 href="https://github.com/annalisegong?tab=repositories"
                 target="_blank"
                 class="btn-style">gh</v-btn>
          <v-btn icon
                 href="https://linkedin.com/in/annalise-gong/"
                 target="_blank"
                 class="btn-style">li</v-btn>
          <v-btn icon="mdi-instagram"
                 href="#"
                 target="_blank"
                 class="btn-style">ig</v-btn>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
export default {
  name: 'TopNav',
  props: {
  },
  data(){
    return{
      labels: ['Projects', 'Technologies', 'About','Resume']
    }
  },
  methods: {
    scrollToSection(sectionId) {
      const section = document.querySelector(sectionId);
      if (section) {
        section.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          duration: 2000
        });
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  //margin: 40px 0 0;
  //font-size: 20pt;
}
h4 {
  font-size: 16pt;
  color: #9e9e9e;
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
  //background: linear-gradient(to right, #1e2e63, #3b49a3);
  display: flex;
  color: #DBE0E9;
  width: 100%;
  padding: 20px 0px 50px 0px;
}
.btn-style{
  margin-left: 6px;
  margin-right: 6px;
  color: #1e2e63;
}

</style>
