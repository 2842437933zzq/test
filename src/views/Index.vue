<template>
  <div class="index">
      <!-- 二级路由 -->
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    <van-tabbar v-model="tabbarName" active-color="#ff4444">
      <van-tabbar-item
         :name="item.name"
         :icon="item.icon"
         v-for="(item, index) in tabsData"
         :key="index"
        @click="changePage({name: item.name})"
      >{{item.title}}</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<style scoped lang="less">
.index {
  height: 100%;
}
.van-tabbar {
  border-top: 1px solid #e2e5e5;
}
.van-tabbar-item--active {
  color: #ff4444;
}
</style>

<script>
export default {
  name: "index",

  data() {
    return {
      tabbarName: "home",
      tabsData: [
        {
          icon: "wap-home-o",
          title: "首页",
          name: "home"
        },
        {
          icon: "apps-o",
          title: "分类",
          name: "classify"
        },
        {
          icon: "bar-chart-o",
          title: "书架",
          name: "bookrack"
        },
        {
          icon: "manager-o",
          title: "我的",
          name: "mine"
        }
      ]
    };
  },
    created() {
  // console.log(this.$route);
    this.tabbarName = this.$route.name;
  },

  methods: {
    changePage(o) {
      return this.$router.push(o);
    }
  }
};
</script>
