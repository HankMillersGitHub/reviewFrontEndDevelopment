<template>
  <div class="todo-header">
    <input
      @keyup.enter="add"
      type="text"
      placeholder="请输入你的任务名称，按回车键确认"
    />
  </div>
</template>
<script>
import { nanoid } from "nanoid";
export default {
  name: "MyHeader",
  // data() {
  //   return {
  //     title: "",
  //   };
  // },
  methods: {
    // 获取用户输入
    // 第一种
    add(event) {
      // 校验数据
      if (event.target.value.trim() !== "") {
        // 将用户的输入包装成一个todo对象
        const todoObj = { id: nanoid(), name: event.target.value, done: false };
        // 通知header添加数据
        this.$emit("receive", todoObj);
        // 清空输入
        event.target.value = "";
      }

      //
    },
    // 第二种
    // 给输入框添加v-model 绑定一个空数据
    // add() {
    //   console.log(this.title);
    // },
  },
};
</script>
<style scoped>
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(82, 168, 236, 0.6);
}
</style>