<template>
<!--  intro section-->
  <v-container display="flex">
    <h1 class="heading-gradient">Hi, I am Anna Gong.</h1>
    <h1 class="heading-gradient">Welcome to my Portfolio</h1>
    <p class="intro-p">Aspiring mobile and web developer graduating Spring 2024 with a Bachelor's and Master's Degree from Concordia University Wisconsin.</p>
    <v-btn rounded height="60" min-width="200" class="intro-btn">Learn More</v-btn>
  </v-container>
  <!--  projects section-->
  <v-container>
    <v-divider color="#f4f2f5" length="75" thickness="5" class="divider-wt"></v-divider>
    <h2 class="heading-gradient">Projects</h2>
    <v-row justify="space-evenly" style="padding-top: 40px">
      <v-col>
        <ProjectCard
          title="Tic Tac Toe App"
          url="https://img.itch.zone/aW1nLzEwNzU1MDY4LnBuZw==/original/den%2FQY.png"
          items="['Unity', 'Visual Studio Code']"
          text="Tic Tac Toe is a simple web application, available for free download, that was created with a four month time period I created with a team of three other novice computer science students. This application was developed with Unity Game Engine, including hand drawn graphics and a computerized opponent on three levels of difficulty. This project has led me to explore careers involving mobile app or game development."
          code="https://github.com/annalisegong/TicTacToe"
          bName="download"
          download="https://annalisegong.itch.io/tic-tac-toe-csc-370"/>
      </v-col>
      <v-col>
        <ProjectCard
          title="Circle B Webpage Redesign"
          url="src/assets/circleBLogo.png"
          items="['HTML', 'CSS', 'XAMPP', 'Sublime']"
          text="Circle B Redesign was inspired by the final project for Advanced Database and Web Development. The current website for this local bowling alley appears a bit outdated so I created a local project using front end web development tools to implement a dynamic and more modern looking UI. This project in particular piqued my interest in full stack development."
          code="https://github.com/annalisegong/CircleB"
          bName="video"
          download="src/assets/CSC460FinalProject.mp4"/>
      </v-col>
<!--      update download link to new video of changed circle B when i finish it-->
      <v-col>
        <ProjectCard
          title="Splash Clinical Referral Transfer"
          url="src/assets/splashLogo.png"
          items="['LEMP', 'Vue']"
          text="input here ..."
          code="#"/>
      </v-col>
    </v-row>
  </v-container>
  <!-- tech section-->
  <v-container>
    <v-divider color="#f4f2f5" length="75" thickness="5" class="divider-wt"></v-divider>
    <h2 class="heading-gradient">Technologies</h2>
    <p>I have worked with a range of technologies in the mobile, web, and game development world. The frameworks and programs I have used apply to both backend and front end development</p>
  </v-container>
  <!--  about section-->
  <v-container>
    <v-divider color="#f4f2f5" length="75" thickness="5" class="divider-wt"></v-divider>
    <h2 class="heading-gradient">About</h2>
    <p>short paragraph about myself</p>
    <!--    insert time line with icons-->
    <h3 class="heading-gradient" style="margin-left: 60px">Personal Accomplishments</h3>
    <!--    vue widget or component here-->
  </v-container>
  <!--  resume section-->
  <v-container>
    <v-divider color="#f4f2f5" length="75" thickness="5" class="divider-wt"></v-divider>
    <h2 class="heading-gradient">Resume</h2>
    <!--    insert img with src here to open up new tab-->
  </v-container>
</template>

<script>
import ProjectCard from "@/components/projectCard.vue";
export default {
  name: 'MainBody',
  components: {
    ProjectCard
  }
}
</script>

<style scoped>
h1{
  font-size: 40pt;
  color: #DBE0E9;
  margin-left: 50px;
}
h2{
  font-size: 36pt;
  color: #DBE0E9;
}
h3 {
  font-size: 24pt;
  color: #DBE0E9;
}
p{
  font-size: 13pt;
  line-height: 1.75;
  color: #DBE0E9;
  margin-left: 80px;
}
.heading-gradient{
  background: linear-gradient(to right, #DBE0E9, #9e9e9e);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.line-gradient{
  background: linear-gradient(to right, #923fb8, #4bbedb);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.intro-p{
  font-size: 15pt;
  line-height: 1.8;
  color: #7b838f;
  margin-left: 120px;
  margin-right: 400px;
}

.intro-btn{
  margin-top: 20px;
  margin-left: 50px;
  background: linear-gradient(to right, #923fb8, #4bbedb);
  color: #f0f0f0;
  text-transform: none;
  font-size: 15pt
}
.divider-wt{
  padding-top: 25px;
  padding-bottom: 5px;
}
</style>
