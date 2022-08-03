<template>
  <div>
    <h2 @click="showName">小弟名称：{{ name }}</h2>
    <h2>小弟地址：{{ address }}</h2>
  </div>
</template>
<script>
import { a } from "./../mixin";

export default {
  name: "Bor",
  data() {
    return {
      name: "我是你们的小弟",
      address: "我是你们的小弟",
    };
  },
  mixins: [a],
};
</script>
