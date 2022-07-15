import { MockMethod } from 'vite-plugin-mock'

export default [
  //模拟登陆成功
  {
    url: "/api/login",
    method: "post",
    response: () => {
      return {
        code: 200,
        message: "ok",
        data: {
          "userinfo":{
            "username": "ming123jew",
            "avatar": "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201905%2F20%2F20190520004715_HxfMB.thumb.400_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1660466463&t=cf41718a9bc692f1415f038d6f81ddc4", 
            "last_login_date":"2022-07-15 16:41",

          },
          "token": "2nRjmJgGuHrlcC0qC4cFJdZYxZ8Ps1RVvMqagRBpRsYnSfJy1zVYTneKldiA9fWe",
        }
      };
    }
  }
] as MockMethod[] // 这里其实就是定义数据格式的，不了解的同学可以参考typescript的官方文档


// test.js 仅做示例: 通过GET请求返回一个名字数组
// export default [
//   {
//     url: "/api/login",
//     method: "post",
//     response: () => {
//       return {
//         code: 200,
//         message: "ok",
//         data: {
//           "userinfo":{},
//           "token": {}
//         }
//       };
//     }
//   }
// ];