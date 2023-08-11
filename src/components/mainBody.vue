<template>
<!--  <link rel="stylesheet" data-href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&amp;display=swap">-->
  <link href="https://fonts.googleapis.com/css2?family=Mukta:wght@200;300;400;500;600;700;800&display=swap">
  <!--  intro section-->
  <v-container display:flex class="section-size">
    <div class="container">
      <div class="text-container">
        <div>
          <h1 class="text-gradient">Hi, I am Anna Gong.</h1>
          <h1 class="text-gradient">Welcome to my Portfolio</h1>
          <p class="intro-p">Aspiring mobile and web developer graduating in Spring 2024 with a Bachelor's and Master's Degree from Concordia University Wisconsin.</p>
          <v-btn rounded href="#About" v-scroll-to="{el:'#About', duration:1000}" class="intro-btn">Learn More</v-btn>
        </div>
        <div class="lottie-container">
        <lottie-player src="https://assets9.lottiefiles.com/packages/lf20_CR23KK4W5R.json"  background="transparent"  speed="1"  class="animation"  loop  autoplay></lottie-player>
        </div>
      </div>
    </div>
  </v-container>
  <!--  projects section-->
  <v-container id="Projects" class="section-size">
      <v-divider color="#f4f2f5" :length="getDividerLength" thickness="5" class="divider-wt line-gradient"></v-divider>
      <h2 class="text-gradient">Projects</h2>
      <v-row justify="space-evenly">
          <ProjectCard :projects="projects" />
      </v-row>
    </v-container>
  <!-- tech section-->
  <v-container id="Technologies" class="section-size">
      <v-divider color="#f4f2f5" :length="getDividerLength" thickness="5" class="divider-wt line-gradient"></v-divider>
      <h2 class="text-gradient">Technologies</h2>
      <p>I have worked with a range of technologies in the mobile, web, and game development world. The frameworks and programs I have used apply to both backend and front end development.</p>
      <v-row>
          <tech-card :technologies="technologies" />
      </v-row>
    </v-container>
  <!--  about section-->
  <v-container id="About" class="section-size">
    <v-divider color="#f4f2f5" :length="getDividerLength" thickness="5" class="divider-wt line-gradient"></v-divider>
    <h2 class="text-gradient">About</h2>
    <p>I came into college with my major undecided, since I couldn't choose between computer science and health professions. I soon realized that I didn't have to choose between the two, so I double majored in my two areas of interest: computer science and psychology. Eventually, my professor suggested I drop my psych major to instead pursue a Master's Degree in Computer Science via CUW's accelerated program, thus allowing me to graduate in a total of four years with my Bachelor's and Master's Degree. Since joining this program, I've become interested in pursuing a career in mobile, web, or game development.</p>
    <p>Currently, I am a software engineering intern for Splash Clinical LLC. Within the next year, I hope to continue improving my programming skills, solidify my career path, and land a full time job after graduation.</p>
    <!--timeline   -->
    <TimeCard :years="years" />
    <v-divider color="#f4f2f5" length="75" thickness="5" class="divider-wt line-gradient divider-about"></v-divider>
    <!-- accomplishments     -->
    <div id="accomplishments" class="accomplishments">
      <h3 class="text-gradient" style="padding-bottom: 20px;">Personal Accomplishments</h3>
      <v-row justify="center">
<!--        <v-col cols="12" sm="6" md="4" lg="3" class="a-card-size">-->
          <AccomplishmentCard :accomplishments="accomplishments" />
      </v-row>
    </div>
  </v-container>
  <!--  resume section-->
  <v-container id="Resume" class="section-size">
    <v-divider color="#f4f2f5" :length="getDividerLength" thickness="5" class="divider-wt line-gradient"></v-divider>
    <h2 class="text-gradient">Resume</h2>
      <ResumeCard />
    <br>
    <v-divider color="#f4f2f5" thickness="2" style="padding-top: 5px" class="divider-wt line-gradient"></v-divider>
    <div style="display: flex; padding-bottom: 20px;">
        <div class="footer-div">
          <h5 style="padding-bottom: 8px">Call</h5>
          <a style="text-decoration: none; color: #DBE0E9; font-size: 12pt; font-weight: 300; white-space: nowrap; min-width: 90%" href="tel:602-625-2342">602-615-2342</a>
        </div>
        <div class="footer-div">
          <h5 style="padding-bottom: 8px">Email</h5>
          <a style="text-decoration: none; color: #DBE0E9; font-size: 12pt; font-weight: 300;" href="mailto:gonganna01@aol.com">gonganna01@aol.com</a>
        </div>
    </div>
  </v-container>
