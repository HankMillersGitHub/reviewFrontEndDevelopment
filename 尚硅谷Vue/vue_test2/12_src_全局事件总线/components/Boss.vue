<template>
  <div class="demo">
    <h2>老大名称：{{ name }}</h2>
    <h2>老大地址：{{ address }}</h2>
  </div>
</template>
<script>
export default {
  name: "Boss",
  data() {
    return {
      name: "我是你们的老大",
      address: "我是你们的老大",
    };
  },
  methods: {
    demo(data) {
      console.log("我是BOss组件，我收到了数据", data);
    },
  },
  mounted() {
    this.$bus.$on("mzh", this.demo);
  },
  beforeDestroy() {
    this.$bus.$off("mzh");
  },
};
</script>
<style scoped>
.demo {
  background-color: skyblue;
}
</style>
