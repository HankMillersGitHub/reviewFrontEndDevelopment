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
      name: "马中豪",
      address: "山西临汾",
    };
  },
};
</script>
<style>
.demo {
  background-color: aquamarine;
}
</style>