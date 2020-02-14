<template>
  <div class="bookrack">
    <div class="nav">
      <div class="show"></div>
      <div class="search">
        <div class="abbr fl">爱漫画</div>
        <div class="search-box fr">
          <van-icon name="search" size="32" color="white" />
        </div>
      </div>
    </div>

    <div class="nav-teim">
      <van-tabs>
        <van-tab title="收藏">
          <div class="main-content">
            <van-row gutter="0">
              <van-col span="8" v-for="(item, index) in shoucangData" :key="index">
                <div class="picture">
                  <div class="tupian">
                    <img
                      class="auto-img"
                      :src="item.cover"
                      alt
                    />
                    <div class="subtitle">
                      <div class="cartoon-name">{{item.name}}</div>
                    </div>
                  </div>
                </div>
              </van-col>
            </van-row>
          </div>
        </van-tab>
        <van-tab title="历史">内容 2</van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: "bookrack",

  data() {
    return {
      shoucangData:null,
    };
  },

  methods: {

    cang(o){
       this.$router.push(o);
       console.log("o ==>", o);
    },
  },

  created() {
    // 获取验证用户
    let users = localStorage.getItem("users");
    // console.log("users ==>", users);

    if (users) {
      let userInfo = JSON.parse(users);
      // console.log("userInfo ==>", userInfo);

      //获取所有用户收藏的漫画数据
      let manhuaData = localStorage.getItem("manhuaData");
      //  console.log("manhuaData ==>", manhuaData);
      manhuaData = manhuaData ? JSON.parse(manhuaData) : {};

      //获取当前用户收藏的电影数据
      let currentmanhuaData = manhuaData[userInfo.username];
      // console.log("currentmanhuaData ==>", currentmanhuaData);

      currentmanhuaData = currentmanhuaData ? currentmanhuaData : [];

      this.shoucangData = currentmanhuaData;
      console.log('this.shoucangData ==>',this.shoucangData)

    }
  }
};
</script>

<style lang="less" scoped>
.bookrack {
  height: 100%;

  .nav {
    width: 100%;
    height: 60px;
    background-color: #ff4444;

    .show {
      width: 100%;
      height: 20px;
      background-color: #ff4444;
    }
    .search {
      width: 100%;
      height: 40px;
      background-color: #ff4444;
      overflow: hidden;
      .abbr {
        width: 60px;
        height: 32px;
        margin-left: 20px;
        margin-top: 3.5px;
        font-size: 16px;
        font-weight: bold;
        line-height: 32px;
        color: white;
      }
      .search-box {
        width: 32px;
        height: 32px;
        margin-right: 20px;
        margin-top: 3.5px;
      }
    }
  }
  .main-content {
    padding: 0px 5px;
    overflow: hidden;

    .picture {
      padding: 5px;
      height: 150px;
      .tupian {
        position: relative;
        img {
          height: 150px;
        }

        .subtitle {
          height: 20px;
          background: rgba(255, 255, 245, 0.7);
          position: absolute;
          top: 130px;
          left: 0px;
          bottom: 0px;
          right: 0px;
          .cartoon-name {
            height: 20px;
            line-height: 20px;
            color: #3b3d3a;
            margin: 0 10px;
            font-size: 12px;
            font-weight: bold;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
      }
    }
  }
}
</style>