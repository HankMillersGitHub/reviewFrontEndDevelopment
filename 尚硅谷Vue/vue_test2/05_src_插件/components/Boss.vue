<template>
  <div>
    <h2>老大名称：{{ name | mySlice }}</h2>
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