</template>

<script>
import ProjectCard from "@/components/projectCard.vue";
import TechCard from "@/components/techCard.vue";
import AccomplishmentCard from "@/components/accomplishmentCard.vue";
import ResumeCard from "@/components/resumeCard.vue";
import TimeCard from "@/components/timeCard.vue";
import VueScrollTo from 'vue-scrollto';
import 'animate.css';


export default {
  name: 'MainBody',
  components: {
    ProjectCard,
    TechCard,
    AccomplishmentCard,
    ResumeCard,
    TimeCard,
    VueScrollTo
  },

  data(){
    return{
      display: false,
      projects: [
        {
          title: 'Tic Tac Toe App',
          url: '/assets/tictactoe.png',
          items: ['Unity', 'Visual Studio Code', 'Procreate'],
          text: 'Tic Tac Toe is a simple web application that I worked on as the main programmer among a team of three other novice programmers. This project was completed within a four-month time period and was developed on the Unity Game Engine. It is currently available for free download, and consists of a computerized opponent for three levels of difficulty. This project has led me to explore careers involving mobile app or game development.',
          code: 'https://github.com/annalisegong/TicTacToe',
          bName: 'download',
          download: 'https://annalisegong.itch.io/tic-tac-toe-csc-370'
        },
        {
          title: 'Circle B Redesign',
          url: '/assets/circleBLogo.png',
          items: ['HTML', 'CSS', 'JavaScript', 'XAMPP'],
          text: 'Circle B Redesign was inspired by the final project for Advanced Database and Web Development. The current website for this local bowling alley appears a bit outdated, so I created a local project using front-end web development tools to implement a dynamic and more modern-looking UI. This project, in particular, piqued my interest in full-stack development.',
          code: 'https://github.com/annalisegong/CircleB',
          bName: 'video',
          download: '/assets/CSC460FinalProject.mp4'
        },
        {
          title: 'Referral Site Transfer',
          url: '/assets/splashLogo.png',
          items: ['Linux', 'Nginx', 'MySQL', 'PHP', 'Vue'],
          text: 'This internship project increased my familiarity with MVC architecture and full stack development. I augmented Splash Clinical\'s internal Patient Recruitment Portal by programming a referral site transfer capabilities that would allow managers to transfer patients to a different study site via the database, once approved by super managers. Enabling this feature alleviated a portion of the development team\'s workload as well as increased the company\'s productivity and efficiency in patient recruitment.',
          code: '#/src/splashCode.html',
          bName: 'demo',
          download: 'https://miro.com/app/board/uXjVMx4bWW8=/?moveToWidget=3458764560741361867&cot=14'
        }
      ],
      technologies: [
        {
          title: 'Programming Languages',
          items: ['C#', 'C++', 'PHP','SQL', 'HTML', 'CSS', 'JavaScript', 'Python']
        },
        {
          title: 'Programs / Systems',
          items: ['MacOS', 'Windows', 'Linux', 'MongoDB', 'Github', 'Bitbucket', 'XAMPP', 'VirtualBox', 'Postman', 'PHP Storm', 'Source Tree', 'Unity Game Engine', 'Visual Studio Code', 'MySQL Workbench']
        },
        {
          title: 'Frameworks',
          items: ['Vue', 'Laravel', 'Angular', 'Express', 'Node.js', 'Blade Template']
        }
      ],
      years: [
        { year: '2020', description: 'Became a student athlete at Concordia University with my major undecided'},
        { year: '2021', description: 'Declared a double major in Computer Science and Psychology, with a minor in Spanish'},
        { year: '2022', description: 'Dropped the Psychology major to join the accelerated Computer Science Program'},
        { year: '2023', description: 'Took an interest in mobile and web development. Completed an internship with Splash Clinical LLC'},
        { year: '2024', description: 'Expect to graduate in Spring with B.S. in Computer Science and M.S. in Software Engineering'}
      ],
      accomplishments: [
        { title:"4+ years",
          subtitle:"46 credits completed",
          text:"In computer science course work"},
        {
          title:"4 degrees",
          subtitle:"Earned by Spring 2024",
          text:"Associate (2) Bachelor (1) Master (1)"
        },
        {
          title:"2 NACC Honors",
          subtitle:"For lacrosse in 2023",
          text:"Second Team All-Conference and CSC Academic All-District"
        },
        {
          title:"Vice President",
          subtitle:"of Alpha Chi",
          text:"The American Collegiate National Honors Society"
        }
      ]
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  computed: {
    getDividerLength() {
      if (typeof window !== 'undefined') {
        const screenWidth = window.innerWidth;
        if (screenWidth >= 375 && screenWidth <= 700) {
          return 500; // Set the length to 500 when within the desired range
        }
      }
      return 75; // Default length for other screen widths
    },
  },
  // allows slow scrolling on menu click
  methods: {
    handleScroll() {
      const element = document.getElementById('Projects');
      const rect = element.getBoundingClientRect();
      const visible = rect.top < window.innerHeight;
      if (visible) {
        this.display = true;
      }
    },
  },
};
</script>

<style scoped>
/* laptop desk size; need to write style for bigger than 2000px so nothing gets bigger*/
@media (min-width: 1281px) and (max-width: 9300px){
  h1{
    font-size: 40pt;
    font-weight: 800;
    color: #DBE0E9;
    margin-left: 50px;
  }
  h2{
    font-size: 36pt;
    font-weight: 700;
    padding-bottom: 20px;
    color: #DBE0E9;
  }
  h3 {
    font-size: 25pt;
    font-weight: 600;
    color: #DBE0E9;
  }
  h4 {
    font-size: 20pt;
    font-weight: 500;
    color: #DBE0E9;
  }
  h5{
    font-size: 14pt;
    font-weight: 400;
    color: #9e9e9e;
  }
  p{
    font-size: 14pt;
    font-weight: 400;
    line-height: 1.75;
    color: #7b838f;
    margin: 3px 80px;
    padding: 5px 10px 20px 10px;
  }
  #accomplishments{
    margin-left: 60px;
  }
  .container{
    display: flex;
    justify-content: center;
  }
  .text-container {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .lottie-container{
    margin-left: 20px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .intro-p{
    font-size: 15pt;
    line-height: 1.8;
    font-weight: 500;
    color: #7b838f;
    max-width: 75%;
    margin: 0 100px;
    padding: 5px 20px
  }
  .intro-btn{
    margin-top: 15px;
    margin-bottom: 15px;
    margin-left: 50px;
    min-height: 60px;
    min-width: 200px;
    background: linear-gradient(to right, #923fb8, #4bbedb);
    color: #f0f0f0;
    text-transform: none;
    font-size: 15pt
  }
  .section-size{
    font-family: Mukta, Space-Grotesk, sans-serif;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
  .animation{
    width: 400px;
    height: 300px;
  }
  .divider-wt{
    padding-top: 25px;
    padding-bottom: 0;
  }
  .divider-about{
    margin-left: 20px; padding-top: 5px;
  }
  .text-gradient{
    background: linear-gradient(to right, #DBE0E9, #48444f);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .line-gradient{
    background: linear-gradient(to right, #923fb8, #4bbedb);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .footer-div{
    flex-basis: 25%;
    padding: 15px 40px;
  }
}
/* screen size bigger than iphone less than laptop */
@media (min-width: 701px) and (max-width: 1280px){
  h1{
    font-size: 25pt;
    font-weight: 800;
    color: #DBE0E9;
    margin-left: 25px;
  }
  h2{
    font-size: 22pt;
    font-weight: 700;
    padding-bottom: 20px;
    color: #DBE0E9;
  }
  h3 {
    font-size: 20pt;
    font-weight: 600;
    padding-bottom: 20px;
    color: #DBE0E9;
  }
  h4 {
    font-size: 15pt;
    font-weight: 500;
    color: #DBE0E9;
  }
  h5{
    font-size: 12pt;
    font-weight: 400;
    color: #9e9e9e;
  }
  p{
    font-size: 12pt;
    font-weight: 400;
    line-height: 1.75;
    color: #7b838f;
    margin: 3px 80px;
    padding: 5px 10px 20px 10px;
  }
  .container{
    display: flex;
    justify-content: center;
  }
  .text-container {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .lottie-container{
    margin-left: 20px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  #accomplishments{
    margin-left: 60px;
  }
  .intro-p{
    font-size: 12pt;
    line-height: 1.8;
    font-weight: 500;
    color: #7b838f;
    min-width: 75%;
    margin: 0 70px;
    padding: 5px 10px
  }
  .intro-btn{
    margin-top: 15px;
    margin-left: 50px;
    min-height: 55px;
    min-width: 175px;
    background: linear-gradient(to right, #923fb8, #4bbedb);
    color: #f0f0f0;
    text-transform: none;
    font-size: 15pt
  }
  .section-size{
    font-family: Mukta, Space-Grotesk, sans-serif;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
  .animation{
    width: 300px;
    height: 200px;
  }
  .divider-wt{
    padding-top: 25px;
    padding-bottom: 0;
  }
  .divider-about{
    margin-left: 20px; padding-top: 5px;
  }
  .text-gradient{
    display: inline-block;
    background: linear-gradient(to right, #DBE0E9, #48444f);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .line-gradient{
    background: linear-gradient(to right, #923fb8, #4bbedb);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .footer-div{
    flex-basis: 25%;
    padding: 15px 40px;
  }
}
/* iphone screen size */
@media (min-width: 375px) and (max-width: 700px){
  h1{
    font-size: 20pt;
    font-weight: 700;
    color: #DBE0E9;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  h2{
    font-size: 24pt;
    font-weight: 700;
    padding-bottom: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #DBE0E9;
  }
  h3 {
    font-size: 20pt;
    font-weight: 600;
    color: #DBE0E9;
  }
  h4 {
    font-size: 15pt;
    font-weight: 500;
    color: #DBE0E9;
  }
  h5{
    font-size: 12pt;
    font-weight: 400;
    color: #9e9e9e;
  }
  p{
    font-size: 12pt;
    font-weight: 400;
    line-height: 1.75;
    color: #7b838f;
    margin: 3px 0;
    padding: 5px 10px 20px 10px;
  }
  .container{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .text-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  #accomplishments{
    margin-left: 20px;
  }
  .intro-p{
    font-size: 12pt;
    line-height: 1.8;
    font-weight: 500;
    color: #7b838f;
    min-width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin:0px;
    padding: 10px;
  }
  .intro-btn{
    margin-top: 14px;
    margin-left: 100px;
    min-height: 45px;
    min-width: 150px;
    margin-bottom: 20px;
    background: linear-gradient(to right, #923fb8, #4bbedb);
    color: #f0f0f0;
    font-weight: 400;
    text-transform: none;
    font-size: 13pt
  }
  .section-size{
    font-family: Mukta, Space-Grotesk, sans-serif;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
  .animation{
    width: 250px;
    height: 200px;
  }
  .divider-wt{
    padding-top: 25px;
    padding-bottom: 0;
  }
  v-divider {
    length: 500px;
  }
  .divider-about{
    margin-left: 20px; padding: 5px;
  }
  .text-gradient{
    background: linear-gradient(to right, #DBE0E9,  #c9cdd6, #48444f);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .line-gradient{
    background: linear-gradient(to right, #923fb8, #4bbedb);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .footer-div{
    flex-basis: 25%;
    padding: 15px;
  }
}
</style>
