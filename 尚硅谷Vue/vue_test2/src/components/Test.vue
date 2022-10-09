<template>
  <div class="demo">
    <div class="top">
      <img src="../../images/top_logo.png" alt="" />
    </div>
    <div class="text">
      <div class="free">免费解锁全部内容</div>
      <div class="day">{{ nowWeek }}限定[2折]</div>
      <div class="red">新用户限时优惠</div>
    </div>
    <div class="bottom">
      <div class="active active1">
        <img src="./../../images/yes.png" alt="" />
        <p>四周内即可见效果</p>
      </div>
      <div class="active active2">
        <img src="./../../images/yes.png" alt="" />
        <p>获取量身定制的会员计划</p>
      </div>
      <div class="active active3">
        <img src="./../../images/yes.png" alt="" />
        <p>1000+专业教程。任意练</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Test",
  data() {
    return {
      nowWeek: "",
    };
  },
  mounted() {
    this.setNowTimes();
  },
  methods: {
    setNowTimes() {
      let myDate = new Date();
      let wk = myDate.getDay();
      let weeks = [
        "星期日",
        "星期一",
        "星期二",
        "星期三",
        "星期四",
        "星期五",
        "星期六",
      ];
      let week = weeks[wk];
      this.nowWeek = week;
    },
  },
};
</script>
<style scoped>
.text {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  font-size: 1.5rem;
}
.text > div {
  margin-top: 1rem;
}
.free {
  font-size: 40px;
  margin-bottom: 10px;
  font-weight: 500;
}
.day {
  margin-bottom: 10px;
}
.demo {
  width: 100%;
  height: 600px;
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.active > img {
  width: 3.2rem;
}
.active {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 2rem;
  height: 2rem;
  line-height: 2rem;
  font-size: 1.5rem;
}

@keyframes font {
  0% {
    transform: scale(1);
  }
  5% {
    transform: scale(1.05);
  }
  10% {
    transform: scale(1.1);
  }
  15% {
    transform: scale(1.15);
  }
  20% {
    transform: scale(1.2);
  }
  25% {
    transform: scale(1.25);
  }
  30% {
    transform: scale(1.3);
  }
  35% {
    transform: scale(1.35);
  }
  40% {
    transform: scale(1.4);
  }
  45% {
    transform: scale(1.45);
  }
  50% {
    transform: scale(1.5);
  }
  55% {
    transform: scale(1.45);
  }
  60% {
    transform: scale(1.4);
  }
  65% {
    transform: scale(1.35);
  }
  70% {
    transform: scale(1.3);
  }
  75% {
    transform: scale(1.25);
  }
  80% {
    transform: scale(1.2);
  }
  85% {
    transform: scale(1.15);
  }
  90% {
    transform: scale(1.1);
  }
  95% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}
.red {
  color: red;
  animation: font 1s ease infinite;
}
</style>