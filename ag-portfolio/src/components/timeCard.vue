<template>
  <div class="timeline-container">
    <v-row class="time-card-row">
      <div v-for="y in years" :key="y.year" class="time-card-size" style="justify-content: center">
        <v-card class="t-card-style" style="font-family: 'Mukta'">
          <v-card-title class="t-card-year">
            <div class="year-line">
              <div class="year">{{y.year}}</div>
              <div class="timeline-line"></div>
            </div>
          </v-card-title>
          <v-card-text class="t-card-text">
            {{y.description}}
          </v-card-text>
        </v-card>
      </div>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'TimeCard',
  props: {
    years: Array
  }
}
</script>

<style scoped>
@media (min-width: 1001px) and (max-width: 2000px) {
  .timeline-container {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
  }
  .t-card-style{
    min-width: 100px;
    min-height: 40px;
    margin: 0px 8px 25px 5px;
    box-shadow: none;
    background-color: transparent;
  }
  .time-card-row {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-evenly;
  }
  .time-card-size{
    flex-basis: calc(100% / 5);
    max-width: calc(100% / 5);;
    margin: 0px 8px;
  }
  .year-line{
    display: flex;
    align-items: center;
  }
  .year{
    margin-right: 10px;
  }
  .t-card-year{
    background: linear-gradient(to right, #DBE0E9, #7c60bd, #7c60bd);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 20pt;
    font-weight: 600;
    text-align: left;
  }
  .t-card-text{
    font-size: 12pt;
    font-weight: 200;
    line-height: 1.3;
    color: #DBE0E9;
    text-align: left;
    padding: 2px 2px 0px 15px;
  }
  .timeline-line {
    flex-grow: 1;
    height: 2px;
    max-width: 60%;
    margin-left: 20px;
    background: linear-gradient(to right, #9e9e9e, transparent);
  }
}
@media (min-width: 671px) and (max-width: 1000px) {
  .timeline-container {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
  }
  .t-card-style{
    min-width: 100px;
    max-width: 200px;
    max-height: 200px;
    margin-bottom: 25px;
    box-shadow: none;
    background-color: transparent;
  }
  .time-card-row {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .time-card-size{
    flex-basis: calc(100% / 4);
    max-width: calc(100% / 4);
    margin: 0px 8px;
  }
  .year-line{
    display: flex;
    align-items: center;
  }
  .year{
    margin-right: 2px;
  }
  .t-card-year{
    background: linear-gradient(to right, #DBE0E9, #7c60bd, #7c60bd);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 18pt;
    font-weight: 600;
    text-align: left;
  }
  .t-card-text{
    font-size: 11pt;
    font-weight: 200;
    line-height: 1.3;
    color: #DBE0E9;
    text-align: left;
    padding: 2px 2px 0px 0px;
  }
  .timeline-line {
    flex-grow: 1;
    height: 2px;
    max-width: 60%;
    margin-left: 10px;
    background: linear-gradient(to right, #9e9e9e, transparent);
  }
}
@media (min-width: 375px) and (max-width: 670px) {
  .timeline-container {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
  }
  .t-card-style{
    min-width: 150px;
    max-width: 200px;
    max-height: 200px;
    margin-bottom: 25px;
    box-shadow: none;
    background-color: transparent;
  }
  .time-card-row {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .time-card-size{
    flex-basis: calc(100% / 2);
    max-width: calc(100% / 2);
    margin: 0px 8px;
  }
  .year-line{
    display: flex;
    align-items: center;
  }
  .year{
    margin-right: 2px;
  }
  .t-card-year{
    background: linear-gradient(to right, #DBE0E9, #7c60bd, #7c60bd);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 18pt;
    font-weight: 600;
    text-align: left;
  }
  .t-card-text{
    font-size: 11pt;
    font-weight: 200;
    line-height: 1.3;
    color: #DBE0E9;
    text-align: left;
    padding: 2px 2px 0px 0px;
  }
  .timeline-line {
    flex-grow: 1;
    height: 2px;
    max-width: 60%;
    margin-left: 10px;
    background: linear-gradient(to right, #9e9e9e, transparent);
  }
}
</style>
