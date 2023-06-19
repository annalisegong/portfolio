<template>
    <v-card class="main-card">
      <v-card-title class="p-card-title">{{ title }}</v-card-title>
      <v-img max-height="250px" :src="url" style="padding: 10px"/>
      <v-card-actions class="justify-center" style="padding: 10px">
        <v-btn
          class="p-card-btn"
          variant="text"
          :href="code"
          target="_blank"
        >
          code
        </v-btn>
        <v-btn
          class="p-card-btn"
          variant="text"
          :href="download"
          target="_blank"
        >
          {{bName}}
        </v-btn>
      </v-card-actions>
      <div>
        <v-card-text class="p-card-text">{{ text }}</v-card-text>
      </div>
<!-- get stack to start at same spot on -->
      <div class="stack-container">
        <h4 style="text-align: center; color:  #7c60bd; font-size: 14pt">Stack</h4>
        <div class="stack-settings">
          <span v-for="(item, index) in items" :key="index" style="margin-right: 22px;">{{ item }}</span>
        </div>
      </div>
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
  box-shadow: 0 0 8px #7c60bd;
  color: #DBE0E9;
}
.p-card-title{
  color: #DBE0E9;
  text-align: center;
  font-size: 22pt;
  white-space: break-spaces;
  word-break: break-word;
}
.p-card-text{
  line-height: 1.75;
  min-height: 230px;
  margin: 0px 20px;
  color: #DBE0E9;
}
.p-card-btn{
  background-color: #7c60bd;
  color:#f4f2f5;
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
  padding: 10px;
  height: 50px;
}

</style>
