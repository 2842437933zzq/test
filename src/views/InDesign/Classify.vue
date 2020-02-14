<template>
  <div class="classify">
    <div class="nav">
      <div class="show"></div>
      <div class="search">
        <div class="abbr fl">爱漫画</div>
        <div class="search-box fr">
          <van-icon name="search" size="32" color="white" @click="searche" />
        </div>
      </div>
    </div>
    <div class="apomem">
      <div class="xiaobiao">
        <div class="tubiao fl">
          <van-icon name="hot-o" size="32" color="#ff4444" />
        </div>
        <div class="rimen fl">热门分类</div>
      </div>

      <div class="quanbu">
        <van-row gutter="0">
          <van-col span="12" v-for="(item, index) in fenliData" :key="index" @click="fenlei(item)">
            <div class="rexue">
              <div class="re fl">{{item.name}}</div>
              <div class="tu fl">
                <img
                  class="auto-img"
                  src="../../assets/images/01.gif"
                  alt
                />
              </div>
            </div>
          </van-col>
        </van-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "classify",

  data() {
    return {
      fenliData: [
        {
          name: "少年热血",
          url: "shaonianrexue"
        },
        {
          name: "武侠格斗",
          url: " wuxiagedou"
        },
        {
          name: "恐怖灵异",
          url: "kongbulingyi"
        },
        {
          name: "耽美人生",
          url: "danmeirensheng"
        },
        {
          name: "少女爱情",
          url: "shaonvaiqing"
        },
        {
          name: "恋爱生活",
          url: " lianaishenghuo"
        },
        {
          name: "生活漫画",
          url: "shenghuomanhua"
        },
        {
          name: "科幻魔幻",
          url: "kehuanmohuan"
        },
        {
          name: "竞技体育",
          url: " jingjitiyu"
        },
        {
          name: "爆笑喜剧 ",
          url: "baoxiaoxiju"
        },
        {
          name: "侦探推理",
          url: "zhentantuili"
        },
        {
          name: "已完结",
          url: "wanjie"
        },
        {
          name: "连载中",
          url: "lianzai"
        },
          {
          name: "欧美漫画",
          url: "omei"
        },
         {
          name:"国产漫画",
          url:"guochan"
        },
           {
          name:"日韩漫画",
          url:"rihan"
        },
           {
          name:"港台漫画 ",
          url:"gangtai"
        },
      ],
    };
  },
  methods: {
    searche() {
      this.$router.replace({ name: "secrch" });
    },
    //分类
    fenlei(item) {
        this.$router.push({ name: "fenlei", query: { item }});
        // console.log("item.name ==>", item.name);
        //  console.log("item.url ==>", item.url);
    }
  }
};
</script>

<style lang="less" scoped>
.classify {
  height: 100%;
  .nav {
    width: 100%;
    height: 60px;
    background-color: #ff4444;
    position: sticky;
    top: 0px;
    z-index: 1;

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

  .apomem {
    height: calc(~"100% - 66.3px - 56.35px + 12px");
    overflow-y: auto;

    .classiyf {
      .popular {
        height: 80px;
        background: lightcoral;
        overflow: hidden;
        position: relative;
        img {
          height: 80px;
        }
        .popular-title {
          height: 80px;
          line-height: 80px;
          font-size: 28px;
          position: absolute;
          left: 0px;
          top: 0px;
          color: white;
          margin-left: 40px;
        }
      }
      .praise {
        height: 80px;
        background: #f3cb8d;
        overflow: hidden;
        position: relative;
        margin-top: 5px;
        img {
          height: 80px;
        }
        .praise-title {
          height: 80px;
          line-height: 80px;
          font-size: 28px;
          position: absolute;
          left: 0px;
          top: 0px;
          color: white;
          margin-left: 40px;
        }
      }
      .horse {
        height: 80px;
        background: #efd0ce;
        overflow: hidden;
        position: relative;
        margin-top: 5px;
        img {
          height: 80px;
        }
        .horse-title {
          height: 80px;
          line-height: 80px;
          font-size: 28px;
          position: absolute;
          left: 0px;
          top: 0px;
          color: white;
          margin-left: 40px;
        }
      }
    }

    .xiaobiao {
      height: 50px;
      font-size: 16px;
      line-height: 50px;
      color: #323030;
      overflow: hidden;
      .tubiao {
        width: 32px;
        height: 32px;
        margin-top: 9px;
        margin-left: 10px;
      }
      .rimen {
        margin-left: 10px;
      }
    }
    .quanbu {
      .rexue {
        height: 80px;
        border: 1px solid #eeeeee;
        overflow: hidden;
        .re {
          width: 80px;
          height: 80px;
          line-height: 80px;
          font-size: 20px;
          color: #323030;
          margin-left: 10px;
          text-align:center;
        }
        .tu {
          width: 80px;
          height: 80px;
          margin-left: 10px;
          img {
            width: 80px;
            height: 80px;
          }
        }
      }
    }
  }
}
</style>