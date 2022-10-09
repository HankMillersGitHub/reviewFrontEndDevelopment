<template>
  <div>
    <h1 class="title">123</h1>
    <Boss @getName="getName"></Boss>
    <hr />
    <Bor></Bor>
  </div>
</template>
<script>
import Boss from "./components/Boss";
import Bor from "./components/Bor";
export default {
  name: "App",
  data() {
    return {
      msg: "你的老大是马中豪",
    };
  },
  methods: {
    getName(value) {
      console.log("我是app 我收到了boss传的名字", value);
    },
  },
  components: { Boss, Bor },
};
</script>
<style lang='less'>
.title {
  color: red;
}
</style>