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
      <span>{{ todoObj.name }}</span>
    </label>
    <button class="btn btn-danger" @click="iDeleteTodo(todoObj.id)">
      删除
    </button>
  </li>
</template>
<script>
export default {
  name: "MyItem",
  // 声明接收todo对象
  props: ["todoObj"],
  methods: {
    handleCheck(id) {
      // 通知app组件将对应的todo对象的done值取反
      // this.changeDone(id);
      this.$bus.$emit("changeDone", id);
    },
    iDeleteTodo(id) {
      // if (confirm("确定删除吗?")) this.deleteTodo(id);
      if (confirm("确定删除吗?")) this.$bus.$emit("deleteTodo", id);
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