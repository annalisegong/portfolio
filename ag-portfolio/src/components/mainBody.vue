<template>
  <!--  intro section-->
  <v-container display:flex>
    <h1 class="text-gradient">Hi, I am Anna Gong.</h1>
    <h1 class="text-gradient">Welcome to my Portfolio</h1>
    <p class="intro-p">Aspiring mobile and web developer graduating Spring 2024 with a Bachelor's and Master's Degree from Concordia University Wisconsin.</p>
    <v-btn rounded height="60" min-width="200" class="intro-btn">Learn More</v-btn>
  </v-container>
  <!--  projects section-->
  <v-container id="Projects">
      <v-divider color="#f4f2f5" length="75" thickness="5" class="divider-wt line-gradient"></v-divider>
      <h2 class="text-gradient">Projects</h2>
      <v-row justify="space-evenly" style="padding-top: 40px">
        <v-col class="project-col">
          <ProjectCard
            title="Tic Tac Toe App"
            url="src/assets/tictactoe.png"
            :items="p1Stack"
            text="Tic Tac Toe is a simple web application, available for free download, that was created with a four month time period I created with a team of three other novice computer science students. This application was developed with Unity Game Engine, including hand drawn graphics and a computerized opponent on three levels of difficulty. This project has led me to explore careers involving mobile app or game development."
            code="https://github.com/annalisegong/TicTacToe"
            bName="download"
            download="https://annalisegong.itch.io/tic-tac-toe-csc-370"/>
        </v-col>
        <v-col class="project-col">
          <ProjectCard
            title="Circle B Webpage Redesign"
            url="src/assets/circleBLogo.png"
            :items="p2Stack"
            text="Circle B Redesign was inspired by the final project for Advanced Database and Web Development. The current website for this local bowling alley appears a bit outdated so I created a local project using front end web development tools to implement a dynamic and more modern looking UI. This project in particular piqued my interest in full stack development."
            code="https://github.com/annalisegong/CircleB"
            bName="video"
            download="src/assets/CSC460FinalProject.mp4"/>
        </v-col>
  <!--update download link to new video of changed circle B when i finish it-->
        <v-col class="project-col">
          <ProjectCard
            title="Splash Clinical Referral Transfer"
            url="src/assets/splashLogo.png"
            :items="p3Stack"
            text="input here ..."
            code="#"/>
        </v-col>
  <!--      finish this card at the end of internship-->
      </v-row>
    </v-container>
  <!-- tech section-->
  <v-container id="Technologies">
      <v-divider color="#f4f2f5" length="75" thickness="5" class="divider-wt line-gradient"></v-divider>
      <h2 class="heading-gradient">Technologies</h2>
      <p>I have worked with a range of technologies in the mobile, web, and game development world. The frameworks and programs I have used apply to both backend and front end development</p>
      <v-row>
        <v-col class="project-col">
          <tech-card
            title="Programming Languages"
            :items="languages">
          </tech-card>
        </v-col>
        <v-col class="project-col">
          <tech-card
            title="Programs/Systems"
            :items="programs">
          </tech-card>
        </v-col>
        <v-col class="project-col">
          <tech-card
            title="Frameworks"
            :items="frameworks">
          </tech-card>
        </v-col>
      </v-row>
    </v-container>
  <!--  about section-->
  <v-container id="About">
    <v-divider color="#f4f2f5" length="75" thickness="5" class="divider-wt line-gradient"></v-divider>
    <h2 class="text-gradient">About</h2>
    <p>I came into college with my major undecided, since I couldn't choose between computer science and health professions. I soon realized that I didn't have to choose between the two, and consequently double majored in my two areas of interest: Computer Science and Psychology. Eventually, my professor suggested I drop my Psych major to instead pursue a Master's Degree in Computer Science via CUW's accelerated, thus allowing me to graduate in a total of four years with my Bachelor's and Master's Degree. Since joining this program, I've become interested in pursuing a career in mobile, web, or game development.</p>
    <p>I am currently a software engineering intern for Splash Clinical LLC, and within the next year I hope to continue improving my programming skills, solidify my career path, and land a full time job after graduation.</p>
    <div>
      <v-row justify="space-evenly">
        <v-col>
          <TimeCard year="2020"
                    description="Became a student athlete at Concordia University with my major undecided" />
        </v-col>
        <v-col>
          <TimeCard year="2021"
                    description="Declared a double major in Computer Science and Psychology, with a minor in Spanish" />
        </v-col>
        <v-col>
          <TimeCard year="2022"
                    description="Dropped the Psychology major to join the accelerated Computer Science Program" />
        </v-col>
        <v-col>
          <TimeCard year="2023"
                    description="Took an interest in mobile and web development. Completed an internship with Splash Clinical LLC" />
        </v-col>
        <v-col>
          <TimeCard year="2024"
                    description="Expect to graduate in Spring with B.S. in Software Engineering and M.S. in Computer Science" />
        </v-col>
      </v-row>
    </div><br>
    <v-divider color="#f4f2f5" length="75" thickness="5" style="margin-left: 60px; padding-top: 5px;" class="divider-wt line-gradient"></v-divider>
    <h3 class="text-gradient" style="margin-left: 60px; padding-bottom: 20px">Personal Accomplishments</h3>
    <v-row>
      <v-col class="a-card-size">
        <AccomplishmentCard
          title="4+ years"
          subtitle="46 credits completed"
          text="in computer science course work"/>
      </v-col>
      <v-col class="a-card-size">
        <AccomplishmentCard
          title="4 degrees"
          subtitle="earned by Spring 2024:"
          text="Associate (2) Bachelor (1) Master (1)"/>
      </v-col>
      <v-col class="a-card-size">
        <AccomplishmentCard
          title="2 NACC Honors"
          subtitle="for lacrosse in 2023"
          text="Second Team All Conference and CSC Academic All-District"/>
      </v-col>
      <v-col class="a-card-size">
        <AccomplishmentCard
          title="Vice President"
          subtitle="of Alpha Chi"
          text="the American Collegiate National Honors Society"/>
      </v-col>
    </v-row>
  </v-container>
  <!--  resume section-->
  <v-container id="Resume">
    <v-divider color="#f4f2f5" length="75" thickness="5" class="divider-wt line-gradient"></v-divider>
    <h2 class="text-gradient">Resume</h2>
      <ResumeCard />
    <br>
    <v-divider color="#f4f2f5" thickness="3" class="divider-wt line-gradient"></v-divider>
  </v-container>
  <!--  footer section-->
