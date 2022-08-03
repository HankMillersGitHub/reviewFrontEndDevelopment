<template>
  <div class="demo">
    <h2>小弟名称：{{ name }}</h2>
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
};
</script>
<style scoped lang='css'>
.demo {
  background-color: orange;
}
</style>
