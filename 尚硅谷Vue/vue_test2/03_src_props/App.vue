<template>
  <div>
    <Boss name="马中豪" address="山西临汾" sex="男" :age="18 + 1"></Boss>
    <Boss name="123" address="山西临汾" sex="男" :age="18 + 1"></Boss>
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
      console.log(this.$refs.boss); // 组件实例对象 vc
    },
  },
};
</script>
<style lang="">
</style>