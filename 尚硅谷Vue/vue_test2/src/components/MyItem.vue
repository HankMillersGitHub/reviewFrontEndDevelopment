<template>
  <li>
    <label>
      <input
        type="checkbox"
        :checked="todoObj.done"
        @change="handleCheck(todoObj.id)"
      />
      <!-- 如下代码也能实现功能但是不推荐使用  因为修改了props 违反原则 -->
      <!-- <input type="checkbox" v-model="todoObj.done" /> -->
      <span v-show="!todoObj.isEdit">{{ todoObj.name }}</span>
      <input
        type="text"
        v-show="todoObj.isEdit"
        :value="todoObj.name"
        @blur="confirmEdit(todoObj)"
      />
    </label>
    <button class="btn btn-danger" @click="iDeleteTodo(todoObj.id)">删除</button
    ><button class="btn btn-warning" @click="handleEidt(todoObj)">编辑</button>
  </li>
</template>
<script>
import pubsub from "pubsub-js";
export default {
  name: "MyItem",
  // 声明接收todo对象
  props: ["todoObj"],
  methods: {
    // 失焦修改成功
    confirmEdit(todoObj) {
      console.log(todoObj);
      this.todoObj.name = todoObj.name;
      todoObj.isEdit = false;
    },
    // 点击编辑 添加edit属性
    handleEidt(todo) {
      if (todo.hasOwnProperty("isEdit")) {
        todo.isEdit = true;
      } else {
        this.$set(todo, "isEdit", true);
      }
    },
    // 点击选中
    handleCheck(id) {
      this.$bus.$emit("changeDone", id);
    },
    // 点击删除
    iDeleteTodo(id) {
      if (confirm("确定删除吗?")) pubsub.publish("deleteOne", id);
    },
  },
};
</script>
<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
li:hover {
  background-color: #ddd;
}
li:hover button {
  display: block;
}
</style>