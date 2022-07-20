<template>
  <div>
    <Boss></Boss>
    <Bro></Bro>
  </div>
</template>

<script>
// 引入组件
import Boss from "./Boss.vue";
import Bro from "./Bro.vue";

export default {
  name: "App",
  components: {
    Boss,
    Bro,
  },
};
</script>

<style>
</style>