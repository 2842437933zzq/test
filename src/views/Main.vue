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
        @input="usename(username.value)"
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
        @input="vaiman1(com.value)"
        @click-right-icon="check"
      />

      <van-field
        class="pomm"
        v-model="comm.value"
        :type="comm.type"
        label="确认密码"
        placeholder="请确认密码"
        left-icon="lock"
        :error-message="comm.errorMessage"
        :right-icon="comm.icon"
        @input="vaiman2(comm.value)"
        @click-right-icon="check2"
      />
    </div>
    <div class="bunt">
      <van-button
        class="btn"
        type="info"
        block
        loading-text="正在注册..."
        :loading="isRegiste"
        text="注册"
        @click="register"
        :disabled="!isloading"
      ></van-button>
    </div>
    <div class="account">
      <span>
        已有账号？
        <router-link class="skip" to="/landing">登录</router-link>
      </span>
    </div>
  </div>
</template>

<style scoped lang="less">
.mine {
  height: 100%;
  background: url("../assets/images/bb.jpg");
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
      background: #3869AE;
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
  name: "mine",

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
      },
      comm: {
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
    register() {

      if(this.comm.value == this.com.value){
      this.isRegiste = true;
      }
      
      //生成一个随机数
      let randomTime = Math.random() * 5 * 1000;

      setTimeout(() => {

          //获取所有用户信息
          let users = localStorage.getItem('users');

          users = users ? JSON.parse(users) : [];

          console.log('users ==> ', users);

          //判断当前用户是否存在
          for (let i = 0; i < users.length; i++) {
            if (users[i].username == this.username.value) {
              this.$toast({
                duration: 2000,
                message: '该用户已存在'
              })
              return;
            }
          }

          this.$toast({

            duration: 2000,

            message: '注册成功' 
            
          })
       this.$router.push({ path: "/landing" });


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
          localStorage.setItem('users', JSON.stringify(users));


          }, randomTime)  

    },
    //验证用户名
    usename(value) {
      console.log("value ==> ", value);
      //new一个正则判断用户名
      let patt = new RegExp("^[A-Za-z][A-Za-z0-9_]{3,7}$");
      //把当前的类型转换成为String
      this.value = typeof "this.value";
      //判断value的真假值返回一个ture或者是flase
      let isAoki = patt.test(value);
      console.log("isAoki ==>", isAoki);
      this.username.errorMessage = !isAoki ? "输入4-8个字母数字的组合" : "";
    },
    //验证密码
    vaiman1(value) {
      console.log("value ==> ", value);
      //new一个正则判断用户名
      let patt = new RegExp("^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,18}$");
      //把当前的类型转换成为String
      this.value = typeof "this.value";
      //判断value的真假值返回一个ture或者是flase
      let iscom = patt.test(value);
      console.log("iscom ==>", iscom);
      this.com.errorMessage = !iscom
        ? "输入8-18个字母数字的组合,包含大小写"
        : "";
    },

    //确认密码验证
    vaiman2(value) {
      console.log("value ==> ", value);
      //new一个正则判断用户名
      let patt = new RegExp("^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,18}$");
      //把当前的类型转换成为String
      this.value = typeof "this.value";
      //判断value的真假值返回一个ture或者是flase
      let iscomm = patt.test(value);
      console.log("iscomm ==>", iscomm);
      // this.comm.errorMessage = !iscomm ? '输入的密码错误或者账号' : '';
      //验证密码和确认密码的值是否相等
      if (iscomm == false || this.comm.value !== this.com.value) {
        this.comm.errorMessage = "两次输入的密码不一致，请重新输入密码";
      } else {
        this.comm.errorMessage = "";
      }
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
      console.log(this.com.value);
    },

    check2() {
      //确认密码password转换类型text
      //切换状态
      if (this.comm.type === "password") {
        this.comm.type = "text";
        this.comm.icon = "eye-o";
      } else {
        this.comm.type = "password";
        this.comm.icon = "closed-eye";
      }
    }
  }
};
</script>
