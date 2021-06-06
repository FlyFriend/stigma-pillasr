<template>
  <lt-layout class="layout">
    <lt-main>
    <timeline/>
    </lt-main>
    <lt-footer>
    <footer-app/>
    </lt-footer>
  </lt-layout>
</template>

<script>
import FooterApp from './FooterApp.vue';
import Timeline from './Timeline.vue';
export default {
  components: { Timeline, FooterApp },
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
