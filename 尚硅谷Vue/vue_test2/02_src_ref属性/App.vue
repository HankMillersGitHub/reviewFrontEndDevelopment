<template>
  <div>
    <h1 v-text="msg" ref="title"></h1>
    <button ref="btn" @click="showDOM">点我输出上方DOM元素</button>
    <boss ref="bos"></boss>
  </div>
</template>
<script>
import Boss from "./components/Boss";
export default {
  name: "App",
  data() {
    return {
      msg: "你的老大是马中豪",
    };
  },
  components: { Boss },
  methods: {
    showDOM() {
      console.log(this.$refs.title); // 真实DOM元素
      console.log(this.$refs.btn); // 真实DOM元素
      console.log(this.$refs.bos);  // 组件实例对象 vc
    },
  },
};
</script>
<style lang="">
</style>