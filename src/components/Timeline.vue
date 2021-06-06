<template>
  <lt-layout class="layout">
    <lt-main>
      <div class="Timeline">
        <h1>
          {{ info.chirutitle }}
          <i style="color: red" class="icon icon-heart-on"></i>
        </h1>
        <h2>{{ info.subchirutitle }}</h2>
        <h3>By: {{ info.author }}</h3>
        <at-timeline>
          <br />
          <span v-for="chiru in chirus">
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
    </lt-main>
    <lt-footer>
      <p>Licensed on SATA-license</p>
      <p>
        Copyright &copy <a href="https://pyliubaolin.top">瞎哔哔的py</a> &
        <a href="https://begonia.flyfriend.cn">Begonia1005</a>
      </p>
      <p>Made by <a href="https://flyfriend.cn">Flyfriend</a></p>
    </lt-footer>
  </lt-layout>
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
.layout {
  margin-top: 10px;
  margin-left: 100px;
  margin-right: 100px;
}
.Timeline h1 {
  font-size: 40px;
  color: #2c405a;
}
.Timeline h2 {
  font-size: 24px;
  color: #2c405a;
}

at-timeline {
  margin-top: 30px;
}

.img {
  width: 200px;
  height: auto;
}
</style>
