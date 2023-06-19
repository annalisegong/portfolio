<template>
  <v-card class="a-card a-card-gradient" style="font-family: 'Space Grotesk'">
    <v-card-title class="a-title">
      {{title}}
    </v-card-title>
    <v-card-subtitle class="a-subtitle">
      {{subtitle}}
    </v-card-subtitle>
    <v-card-text class="a-text">
      {{text}}
    </v-card-text>
  </v-card>
</template>

<script>
  export default {
    name: 'AccomplishmentCard',

    props:{
      title: String,
      subtitle:{
        type: String,
        required: false
      },
      text: {
        type: String,
        required: false
      }
    }
  }
</script>

<style scoped>
.a-card-gradient{
  background: linear-gradient(to right, #1e2e63, #3b49a3);
  //background: linear-gradient(to right, #4a2a6d, #8b5cc0);
}
.a-card{
  min-width: 100%;
  min-height: 100%;
  color: #DBE0E9;
  box-shadow: #DBE0E9;
}
.a-title {
  font-size: 19pt;
  white-space: break-spaces;
  word-break: break-word;
  margin: 10px 10px 6px 6px;
  text-align: center;
}
.a-subtitle{
  font-size: 14pt;
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
  opacity: var(--v-medium-emphasis-opacity);
  margin: 4px 4px 10px 10px;
  padding: 3px 15px;
  text-align: left;
  color: #DBE0E9;
}
</style>
