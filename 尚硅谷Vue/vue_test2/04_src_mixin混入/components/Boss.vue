<template>
  <div>
    <h2 @click="showName">老大名称：{{ name }}</h2>
    <h2>老大地址：{{ address }}</h2>
  </div>
</template>
<script>
// 引入一个混合
import { a } from "./../mixin";
export default {
  name: "Boss",
  data() {
    return {
      name: "我是你们的老大",
      address: "我是你们的老大",
    };
  },
  mixins: [a],
};
</script>
