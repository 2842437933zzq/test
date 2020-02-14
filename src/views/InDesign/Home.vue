<template>
  <div class="home">
    <div class="nav">
      <div class="show"></div>
      <div class="search">
        <div class="abbr fl">爱漫画</div>
        <div class="search-box fr">
          <van-icon name="search" size="32" color="white" @click="searche" />
        </div>
      </div>
    </div>
    <div class="family-tam">
      <div class="family">
        <div class="carousel">
          <van-swipe :autoplay="3000" indicator-color="white">
            <van-swipe-item>
              <img class="auto-img" src="../../assets/images/01.jpg" alt />
            </van-swipe-item>
            <van-swipe-item>
              <img class="auto-img" src="../../assets/images/02.jpg" alt />
            </van-swipe-item>
            <van-swipe-item>
              <img class="auto-img" src="../../assets/images/03.jpg" alt />
            </van-swipe-item>
            <van-swipe-item>
              <img class="auto-img" src="../../assets/images/04.jpg" alt />
            </van-swipe-item>
            <van-swipe-item>
              <img class="auto-img" src="../../assets/images/05.jpg" alt />
            </van-swipe-item>
            <van-swipe-item>
              <img class="auto-img" src="../../assets/images/06.jpg" alt />
            </van-swipe-item>
          </van-swipe>
        </div>
        <div class="content">
          <div class="content-title">
            <div class="icone fl">
              <van-icon name="fire" color="#FF4444" size="20" />
            </div>
            <div class="title fl">最新更新</div>
          </div>
          <div class="main-content">
            <van-row gutter="0">
              <van-col
                span="8"
                v-for="(item, index) in htmlData"
                :key="index"
                :url="item.url"
                @click="particulars({name: 'detail', params: {url: item.url}})"
              >
                <div class="picture">
                  <div class="tupian">
                    <img class="auto-img" v-lazy="item.cover" preload="100px" alt />
                    <div class="subtitle">
                      <div class="cartoon-name">{{item.name}}</div>
                    </div>
                  </div>
                </div>
              </van-col>
            </van-row>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  name: "home",

  data() {
    return {
      htmlData: null,
    };
  },

  created() {
    //开启加载提示
    this.$toast.loading({
      duration: 0,
      message: "加载中..."
    });

    let self = this;
    // 发起ajax请求
    $.ajax({
      type: "GET",
      url: "http://api.pingcc.cn/?mhlb=new",
      data: {},
      dataType: "json",
      success: function(data) {
        // console.log("data ==>", data);
        self.htmlData = data.list.slice(1, 97);
        // console.log("self.htmlData ==>", self.htmlData);
        self.$toast.clear();
      }
    });
  },

  methods: {
    searche() {
      this.$router.replace({ name: "secrch" });
    },
    particulars(o) {
      this.$router.push(o);
      // console.log("0 ==>", o);
    }
  }
};
</script>

<style lang="less" scoped>
.home {
  height: 100%;
  background: #ededee;
  .nav {
    height: 60px;
    background-color: #ff4444;
    position: sticky;
    top: 0;
    .show {
      height: 20px;
      background-color: #ff4444;
    }
    .search {
      height: 40px;
      background-color: #ff4444;
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
  .family-tam {
    position: fixed;
    top: 60px;
    left: 0px;
    bottom: 50px;
    right: 0px;

    .family {
      height: 100%;
      overflow: hidden;
      overflow-y: auto;
      .content-title {
        height: 20px;
        padding: 10px 10px;
        .title {
          font-size: 15px;
          color: #ff4444;
          margin-left: 5px;
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
  }
}
</style>