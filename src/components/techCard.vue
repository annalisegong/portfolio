<template>
  <div style="display: flex; flex-wrap: wrap; justify-content: flex-start; min-width: 90%;">
      <v-card v-for="t in technologies" :key="t.title" class="tech-card">
        <v-card-title class="tech-card-title">
          {{t.title}}
        </v-card-title>
        <v-card-text class="tech-card-text">
          <div v-for="(item, index) in t.items" :key="index" class="stack-item">
            {{ item }}
          </div>
        </v-card-text>
      </v-card>
  </div>
</template>

<script>
  export default {
    name: 'TechCard',

    props: {
      technologies: Array
    }
  }
</script>

<style scoped>
@media (min-width: 1281px) and (max-width: 3000px)
{
  .tech-card{
    background-color:#1e1d2b;
    box-shadow: 0 0 8px  #4bbedb;
    color: #DBE0E9;
    flex-basis: calc(33.33% - 20px);
    margin: 10px;
  }

  .stack-item {
    line-height: 1.75;
    font-size: 13pt;
    font-weight: 300;
    flex-basis: 50%;
    color: #DBE0E9;
  }
  .tech-card-title{
    color: #69b0c2;
    white-space: normal;
    text-align: center;
    font-size:20pt;
    font-weight: 500;
  }
  .tech-card-text{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 5px;
  }
}
@media (min-width: 821px) and (max-width: 1280px) {
  .tech-card {
    height: 350px;
    background-color: #1e1d2b;
    box-shadow: 0 0 8px #4bbedb;
    color: #DBE0E9;
    flex-basis: calc(33.33% - 20px);
    margin: 8px;
  }

  .stack-item {
    line-height: 1.75;
    font-size: 12pt;
    font-weight: 300;
    flex-basis: 50%;
    color: #DBE0E9;
  }

  .tech-card-title {
    color: #69b0c2;
    white-space: normal;
    text-align: center;
    font-size: 18pt;
    font-weight: 500;
  }

  .tech-card-text {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 5px;
  }
}
@media (min-width: 375px) and (max-width: 820px) {
  .tech-card {
    max-width: 100%;
    max-height: 300px;
    background-color: #1e1d2b;
    box-shadow: 0 0 8px #4bbedb;
    color: #DBE0E9;
    flex-basis: 100%;
    margin: 10px;
  }

  .stack-item {
    line-height: 1.75;
    font-size: 12pt;
    font-weight: 300;
    flex-basis: 50%;
    color: #DBE0E9;
  }

  .tech-card-title {
    color: #69b0c2;
    white-space: normal;
    text-align: center;
    font-size: 18pt;
    font-weight: 500;
  }

  .tech-card-text {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 5px;
  }
}

</style>
