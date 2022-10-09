<template>
  <div class="demo">
    <h2 class="title">老大名称：{{ name }}</h2>
    <button @click="send">点我给app传名字</button>
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
    send() {
      this.$emit("getName", this.name);
    },
  },
};
</script>
<style scoped>
.demo {
  background-color: skyblue;
}
</style>
