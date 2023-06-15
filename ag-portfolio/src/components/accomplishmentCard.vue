<template>
  <v-card class="a-card a-card-gradient">
    <v-card-title style="font-size: 18pt; margin: 10px 10px 6px 6px">
      {{title}}
    </v-card-title>
    <v-card-text style="display: flex; flex-wrap: wrap; font-size: 13pt; color: #dedede; margin: 3px 3px 6px 6px">
      {{text}}
    </v-card-text>
  </v-card>
</template>

<script>
  export default {
    name: 'AccomplishmentCard',

    props:{
      title: String,
      text: String
    }
  }
</script>

<style scoped>

.a-card-gradient{
  background: linear-gradient(to right, #1e2e63, #3b49a3);
}

.a-card{
  min-width: 100%;
  min-height: 100%;
  color: #DBE0E9;
  box-shadow: #DBE0E9;
}


</style>
