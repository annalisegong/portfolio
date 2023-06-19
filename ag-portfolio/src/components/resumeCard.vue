<template>
  <div style="display:flex; justify-content: center; align-items: center;">
    <v-card class="resume-card">
      <v-img src="src/assets/resume.png" class="img-size"/>
      <div style="display: flex;justify-content: center; align-items: center">
        <v-divider color="#f4f2f5" length="80" thickness="5" style=" padding-bottom: 5px;" class="divider-wt line-gradient"></v-divider>
      </div>
      <v-card-actions class="justify-center" style="padding: 10px">
        <v-btn
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
.resume-card{
  min-width: 80%;
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
  background-color: #3b49a3;
  color: #DBE0E9;
  font-size: 20pt;
  text-transform: none;
}
</style>
