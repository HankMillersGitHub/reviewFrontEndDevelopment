<template>
  <div class="todo-footer" v-show="total">
    <label>
      <!-- 第一种写法 -->
      <!-- <input type="checkbox" :checked="isAll" @click="checkAll" /> -->
      <!-- 第二种写法 -->
      <input type="checkbox" v-model="isAll" />
    </label>
    <span>
      <span>已完成{{ doneTotal }}</span> / 全部{{ total }}
    </span>
    <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
  </div>
</template>
<script>
export default {
  name: "MyFooter",
  props: ["todos"],
  methods: {
    // ! 对应第一种写法
    // checkAll(e) {
    //   this.checkedAllTodo(e.target.checked);
    // },
    clearAll() {
      this.$emit("clearAllTodo");
    },
  },
  computed: {
    // ! 对应第一种写法
    // isAll(){
    //   return this.doneTotal === this.total && this.total > 0 ? true : false;
    // }
    // ! 对应第二种写法
    isAll: {
      get() {
        return this.doneTotal === this.total && this.total > 0 ? true : false;
      },
      set(value) {
        // this.checkedAllTodo(value);
        this.$emit("checkedAllTodo", value);
      },
    },
    total() {
      return this.todos.length;
    },
    doneTotal() {
      // !第1种方法
      // let i = 0;
      // this.todos.forEach((todo) => {
      //   if (todo.done) {
      //     i += 1;
      //   }
      // });
      // return i;
      // !第2种方法
      return this.todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0);
    },
  },
};
</script>
<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>