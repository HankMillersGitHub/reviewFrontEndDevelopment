<template>
  <!-- 组件结构 -->

  <div class="demo">
    <h2>大哥名称{{ bossName }}</h2>
    <h2>大哥地址{{ address }}</h2>
    <button @click="showName">点我提示学校名</button>
  </div>
</template>

<script>
// 组件交互相关的代码
export default {
  name: "MyBoss",
  data() {
    return {
      bossName: "马仲豪",
      address: "山西临汾",
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