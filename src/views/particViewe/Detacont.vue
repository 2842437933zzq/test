<template>
  <div class="detacont">
    <div class="title">
      <van-nav-bar :title="tileData" left-text="返回" @click-left="back" />
    </div>
    <div class="poto-tu">
      <div class="potos" ref="potos">
        <img v-for="(item, index) in homeData" :key="index" v-lazy="item.img" preload="500px" alt />
      </div>
    </div>
    <div class="zhangjie">
      <van-button round type="info" class="pren" @click="shangzhang">上一张</van-button>
      <van-button round type="info" class="next" @click="xiazhang">下一章</van-button>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  name: "detacont",
  data() {
    return {
      i: 0,
      homeData: [],
      tileData: ""
    };
  },

  methods: {
    back() {
      this.$router.go(-1); //返回上一层
    },
    //上一章
    shangzhang() {
      if (this.i > 0) {
        this.$toast.loading({
          duration: 0,
          message: "加载中..."
        });
        this.i--;
        let self = this;
        let i = this.i;
        let modata = this.$route.query.muludata;
        self.tileData = modata[i].num;
        //发起ajax请求
        $.ajax({
          type: "GET",
          url: "http://api.pingcc.cn/?mhurl2=" + modata[i].url,
          data: {},
          dataType: "json",
          success: function(data) {
            self.homeData = data.list;
            self.$toast.clear();
            self.$refs.potos.scrollTop = 0;
            // console.log('homeData ==>',homeData);
          }
        });
      } else {
        this.i = 0;
      }
    },
    //下一章
    xiazhang() {
      if (this.i < this.shuzhuData) {
        this.$toast.loading({
          duration: 0,
          message: "加载中..."
        });
        this.i++;
        let self = this;
        let i = this.i;
        let modata = this.$route.query.muludata;
        self.tileData = modata[i].num;
        //发起ajax请求
        $.ajax({
          type: "GET",
          url: "http://api.pingcc.cn/?mhurl2=" + modata[i].url,
          data: {},
          dataType: "json",
          success: function(data) {
            self.homeData = data.list;
            // console.log('homeData ==>',homeData);
            self.$refs.potos.scrollTop = 0;
            self.$toast.clear();
          }
        });
      } else {
        this.i = this.shuzhuData - 1;
      }
    }
  },
  created() {
    //开启加载提示
    this.$toast.loading({
      duration: 0,
      message: "加载中..."
    });
    let self = this;
    this.i = this.$route.query.index;
    // console.log("this.i ==>", this.i)
    let modata = this.$route.query.muludata;
    // console.log("modata ==>", modata)
    self.tileData = modata[this.i].num;
    // console.log('this.tileData ==>', this.tileData);
    self.shuzhuData = modata.length;
    //  console.log(" self.shuzhuData ==>",  self.shuzhuData)
    //发起ajax请求
    $.ajax({
      type: "GET",
      url: "http://api.pingcc.cn/?mhurl2=" + modata[self.i].url,
      data: {},
      dataType: "json",
      success: function(data) {
        self.homeData = data.list;
        // console.log('self.homeData ==>',self.homeData);
        self.$toast.clear();
      }
    });
  }
};
</script>

<style lang="less" scoped>
.detacont {
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

  .poto-tu {
    width: 100%;
    position: fixed;
    top: 46px;
    bottom: 50px;
    right: 0;
    left: 0;
    .potos {
      height: 100%;
      overflow-y: auto;
      > img {
        width: 100%;
        height: 100%;
        display: block;
      }
    }
  }
  .zhangjie {
    height: 50px;
    background: #ff4444;
    position: fixed;
    bottom: 0px;
    left: 0px;
    right: 0px;

    text-align: center;
    line-height: 50px;
    .van-button::before {
      color: red;
    }
    .pren {
      margin: 4px 5px;
      background-color: lightgreen;
      border: none;
    }
    .next {
      margin: 4px 5px;
      background-color: lightgreen;
      border: none;
    }
  }
}
</style>