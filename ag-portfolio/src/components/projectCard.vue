<template>
    <v-card class="main-card">
      <v-card-title style="text-align: center; font-size: 18pt;  ">{{ title }}</v-card-title>
      <v-img max-height="250px" :src="url" style="padding: 10px"/>
      <v-card-actions class="justify-center" style="padding: 10px">
        <v-btn
          style="background-color: #7c60bd; color:#f4f2f5; text-transform: none;"
          variant="text"
          :href="code"
          target="_blank"
        >
          code
        </v-btn>
        <v-btn
          style="background-color: #7c60bd; color:#f4f2f5; text-transform: none;"
          :href="download"
          target="_blank"
        >
          {{bName}}
        </v-btn>
      </v-card-actions>
      <!--        <v-row>-->
      <!--          <v-col v-for="item in items" :key="item">{{item}}</v-col>-->
      <!--        </v-row>-->
      <v-card-text style="margin-left: 30px; margin-right: 30px; line-height: 1.75;">{{ text }}</v-card-text>
      <h4 style="text-align: center">Stack</h4>
    </v-card>
</template>

<script>

export default {
  name: 'ProjectCard',

  props: {
    title: String,
    url: String,
    items: Array,
    text: String,
    code: String,
    bName: String,
    download: String
  }
}

</script>

<style scoped>

.main-card{
  min-width: 100%;
  min-height: 100%;
  background-color:#1e1d2b;
  box-shadow: 0 0 8px #4bbedb;
  color: #DBE0E9;
}

</style>
