<template>
  <v-card class="t-card-style">
    <v-card-title class="t-card-title">
      <div class="year-line">
        <div class="year">{{year}}</div>
        <div class="timeline-line"></div>
      </div>
    </v-card-title>
    <v-card-text class="t-card-text">
      {{description}}
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'TimeCard',
  props: {
    year: String,
    description: String
  }
}
</script>

<style scoped>
.t-card-style{
  min-width: 60px;
  min-height: 40px;
  margin-bottom: 25px;
  box-shadow: none;
  background-color: transparent;
}
.year-line{
  display: flex;
  align-items: center;
}
.year{
  margin-right: 10px;
}
.t-card-title{
  background: linear-gradient(to right, #DBE0E9, #7c60bd);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 16pt;
  text-align: left;
}
.t-card-text{
  font-size: 10pt;
  color: #DBE0E9;
  text-align: left;
  padding: 2px 2px 0px 15px;
}
.timeline-line {
  flex-grow: 1;
  height: 2px;
  max-width: 45%;
  margin-left: 20px;
  background: linear-gradient(to right, #9e9e9e, transparent);
}
</style>
