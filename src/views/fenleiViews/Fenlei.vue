<template>
  <div class="fenlei">
    <div class="title">
      <van-nav-bar :title="titleData" left-text="返回" @click-left="back" />
    </div>
    <div class="fenlei-nei">
      <div class="potos">
        <van-row gutter="0">
          <van-col span="8" v-for="(item, index) in fenleiData" :key="index" @click="partiu({name: 'detail', params: {url: item.url}})">
            <div class="picture">
              <div class="tupian">
                <img
                  class="auto-img"
                  v-lazy="item.cover" preload="400px"
                  alt
                />
                <div class="fen">
                  <div class="fenlei-name">{{item.name}}</div>
                </div>
              </div>
            </div>
          </van-col>
        </van-row>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  name: "fenlei",
  data() {
    return {
        fenleiData:'',
        titleData:null,
    };
  },

  methods: {
    back() {
      this.$router.replace({ name: "classify" });
    },
     partiu(o) {
      this.$router.push(o);
      // console.log("0 ==>", o);
    }
  },
  created() {
    // 开启加载提示
    this.$toast.loading({
      duration: 0,
      message: "加载中..."
    });

    let self = this;
    let classifyData = this.$route.query.item;
    console.log("classifyData ==>", classifyData)
    let url = classifyData.url;
    let name = classifyData.name;
    this.titleData = name;
    // console.log("this.titleData ==>", this.titleData)
    // console.log("name ==>",name)
    // console.log("url ==>",url)
    // 发起ajax请求
    $.ajax({
      type: "GET",
      url: "http://api.pingcc.cn/?mhlb=" + url,
      data: {},
      dataType: "json",
      success: function(data) {
        // console.log("data ==>", data)
        self.fenleiData = data.list.slice(1, 97);
        self.$toast.clear();
      }
    });
  }
};
</script>

<style lang="less" scoped>
.fenlei {
  .title {
    color: white;
    .van-nav-bar__text {
      color: white;
    }
    .van-nav-bar__title {
      color: white;
    }
    .van-nav-bar {
      background: #ff4444;
    }
  }

  .fenlei-nei {
    width: 100%;
    position: fixed;
    top: 46px;
    bottom: 0;
    right: 0;
    left: 0;
    .potos {
      height: 100%;
      overflow-y: auto;
      padding: 0px 5px;
      .picture {
        padding: 5px;
        height: 150px;
        .tupian {
          position: relative;
          img {
            height: 150px;
          }

          .fen {
            height: 20px;
            background: rgba(255, 255, 245, 0.7);
            position: absolute;
            top: 130px;
            left: 0px;
            bottom: 0px;
            right: 0px;
            .fenlei-name {
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
</style>