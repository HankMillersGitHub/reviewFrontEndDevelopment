<template>
  <!-- 组件结构 -->

  <div class="demo">
    <h2>小弟名称{{ broName }}</h2>
    <h2>小弟地址{{ address }}</h2>
    <button @click="showName">点我提示大哥名</button>
  </div>
</template>

<script>
// 组件交互相关的代码
export default {
  name: "MyBro",
  data() {
    return {
      broName: "张适旗",
      address: "山西临汾",
      bossName: "马中豪",
    };
  },
  methods: {
    showName() {
      alert(this.bossName);
    },
  },
};
</script>

<style>
/*组件的样式*/
.demo {
  background-color: red;
}
</style>