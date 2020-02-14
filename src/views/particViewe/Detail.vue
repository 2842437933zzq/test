<template>
  <div class="detail">
    <div class="beiji"></div>
    <van-nav-bar left-text="返回" left-arrow @click-left="back" :border="false" :z-index="2">
      <van-icon name="ellipsis" slot="right" size="32" />
    </van-nav-bar>
    <div class="neirong">
      <div class="nei">
        <div class="xiangqing">
          <div class="tupian">
            <div class="zhaopian">
              <img class="auto-img" :src="homgdata.cover" alt />
            </div>
          </div>
          <div class="jianjie">
            <div class="status">{{homgdata.author}}</div>
            <div class="name">{{homgdata.name}}</div>
            <div class="tag">{{homgdata.tag}}</div>
            <div class="time">更新时间：{{homgdata.time}}</div>
          </div>
        </div>
        <div class="anniu">
          <van-button round type="info" class="shou" @click="shoucang">收藏</van-button>
          <van-button round type="info" class="kai" @click="kandong(index=0)">开始阅读</van-button>
        </div>
        <div class="detai">
          <van-tabs>
            <van-tab title="内容详情">
              <p class="text">{{homgdata.introduce}}</p>
            </van-tab>
            <van-tab title="目录">
              <div class="mulu">
                <van-row gutter="5" class="mulua">
                  <van-col span="12" v-for="(item, index) in  muludata" :key="index" @click="kandong(index)">
                    <div class="hua">{{item.num}}</div>
                  </van-col>
                </van-row>
              </div>
            </van-tab>
            <van-tab title="评论">
              <div class="pinlu">点击评论</div>
            </van-tab>
          </van-tabs>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  name: "detail",
  data() {
    return {
      active: 0,
      homgdata: {},
      muludata: {},
    };
  },
  created() {
    //开启加载提示
    this.$toast.loading({
      duration: 0,
      message: "加载中..."
    });
    let self = this;
    let url = this.$route.params.url;
    // console.log("url ==>", url);
    //发起ajax请求
    $.ajax({
      type: "GET",
      url: "http://api.pingcc.cn/?mhurl1=" + url,
      data: {},
      dataType: "json",
      success: function(data) {
        self.homgdata = data.data;
        self.muludata = data.list;
        self.$toast.clear();
        // console.log('data ==>',data);
        // console.log("self.homgdata ==>", self.homgdata);
        console.log("self.muludata ==>", self.muludata);
      }
    });
    //   this.axios({
    //     method:'GET',
    //     url:'http://api.pingcc.cn/?mhurl1=' + url,
    //   }).then(result => {
    //   console.log('result.data ==>',result.data);
    // //  console.log('result.data.data ==>',result.data.data);
    //   }).catch(err => {
    //     console.log('出错了');
    //   })
  },

  methods: {
    back() {
      this.$router.replace({ name: "home" });
    },
    //内容跳转
    kandong(index) {
      let i = index;
      this.$router.push({ name: "detacont", query: { muludata:this.muludata, index:index } });
      // console.log('this.muludata==>', this.muludata);
      // console.log('index==>', index);
    },

    //收藏漫画
    shoucang(homgdata) {
      console.log("this.homgdata ==>", this.homgdata);
      //获取用户登录状态
      let users = localStorage.getItem("users");
      // console.log("users ==>", users);

      if (users) {
        users = JSON.parse(users);
        // console.log("users ==>", users);

        // 获取用户收藏的漫画
        let manhuaData = localStorage.getItem("manhuaData");
        // console.log("manhuaData ==>", manhuaData);
        manhuaData = manhuaData ? JSON.parse(manhuaData) : {};

        //记录当前用户收藏的漫画
        let currentmanhuaData = manhuaData[users.username];
        // console.log("currentmanhuaData ==>", currentmanhuaData)

        if (!currentmanhuaData) {
          manhuaData[users.username] = [];
        }

        //将漫画推进likeMovieData[users.username]
        manhuaData[users.username].unshift(this.homgdata);

        localStorage.setItem("manhuaData", JSON.stringify(manhuaData));

        this.$toast.success("收藏成功");
      }
    }
  }
};
</script>

<style lang="less" scoped>
.detail {
  .beiji {
    width: 100%;
    height: 300px;
    background: url("../../assets/images/pp.jpg") no-repeat center center;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
  .van-nav-bar {
    background: none;
    display: block;
  }
  .van-nav-bar__text {
    color: white;
  }
  .van-icon-arrow-left:before {
    color: white;
  }
  .van-icon-ellipsis:before {
    color: white;
  }
  .neirong {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 50.83px;
    left: 0px;
    z-index: 3;
    overflow: hidden;
    .nei {
      height: 100%;
      margin-top: 40px;
      .xiangqing {
        height: 210px;
        margin: 0 20px;
        background: transparent;
        overflow: hidden;
        .tupian {
          width: 150px;
          height: 100%;
          float: left;
          .zhaopian {
            height: 200px;
            margin-top: 10px;

            > img {
              height: 199px;
              border-top-right-radius: 10px;
              border-top-left-radius: 10px;
            }
          }
        }
        .jianjie {
          width: 160px;
          height: 100%;
          float: left;
          margin-left: 25px;
          max-width: 150px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          > div {
            height: 30px;
            line-height: 30px;
            font-size: 14px;
            color: white;
            &:nth-child(1) {
              margin-top: 80px;
            }
          }
        }
      }
      .anniu {
        height: 60px;
        margin: 0 20px;
        overflow: hidden;
        .shou {
          width: 100px;
          float: left;
          margin-top: 8.9px;
          background-color: #ff4444;
          border: none;
        }
        .kai {
          width: 180px;
          float: right;
          margin-top: 8.9px;
          background-color: #ff4444;
          border: none;
        }
      }
      .detai {
        position: fixed;
        top: 360px;
        left: 0px;
        right: 0px;
        bottom: 0px;
        height: 100%;
        .text {
          font-size: 12px;
          margin: 5px 0 auto;
          padding: 0 10px;
        }
        .mulu {
          height: 100%;

          .mulua {
            position: fixed;
            top: 405px;
            left: 0px;
            right: 0px;
            bottom: 0px;
            overflow-y: auto;
            .hua {
              width: 100%;
              background: #eee;
              float: left;
              margin: 5px auto;
              max-width: 199px;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              text-align: center;
              line-height: 30px;
              border-radius: 20px;
            }
          }
        }
        .pinlu {
          margin: 0 10px;
        }
      }
    }
  }
}
</style>