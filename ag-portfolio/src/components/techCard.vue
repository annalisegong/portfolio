<template>
    <v-card class="tech-card">
      <v-card-title class="tech-card-title">
        {{title}}
      </v-card-title>
      <v-card-text class="tech-card-text">
        <div v-for="(item, index) in items" :key="index" class="stack-item">
          {{ item }}
        </div>
      </v-card-text>
    </v-card>
</template>

<script>
  export default {
    name: 'TechCard',

    props: {
      title: String,
      items: Array
    }
  }
</script>

<style scoped>
.tech-card{
  min-width: 100%;
  min-height: 100%;
  background-color:#1e1d2b;
  box-shadow: 0 0 8px  #4bbedb;
  color: #DBE0E9;
}

.stack-item {
  line-height: 1.75;
  font-size: 13pt;
  font-weight: 300;
  flex-basis: 50%;
  color: #DBE0E9;
}
.tech-card-title{
  //background: linear-gradient(to right, #DBE0E9, #347296);
  //-webkit-background-clip: text;
  //-webkit-text-fill-color: transparent;
  color: #69b0c2;
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

@media (max-width: 700px) {
  .stack-item {
    flex-basis: 100%;
  }
}
</style>
