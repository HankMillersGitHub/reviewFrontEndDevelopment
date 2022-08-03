<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>老大名称：{{ name }}</h2>
    <h2>老大地址：{{ address }}</h2>
    <h2>老大性别：{{ sex }}</h2>
    <h2>老大年龄：{{ myAge }}</h2>
    <button @click="updateAge">修改age</button>
  </div>
</template>
<script>
export default {
  name: "Boss",
  data() {
    return {
      msg: "我是你们的老大",
      myAge: this.age,
    };
  },
  methods: {
    updateAge() {
      this.myAge = 100;
    },
  },
  props: ["name", "address", "sex", "age"], //简单声明接受

  // 接受的同时对数据进行类型限制
  // props: {
  //   name: String,
  //   address: String,
  //   sex: String,
  //   age: Number,
  // },

  // 完整版props
  // props: {
  //   name: {
  //     type: String,
  //     required: true,
  //   },
  //   address: {
  //     type: String,
  //     required: true,
  //   },
  //   sex: {
  //     type: String,
  //     required: true,
  //   },
  //   age: {
  //     type: Number,
  //     default: 20,
  //   },
  // },
};
</script>
