<template>
  <div style="display: flex; flex-wrap: wrap; justify-content: center; align-items: flex-start; min-width: 90%;">
    <div v-for="p in projects" :key="p.title" class="p-card">
      <v-card class="main-card" style="font-family: Mukta, Space-Grotesk, sans-serif">
        <v-card-title class="p-card-title">{{ p.title }}</v-card-title>
        <v-img :src="p.url" class="p-card-img"/>
        <v-card-actions class="justify-center" style="padding: 10px">
          <v-btn rounded
                 class="p-card-btn"
                 variant="text"
                 :href="p.code"
                 target="_blank"
          >
            code
          </v-btn>
          <v-btn rounded
                 class="p-card-btn"
                 variant="text"
                 :href="p.download"
                 target="_blank"
          >
            {{p.bName}}
          </v-btn>
        </v-card-actions>
        <div class="p-card-text-height">
          <v-card-text class="p-card-text">{{ p.text }}</v-card-text>
        </div>
        <!-- get stack to start at same spot on -->
        <div class="stack-container">
          <h4 style="text-align: center; color: #DBE0E9; font-size: 14pt; font-weight: 600">Stack</h4>
          <div class="stack-settings">
            <span v-for="(item, index) in p.items" :key="index" style="margin-right: 22px;">{{ item }}</span>
          </div>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectCard',

  props: {
    projects: Array
  }
}
</script>

<style scoped>
@media (min-width: 1281px) and (max-width: 3000px) {
  .main-card {
    min-width: 100%;
    min-height: 100%;
    background-color: #1e1d2b;
    box-shadow: 0 0 8px #7c60bd;
    color: #DBE0E9;
  }
  .p-card {
    flex-basis: calc(25% - 20px);
    margin: 15px;
  }
  .p-card-title {
    color: #DBE0E9;
    text-align: center;
    font-size: 22pt;
    font-weight: 600;
    white-space: break-spaces;
    word-break: break-word;
  }
  .p-card-img{
    margin: 10px;
    max-height: 250px;
  }
  .p-card-text-height{
    min-height: 375px;
  }
  .p-card-text {
    line-height: 1.75;
    font-weight: 300;
    margin: 0 20px;
    color: #DBE0E9;
    font-size: 13pt;
  }

  .p-card-btn {
    background: linear-gradient(to right, #4a2a6d, #8b5cc0);
    color: #f4f2f5;
    margin: 2px 10px;
    padding: 3px 8px;
    line-height: 2;
    font-size: 12pt;
    font-weight: 400;
    text-transform: none;
  }

  .stack-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 0;
  }
  .stack-settings {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;
    padding: 10px;
    height: 50px;
    font-size: 12pt;
    font-weight: 300;
    color: #bd9d60;
  }
}
@media (min-width: 851px) and (max-width: 1280px) {
  .main-card {
    min-width: 100%;
    min-height: 100%;
    background-color: #1e1d2b;
    box-shadow: 0 0 8px #7c60bd;
    color: #DBE0E9;
  }
  .p-card{
    flex-basis: calc(50% - 20px);
    margin: 8px;
  }
  .p-card-title{
    color: #DBE0E9;
    text-align: center;
    font-size: 20pt;
    font-weight: 500;
    white-space: break-spaces;
    word-break: break-word;
  }
  .p-card-img{
    margin: 10px;
    max-height: 200px;
  }
  .p-card-text-height{
    min-height: 280px;
  }
  .p-card-text{
    line-height: 1.5;
    font-weight: 300;
    margin: 0 20px;
    color: #DBE0E9;
    font-size: 12pt;
  }
  .p-card-btn{
    background: linear-gradient(to right, #4a2a6d, #8b5cc0);
    color:#f4f2f5;
    margin: 2px 8px;
    padding: 3px 8px;
    line-height: 2;
    font-size: 10pt;
    font-weight: 300;
    text-transform: none;
  }
  .stack-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 0;
  }
  .stack-settings{
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;
    padding: 5px;
    height: 50px;
    font-size: 12pt;
    font-weight: 300;
    color: #bd9d60;
  }
}
@media (min-width: 375px) and (max-width: 850px) {
  .main-card{
    min-width: 100%;
    min-height: 100%;
    background-color:#1e1d2b;
    box-shadow: 0 0 8px #7c60bd;
    color: #DBE0E9;
  }
  .p-card{
    flex-basis: 100%;
    margin: 25px;
  }
  .p-card-title{
    color: #DBE0E9;
    text-align: center;
    font-size: 20pt;
    font-weight: 500;
    white-space: break-spaces;
    word-break: break-word;
  }
  .p-card-img{
    margin: 10px;
    max-height: 225px;
  }
  .p-card-text-height{
    min-height: 200px;
  }
  .p-card-text{
    line-height: 1.5;
    font-weight: 300;
    margin: 0 5px;
    color: #DBE0E9;
    font-size: 12pt;
  }
  .p-card-btn{
    background: linear-gradient(to right, #4a2a6d, #8b5cc0);
    color:#f4f2f5;
    margin: 2px 8px;
    padding: 3px 8px;
    line-height: 2;
    font-size: 10pt;
    font-weight: 300;
    text-transform: none;
  }
  .stack-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 0;
  }
  .stack-settings {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;
    padding: 5px;
    height: 50px;
    font-size: 12pt;
    font-weight: 300;
    color: #bd9d60;
  }
}
</style>
