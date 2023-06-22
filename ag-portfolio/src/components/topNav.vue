<template>
  <link href = "https://fonts.googleapis.com/icon?family=Material+Icons" rel = "stylesheet">
  <v-container class="menu-background" style="font-family: Mukta, Space-Grotesk, sans-serif">
      <v-row no-gutters
             class="justify-space text-center"
             style="min-width: 100%; min-height: 100%; align-items: center;">
        <v-col style="display: flex; align-items: center;">
          <v-icon style="margin: 0 4px">mdi-star-three-points-outline</v-icon>
          <h4 style="color: #DBE0E9">Portfolio</h4>
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
@media (min-width: 1281px) and (max-width: 3000px){
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
    font-size: 18pt;
    color: #DBE0E9;
  }
  .menu-background{
    display: flex;
    color: #DBE0E9;
    width: 100%;
    padding: 20px 0 50px 0;
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
}

@media (min-width: 701px) and (max-width: 1280px){
  h4 {
    font-size: 14pt;
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
    font-size: 18pt;
    color: #DBE0E9;
  }
  .menu-background{
    display: flex;
    color: #DBE0E9;
    width: 100%;
    padding: 20px 0 40px 0;
  }
  .btn-style{
    width: 40px;
    height: 40px;
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
}
@media (min-width: 375px) and (max-width: 700px){
  h4 {
    font-size: 11pt;
    color: #9e9e9e;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0;
  }
  a {
    font-size: 11pt;
    color: #DBE0E9;
  }
  .menu-background{
    display: flex;
    color: #DBE0E9;
    width: 100%;
    padding: 5px;
  }
  .btn-style{
    width: 30px;
    height: 30px;
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
    padding: 0 2px;
  }
}

</style>
