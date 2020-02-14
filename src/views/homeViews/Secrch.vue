<template>
  <div class="secrch">
    <van-search
      placeholder="请输入搜索关键词"
      shape="round"
      background="#ff4444"
      show-action
      v-model="value"
      @input="searchdata"
    >
      <div slot="action" @click="onSearch">返回</div>
    </van-search>
    <div class="shousuo">
      <div
        class="neirou"
        v-for="(item, index) in homgdata"
        :key="index"
        @click="sehData({name: 'detail', params: {url: item.url}})"
      >
        <van-row gutter="10">
          <van-col span="7">
            <div class="icomp">
              <img class="auto-img" :src="item.cover" alt />
            </div>
          </van-col>
          <van-col span="17">
            <div class="xiangq">
              <div class="xiaodian">
                <span>{{item.status}}</span>
                <span>{{item.name}}</span>
                <span>{{item.tag}}</span>
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
  name: "secrch",
  data() {
    return {
      value: "",
      homgdata: ""
    };
  },

  methods: {
    searchdata(value) {
      this.name = this.value;
      // console.log("this.name ==>", this.name);
      if (this.value != "") {
        this.$toast.loading({
          duration: 0,
          message: "正在搜素..."
        });
        let self = this;
        let name = this.name;
        // 发起ajax请求
        $.ajax({
          type: "GET",
          url: "http://api.pingcc.cn/?mhname=" + name,
          data: {},
          dataType: "json",
          success: function(data) {
            console.log("data ==>", data);
            self.homgdata = data.list;
            // console.log("self.searchData ==>", self.searchData);
            self.$toast.clear();
          }
        });
      } else {
        this.value = "";
      }
    },

    sehData(o) {
      this.$router.push(o);
      // console.log("o ==>", o);
    },

    onSearch() {
      this.$router.go(-1); //返回上一层
    }
  }
};
</script>

<style lang="less" scoped>
.secrch {
  height: 100%;
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  .van-search {
    padding: 10px;
  }
  .van-search__content {
    border-radius: 20px;
    background: #ff4444;
    border: 1px solid white;
  }
  .van-cell {
    color: white;
  }
  .van-search__action {
    color: white;
  }
  .shousuo {
    height: 100%;
    padding: 0px 5px;
    position: fixed;
    top: 55px;
    left: 0px;
    right: 0px;
    bottom: 50px;
    overflow-y: auto;
    .neirou {
      background: #eee;
      height: 120px;
      margin: 5px 0;
      .icomp {
        height: 120px;
        img {
          height: 120px;
        }
      }
      .xiangq {
        .xiaodian {
          width: 200px;
          height: 60px;
          margin-top: 60px;
          > span {
            display: block;
            line-height: 20px;
          }
        }
      }
    }
  }
}
</style>