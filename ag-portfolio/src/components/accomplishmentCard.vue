<template>
  <div>
    <v-row style="margin: 10px 30px">
      <v-col v-for="a in accomplishments" :key="a.title" :cols="12" :sm="6" :md="6" :lg="3" :xl="3">
        <v-card class="a-card a-card-gradient a-card-size" style="font-family: 'Mukta', 'Space Grotesk', sans-serif">
          <v-card-title class="a-title">
            {{a.title}}
          </v-card-title>
          <v-card-subtitle class="a-subtitle">
            {{a.subtitle}}
          </v-card-subtitle>
          <v-card-text class="a-text">
            {{a.text}}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  export default {
    name: 'AccomplishmentCard',

    props:{
      accomplishments: Array
    }
  }
</script>

<style scoped>
@media (min-width: 861px) and (max-width: 2000px){
  .a-card-size{
    max-width: 25%;
    min-height: 180px;
  }
  .a-card{
    min-width: 100%;
    min-height: 100%;
    color: #DBE0E9;
    box-shadow: #DBE0E9;
  }
  .a-title {
    font-size: 19pt;
    font-weight: 500;
    white-space: break-spaces;
    word-break: break-word;
    margin: 10px 10px 6px 6px;
    text-align: center;
  }
  .a-subtitle{
    font-size: 14pt;
    font-weight: 400;
    margin: 4px 4px 10px 10px;
    text-align: left;
    line-height: 1;
    white-space: break-spaces;
    word-break: break-word;
  }
  .a-text{
    display: flex;
    flex-wrap: wrap;
    font-size: 11pt;
    font-weight: 300;
    opacity: var(--v-medium-emphasis-opacity);
    margin: 4px 4px 10px 10px;
    padding: 3px 15px;
    text-align: left;
    color: #DBE0E9;
  }
  .a-card-gradient{
    background: linear-gradient(to right, #1e2e63, #3b49a3);
  //background: linear-gradient(to right, #4a2a6d, #8b5cc0);
  }
}
@media (min-width: 375px) and (max-width: 860px){
  .a-card-size{
    max-width: 25%;
    max-height: 250px;
  }
  .a-card{
    min-width: 100%;
    min-height: 100%;
    color: #DBE0E9;
    box-shadow: #DBE0E9;
  }
  .a-title {
    font-size: 17pt;
    font-weight: 500;
    white-space: break-spaces;
    word-break: break-word;
    margin: 10px 10px 6px 6px;
    text-align: center;
  }
  .a-subtitle{
    font-size: 12pt;
    font-weight: 400;
    margin: 4px 4px 10px 10px;
    text-align: left;
    line-height: 1;
    white-space: break-spaces;
    word-break: break-word;
  }
  .a-text{
    display: flex;
    flex-wrap: wrap;
    font-size: 11pt;
    font-weight: 300;
    opacity: var(--v-medium-emphasis-opacity);
    margin: 4px 4px 10px 10px;
    padding: 3px 15px;
    text-align: left;
    color: #DBE0E9;
  }
  .a-card-gradient{
    background: linear-gradient(to right, #1e2e63, #3b49a3);
  //background: linear-gradient(to right, #4a2a6d, #8b5cc0);
  }
}
</style>
