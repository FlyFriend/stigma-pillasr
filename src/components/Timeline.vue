<template>
  <div class="Timeline">
    <h1>
      {{ info.chirutitle }}
      <i style="color: red" class="icon icon-heart-on"></i>
    </h1>
    <h2>{{ info.subchirutitle }}</h2>
    <h3>By: {{ info.author }}</h3>
    <at-timeline>
      <br />
      <span v-for="(chiru,index) in chirus" :key="index">
        <at-timeline-item :color="chiru.color">
          <i slot="dot" :class="'icon' + ' ' + chiru.icon"></i>
          <at-card style="width: 300px; text-align: center">
            <h4 slot="title">{{ chiru.title }}</h4>
            <div slot="extra">{{ chiru.date }}</div>
            <div>{{ chiru.text }}</div>
            <br />
            <img
              class="img"
              v-if="chiru.imgurl != ''"
              :src="chiru.imgurl"
              alt=""
            />
          </at-card>
        </at-timeline-item>
      </span>
    </at-timeline>
  </div>
</template>
<script>
import info from "../data/info.json";
import chirus from "../data/chiru.json";
export default {
  name: "Timeline",
  data() {
    return {
      info: info,
      chirus: chirus,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Timeline h1 {
  font-size: 40px;
  color: #2c405a;
}
.Timeline h2 {
  font-size: 24px;
  color: #2c405a;
}
.img {
  width: 200px;
  height: auto;
}

</style>