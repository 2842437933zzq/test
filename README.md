# vue-dom

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

// // 判断注册按钮激活状态
      //  if((this.username.errorMessage == '' || this.username.value != '') || (this.com.errorMessage == '' || this.com.value != '')
      //    || (this.comm.errorMessage == '' || this.comm.value != '') || (this.comm.value == this.com.value)) {
      //     this.isloading = true;

      //   }

      //存一下this
      let self = this;

      //生成一个随机数
      let randomTime = Math.random() * 5 * 2000;

      //定时器
      setTimeout(function() {
        //获取用户信息
        let users = localStorage.getItem("users");

        users = users ? JSON.parse(users) : [];

        console.log("users ==>", users);

          //判断当前用户是否存在
        for (let i = 0; i < users.length; i++) {
          if (users[i].user == self.username.value) {
            self.$toast({

              duration: 2000,

              message: "该用户已存在"
            });
            return;
          }
        }

         self.$toast({

          duration: 2000,

          message: "注册成功"
        });
         return self.$router.push({ path: "/landing" });

        

        //创建一个时间
        let time = new Date().getTime();

        //记录用户注册信息
        let usernametion = {
          //用户名
          user: self.username.value,

          //用户密码
          password: self.com.value,

          //注册时间
          time
        };

        //将当前信息推进users
        users.push(usernametion);

        //写入本地存储
        localStorage.setItem("users", JSON.stringify(users));
      }, randomTime);