</template>

<script>
import ProjectCard from "@/components/projectCard.vue";
import TechCard from "@/components/techCard.vue";
import AccomplishmentCard from "@/components/accomplishmentCard.vue";
import ResumeCard from "@/components/resumeCard.vue";
import TimeCard from "@/components/timeCard.vue";
export default {
  name: 'MainBody',
  components: {
    ProjectCard,
    TechCard,
    AccomplishmentCard,
    ResumeCard,
    TimeCard
  },

  data(){
    return{
      p1Stack: ['Unity', 'Visual Studio Code', 'Procreate'],
      p2Stack: ['HTML', 'CSS', 'JavaScript', 'XAMPP'],
      p3Stack: ['Linux', 'Nginx', 'MySQL', 'PHP'],
      programs: ['MacOS', 'Windows', 'Linux', 'Unity Game Engine', 'Visual Studio Code', 'PHP Storm', 'MySQL Workbench', 'MongoDB', 'Github', 'Bitbucket', 'Source Tree', 'XAMPP', 'VirtualBox', 'Postman'],
      frameworks: ['Vue', 'Laravel', 'Blade Template', 'Angular', 'Express', 'Node.js'],
      languages: ['C#', 'C++', 'PHP','SQL', 'HTML', 'CSS', 'JavaScript', 'Python']
    };
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
  font-size: 25pt;
  color: #DBE0E9;
}
p{
  font-size: 13pt;
  line-height: 1.75;
  color: #7b838f;
  margin-left: 80px;
  padding: 5px 10px 20px 10px;
}
.text-gradient{
  background: linear-gradient(to right, #DBE0E9, #605f61);
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
.project-col{
  width: 33.33%;
}
.a-card-size{
  max-width: 25%;
  min-height: 180px;
}

</style>
