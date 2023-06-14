//src/stores/counter.js
import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'
/**
 * 箭头函数  this（没有）   const fun=(a,b)=>{}
 * 常规函数                 const fun=function(a,b) {}
 */
/**
 * 创建store 注意命名:usrUserStore
 * user 是 storeId 唯一
 * 核心：state 其他属性都是为state服务
 *       getters 主要作用是对state的数据进行过滤、方法
 *       actions: 修改state里面的数据 方法
 *      plugins 插件
 */
//选项式
export const useUserStore = defineStore('user', {
  //状态值是核心
  state: () => {
    return {
      token: '',
      userinfo: {
        state: 1,
        id: 0,
        userName: '',
        userType: '',
        token: '',
        binding: 0,
        createTime: '',
        updateTime: '',
        email: '',
      },
    }
  },
  // state:()=>({count:0})
  getters: {
    getToken() {
      return this.token
    },
  },
  actions: {
    setToken(token) {
      this.token = token
    },
    fillUserinfo(user) {
      this.userinfo = user
    },
  
    // increment(state){
    //     state.count++;
    // },
    // fillUser(state,user){
    //     state.userinfo=user;
    // }
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'userinfo',
        storage: localStorage, //会话存储 sessionStorage 本地存储 localStorage
        paths: ['token'], //部分存储
      },
    ],
  },
})

//组合式
// export const useUserStore = defineStore('user',()=>{
//     // let count = ref(0);
//     let token = ref('');

//     const userinfo = ref({});
//     // let count = reactive({count:0});
// //     let userinfo = reactive({
// //         state:1,
// //         id:0,
// //         userName:"",
// //         token:"",
// //         binding:0,
// //         createTime:"",
// //         updateTime:"",
// //         email:""
// //    })

//     // function increat(){
//     //     count.value++
//     // }
//     // function fillUser(state,user){
//     //     state.userinfo=user
//     // }
//     const setToken=(token)=>{
//         token=token
//     }
//     const fillUserinfo=(user)=>{
//         userinfo=user
//     }
//     // return{count,token ,increat,fillUser,setToken}
//     return{token,userinfo,setToken,fillUserinfo}
// })
