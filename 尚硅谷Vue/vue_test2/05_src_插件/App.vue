<template>
  <div>
    <Boss></Boss>
    <hr />

    <Bor></Bor>
  </div>
</template>
<script>
import Boss from "./components/Boss";
import Bor from "./components/Bor";
export default {
  name: "App",
  data() {
    return {
      msg: "你的老大是马中豪",
    };
  },
  components: { Boss, Bor },
};
</script>
<style lang="">
</style>