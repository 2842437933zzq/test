<template>
  <div class="mine">
    <div class="tou">
      <div class="logo">上传头像</div>
    </div>
    <div class="register">
      <van-field
        class="pomm"
        type="text"
        :error-message="username.errorMessage"
        v-model="username.value"
        @input="pamom(username.value)"
        clearable
        left-icon="manager"
        label="用户名"
        placeholder="请输入用户名"
      />

      <van-field
        class="pomm"
        v-model="com.value"
        :type="com.type"
        label="密码"
        placeholder="请输入密码"
        left-icon="lock"
        :error-message="com.errorMessage"
        :right-icon="com.icon"
        @input="pamom1(com.value)"
        @click-right-icon="check"
      />
    </div>
    <div class="bunt">
      <van-button
        class="btn"
        type="info"
        block
        loading-text="登录中..."
        :loading="isRegiste"
        text="登录"
        @click="login"
        :disabled="!isloading"
      ></van-button>
    </div>
    <div class="account">
      <span>
        已有账号？
        <router-link class="skip" to="/main">登录</router-link>
      </span>
    </div>
  </div>
</template>

<style scoped lang="less">
.mine {
  height: 100%;
  background: url("../assets/images/aa.jpg");
  background-size: cover;

  .tou {
    height: 200px;
    position: relative;
    .logo {
      color: #aaa;
      text-align: center;
      line-height: 80px;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      background-color: #fff;
      width: 80px;
      height: 80px;
      border-radius: 50%;
      box-shadow: 0 0 0 5px rgba(255, 255, 255, 0.3);
      &:hover {
        box-shadow: 0 0 0 15px rgba(255, 255, 255, 0.3);
        transition: all 0.5s;
      }
    }
  }

  .register {
    .pomm {
      color: white;
      background: transparent;
      border: 2px solid white;
      margin-top: 20px;
      border-radius: 5px;
    }
  }
  .bunt {
    margin-top: 60px;

    .btn {
      background: #3C6FDC;
      border-radius: 5px;
    }
  }
  .account {
    text-align: center;
    margin-top: 50px;
    .skip {
      color: #1363fb;
    }
  }
}
</style>

<script>
export default {
  name: "landing",

  data() {
    return {
      //正在注册
      isRegiste: false,
      // 控制注册按钮状态
      isloading: true,

      username: {
        value: "",
        errorMessage: ""
      },
      com: {
        type: "password",
        value: "",
        icon: "closed-eye",
        errorMessage: ""
      }
    };
  },

  //方法定义
  methods: {
    //注册状态
    login() {
      this.isRegiste = true;

      //生成一个随机数
      let randomTime = Math.random() * 5 * 2000;

      //定时器
      setTimeout(() => {
        //获取用户信息
        let users = localStorage.getItem("users");

        users = users ? JSON.parse(users) : [];

        console.log("users ==>", users);

        if (users.length === 0) {
          this.$toast({
            duration: 2000,
            message: "该用户不存在"
          });
          return;
        }

        //查找用户
        for (let i = 0; i < users.length; i++) {
          console.log("users[i] ==>", users[i]);
          //判断该用户是否存在，匹配密码值
          if (users[i].username == this.username.value) {
            console.log("this.username.value ==>", this.username.value);
            console.log("users[i].username ==>", users[i].username);
            if (users[i].pwd == this.com.value) {
              console.log("this.com.value ==>", this.com.value);
              console.log("users[i].pwd ==>", users[i].pwd);
              this.$toast({
                duration: 2000,
                message: "登录成功"
              });
              return this.$router.push({ path: "/home" });
              let time = new Date().getTime();

              //记录用户信息
              let userInformation = {
                //用户名
                username: this.username.value,

                //密码
                pwd: this.com.value,

                //注册时间
                time
              };

              //将当前用户信息推进users
              users.push(userInformation);

              //写入本地存储，模拟数据库
              localStorage.setItem("users", JSON.stringify(users));
            } else {
              this.$toast({
                duration: 2000,
                message: "用户名或者密码不正确"
              });
            }
          }
        }
      }, randomTime);
    },

    pamom(value) {
      console.log("value ==> ", value);
    },

    pamom1(value) {
      console.log("value ==> ", value);
    },

    //查看密码
    check() {
      //密码password转换类型text
      //切换状态
      if (this.com.type === "password") {
        this.com.type = "text";
        this.com.icon = "eye-o";
      } else {
        this.com.type = "password";
        this.com.icon = "closed-eye";
      }
    }
  }
};
</script>
