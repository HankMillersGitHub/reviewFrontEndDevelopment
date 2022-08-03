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
  methods: {
    showDOM() {
      console.log(this.$refs.title); // 真实DOM元素
      console.log(this.$refs.btn); // 真实DOM元素
      console.log(this.$refs.boss); // 组件实例对象 vc
    },
  },
};
</script>
<style lang="">
</style>