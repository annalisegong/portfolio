<template>
  <div style="display:flex; justify-content: center; align-items: center; font-family: 'Mukta'">
    <v-card class="resume-card">
      <v-img src="src/assets/resume.png" class="img-size"/>
      <div style="display: flex;justify-content: center; align-items: center">
        <v-divider color="#f4f2f5" length="80" thickness="5" style=" padding-bottom: 5px;" class="divider-wt line-gradient"></v-divider>
      </div>
      <v-card-actions class="justify-center" style="padding: 10px">
        <v-btn rounded
               height="40"
               width="100"
          class="r-card-btn"
          variant="text"
          href="src/assets/resume.png"
          target="_blank"
        >view</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'ResumeCard'
}
</script>

<style scoped>
@media (min-width: 1281px) and (max-width: 2000px) {
  .resume-card{
    min-width: 90%;
    min-height: 100%;
    background-color: #1e1d2b;
    box-shadow: 0 0 8px #3b49a3;
    padding-bottom: 10px;
  }
  .img-size{
    margin:25px 40px 20px 40px;
    align-items: center;
    min-height: 650px;
    max-height: 800px;
    min-width: 450px;
  }
  .r-card-btn{
    background: linear-gradient(to right, #3b49a3, #4bbedb);
    color: #f0f0f0;
    color: #DBE0E9;
    font-size: 18pt;
    font-weight: 400;
    line-height: 1.5;
    text-transform: none;
  }
}
@media (min-width: 701px) and (max-width: 1280px) {
  .resume-card{
    max-width: 70%;
    min-height: 90%;
    background-color: #1e1d2b;
    box-shadow: 0 0 8px #3b49a3;
    padding-bottom: 10px;
  }
  .img-size{
    margin:25px 40px 20px 40px;
    align-items: center;
    min-height: 550px;
    max-height: 700px;
    min-width: 350px;
  }
  .r-card-btn{
    background: linear-gradient(to right, #3b49a3, #4bbedb);
    color: #f0f0f0;
    color: #DBE0E9;
    font-size: 16pt;
    font-weight: 400;
    line-height: 1.2;
    text-transform: none;
  }
}
@media (min-width: 375px) and (max-width: 700px) {
  .resume-card{
    max-width: 80%;
    min-height: 75%;
    background-color: #1e1d2b;
    box-shadow: 0 0 8px #3b49a3;
    padding-bottom: 10px;
  }
  .img-size{
    margin:15px 40px 10px 40px;
    align-items: center;
    min-height: 450px;
    max-height: 650px;
    max-width: 350px;
  }
  .r-card-btn{
    background: linear-gradient(to right, #3b49a3, #4bbedb);
    color: #f0f0f0;
    color: #DBE0E9;
    font-size: 14pt;
    font-weight: 300;
    line-height: 1.2;
    text-transform: none;
  }
}
</style>
