<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <!-- <MyHeader @receive="addTodo" />
        <MyList :todos="todos" />
        <MyFooter
          :todos="todos"
          @checkedAllTodo="checkedAllTodo"
          @clearAllTodo="clearAllTodo"
        /> -->
        <Test />
      </div>
    </div>
  </div>
</template>
<script>
import pubsub from "pubsub-js";
import MyHeader from "./components/MyHeader";
import MyFooter from "./components/MyFooter";
import MyList from "./components/MyList";
import Test from "./components/Test";
export default {
  name: "App",
  data() {
    return {
      // ! 解决刚进入时是空数组的进阶方法
      todos: JSON.parse(localStorage.getItem("todos")) || [],
    };
  },
  watch: {
    todos: {
      deep: true,
      handler(value) {
        localStorage.setItem("todos", JSON.stringify(value));
      },
    },
  },
  // ! 解决刚进入时是空数组的原始方法
  // created() {
  //   if (!this.todos) {
  //     this.todos = [];
  //   }
  // },
  methods: {
    // 添加todo
    addTodo(todoObj) {
      this.todos.unshift(todoObj);
    },
    // 修改选中状态
    changeDone(id) {
      console.log("我是App组件,我收到了数据", id);
      this.todos.forEach((todo) => {
        if (todo.id === id) {
          todo.done = !todo.done;
        }
      });
    },
    // 删除一个
    deleteTodo(_, id) {
      this.todos = this.todos.filter((todo) => {
        return todo.id !== id;
      });
    },
    // 全选or全不选
    checkedAllTodo(done) {
      this.todos.forEach((item) => {
        item.done = done;
      });
    },
    // 清除被选中的多项
    clearAllTodo() {
      if (confirm("确定要删除吗")) {
        this.todos = this.todos.filter((todo) => {
          return !todo.done;
        });
      } else return;
    },
  },
  components: { MyHeader, MyFooter, MyList, Test },
  mounted() {
    this.$bus.$on("changeDone", this.changeDone);

    this.pClearAll = pubsub.subscribe("clearAll", this.clearAllTodo);
    this.pDeleteOneId = pubsub.subscribe("deleteOne", this.deleteTodo);
  },
  beforeDestroy() {
    pubsub.unsubscribe(this.pDeleteOneId);
    pubsub.unsubscribe(this.pClearAll);
    this.$bus.$off("changeDone");
  },
};
</script>
<style>
/*base*/
* {
  list-style: none;
  margin: 0;
}
body {
  background: #fff;
}
.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}
.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}
.btn-warning {
  color: #fff;
  background-color: #21fd46;
  border: 1px solid #00ff4c;
}
.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}
.btn-warning:hover {
  color: #fff;
  background-color: #03d442;
}
.btn:focus {
  outline: none;
}
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>