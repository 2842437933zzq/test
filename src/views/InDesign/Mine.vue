<template>
  <div class="mine">
    <div class="tou">
      <div class="denglu" @click="login">退出</div>
      <div class="ponss">
        <div class="logo fl"></div>
        <div class="title fl">
          <div class="nucheng">{{userData[0].username}}</div>
          <div class="huiyuna">
            <span class="bi">1200漫币</span>
            <span class="yuan">VIP</span>
          </div>
        </div>
      </div>
    </div>
    <div class="device">
      <div class="news">
        <div class="auto">
          <div class="xiao fl">
            <van-icon name="comment-o" size="40" color="white" />
          </div>
          <div class="shao fl">
            <div class="amo">消息</div>
            <div class="yinwen">massgs</div>
          </div>
        </div>
      </div>
      <div class="membe">
        <div class="auto">
          <div class="xiao fl">
            <van-icon name="vip-card-o" size="40" color="white" />
          </div>
          <div class="shao fl">
            <div class="amo">会员</div>
            <div class="yinwen">member</div>
          </div>
        </div>
      </div>
      <div class="feedback">
        <div class="auto">
          <div class="xiao fl">
            <van-icon name="debit-pay" size="40" color="white" />
          </div>
          <div class="shao fl">
            <div class="amo">反馈</div>
            <div class="yinwen">feedback</div>
          </div>
        </div>
      </div>
      <div class="setting">
        <div class="auto">
          <div class="xiao fl">
            <van-icon name="setting-o" size="40" color="white" />
          </div>
          <div class="shao fl">
            <div class="amo">设置</div>
            <div class="yinwen">settings</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "mine",
  data() {
    return {
      userData: null
    };
  },

  methods: {
    //退出或者登录
    login() {
      this.$router.replace({ name: "landing" });
    }
  },

  created() {
    let users = localStorage.getItem("users");
    console.log("users ==>", users);
    let userInfo = JSON.parse(users);
    console.log("userInfo ==>", userInfo);
    this.userData = userInfo;
    console.log("this.userData ==>", this.userData);
  }
};
</script>

<style lang="less" scoped>
.mine {
  height: 100%;
  .tou {
    height: 200px;
    background: #ff4444;
    overflow: hidden;
    .denglu {
      position: fixed;
      right: 0px;
      font-size: 14px;
      color: white;
      padding: 10px;
    }
    .ponss {
      width: 300px;
      height: 80px;
      margin-top: 80px;
      margin-left: 40px;
      overflow: hidden;
      .logo {
        width: 80px;
        height: 80px;
        color: #aaa;
        text-align: center;
        line-height: 80px;
        background: white;
        border-radius: 50%;
      }
      .title {
        height: 80px;
        margin-left: 40px;
        .nucheng {
          height: 40px;
          line-height: 40px;
          font-size: 20px;
          color: white;
        }
        .huiyuna {
          overflow: hidden;
          height: 40px;
          line-height: 40px;
          font-size: 16px;

          .bi {
            color: white;
          }
          .yuan {
            margin-left: 30px;
            background: #fdf31d;
            color: #dc6414;
            border-radius: 5px;
            font-size: 14px;
          }
        }
      }
    }
  }
  .device {
    height: calc(~"100% - 221px - 57px + 29px");
    background-color: #ffffff;
    overflow: hidden;
    .news {
      height: 80px;
      margin-top: 20px;
      overflow: hidden;
      .auto {
        width: 300px;
        height: 60px;
        overflow: hidden;
        margin-left: 50px;
        margin-top: 10px;

        .xiao {
          width: 60px;
          height: 60px;
          background: #ff4444;
          border-radius: 50%;

          .van-icon-comment-o:before {
            margin-left: 11px;
            margin-top: 11px;
          }
        }
        .shao {
          color: #6e6e6e;
          font-size: 16px;
          margin-left: 30px;
          .amo {
            height: 30px;
            line-height: 30px;
            font-size: 16px;
          }
          .yinwen {
            height: 30px;
            line-height: 30px;
          }
        }
      }
    }
    .membe {
      height: 80px;
      margin-top: 20px;
      overflow: hidden;

      .auto {
        width: 300px;
        height: 60px;
        overflow: hidden;
        margin-left: 50px;
        margin-top: 10px;

        .xiao {
          width: 60px;
          height: 60px;
          background: #ff4444;
          border-radius: 50%;

          .van-icon-vip-card-o:before {
            margin-left: 11px;
            margin-top: 11px;
          }
        }
        .shao {
          color: #6e6e6e;
          font-size: 16px;
          margin-left: 30px;
          .amo {
            height: 30px;
            line-height: 30px;
            font-size: 16px;
          }
          .yinwen {
            height: 30px;
            line-height: 30px;
          }
        }
      }
    }
    .feedback {
      height: 80px;
      margin-top: 20px;
      overflow: hidden;
      .auto {
        width: 300px;
        height: 60px;
        overflow: hidden;
        margin-left: 50px;
        margin-top: 10px;

        .xiao {
          width: 60px;
          height: 60px;
          background: #ff4444;
          border-radius: 50%;

          .van-icon-debit-pay:before {
            margin-left: 11px;
            margin-top: 11px;
          }
        }
        .shao {
          color: #6e6e6e;
          font-size: 16px;
          margin-left: 30px;
          .amo {
            height: 30px;
            line-height: 30px;
            font-size: 16px;
          }
          .yinwen {
            height: 30px;
            line-height: 30px;
          }
        }
      }
    }
    .setting {
      height: 80px;
      margin-top: 20px;
      overflow: hidden;

      .auto {
        width: 300px;
        height: 60px;
        overflow: hidden;
        margin-left: 50px;
        margin-top: 10px;

        .xiao {
          width: 60px;
          height: 60px;
          background: #ff4444;
          border-radius: 50%;

          .van-icon-setting-o:before {
            margin-left: 11px;
            margin-top: 11px;
          }
        }
        .shao {
          color: #6e6e6e;
          font-size: 16px;
          margin-left: 30px;
          .amo {
            height: 30px;
            line-height: 30px;
            font-size: 16px;
          }
          .yinwen {
            height: 30px;
            line-height: 30px;
          }
        }
      }
    }
  }
}
</style>