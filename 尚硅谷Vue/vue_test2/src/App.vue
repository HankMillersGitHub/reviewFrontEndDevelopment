<template>
  <div>
    <img src="./assets/logo.png" alt="" />
    <Boss></Boss>
    <Bro></Bro>
  </div>
</template>

<script>
// 引入组件
import Boss from "./components/Boss";
import Bro from "./components/Bro";

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