<template>
  <lt-layout class="layout">
    <lt-main>
    <timeline/>
    </lt-main>
    <lt-footer>
    <footer/>
    </lt-footer>
  </lt-layout>
</template>

<script>
import Footer from './Footer.vue';
import Timeline from './Timeline.vue';
export default {
  components: { Timeline, Footer },
  name: "AppMain",
  data() {
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
</style>
