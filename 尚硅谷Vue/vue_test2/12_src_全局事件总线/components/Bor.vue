<template>
  <div class="demo">
    <h2>小弟名称：{{ name }}</h2>
    <button @click="sendBroName">点我给boss发送名字</button>
    <h2>小弟地址：{{ address }}</h2>
  </div>
</template>
<script>
export default {
  name: "Bor",
  data() {
    return {
      name: "我是你们的小弟",
      address: "我是你们的小弟",
    };
  },
  methods: {
    sendBroName() {
      console.log("11111");
      this.$bus.$emit("mzh", this.name);
    },
  },
};
</script>
<style scoped lang='css'>
.demo {
  background-color: orange;
}
</style>
