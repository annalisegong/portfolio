<template>
  <link href = "https://fonts.googleapis.com/icon?family=Material+Icons" rel = "stylesheet">
  <v-container class="menu-background" style="padding: 25px 0px 25px 0px; font-family: 'Mukta'">
      <v-row no-gutters
             class="justify-space text-center"
             style="min-width: 100%; min-height: 100%; align-items: center;">
        <v-col>
          logo goes here
        </v-col>
        <v-col>
          <a href="#Projects" style="text-decoration: none;"  v-scroll-to="{el:'#Projects', duration:1000}"><h4>Projects</h4></a>
        </v-col>
        <v-col>
          <a href="#Technologies" style="text-decoration: none" v-scroll-to="{el:'#Technologies', duration:1000}"><h4>Technologies</h4></a>
        </v-col>
        <v-col>
          <a href="#About" style="text-decoration: none" v-scroll-to="{el:'#About', duration:1000}"><h4>About</h4></a>
        </v-col>
        <v-col>
          <a href="#Resume" style="text-decoration: none" v-scroll-to="{el:'#Resume', duration:1000}"><h4>Resume</h4></a>
        </v-col>
<!-- add instagram link href-->
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
          <v-btn href="#"
                 target="_blank"
                 class="btn-style">
            <v-icon>mdi-instagram</v-icon>
          </v-btn>
      </v-row>
    </v-container>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon'
import {mdiAccount} from '@mdi/js'
import VueScrollTo from 'vue-scrollto'
export default {
  name: 'TopNav',
  components:{
    SvgIcon,
    VueScrollTo
  },
  props: {
  },
  data(){
    return{
      labels: ['Projects', 'Technologies', 'About','Resume'],
      path: mdiAccount
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
  display: flex;
  color: #DBE0E9;
  width: 100%;
  padding: 20px 0px 50px 0px;
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
  margin-right: 5px;
}

</style>
