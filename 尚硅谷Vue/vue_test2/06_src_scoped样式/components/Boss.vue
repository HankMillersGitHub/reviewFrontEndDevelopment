<template>
  <div class="demo">
    <h2 class="title">老大名称：{{ name }}</h2>
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
};
</script>
<style scoped>
.demo {
  background-color: skyblue;
}
</style>
