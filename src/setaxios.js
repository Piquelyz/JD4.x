import axios from 'axios'
import store from './store'
import router from './router'

//http 全局拦截
//token 要放在我们请求的 header 上面带回去给后端

export default function sexAxios() {
    //请求拦截
    axios.interceptors.request.use(
        config => {
            if(store.state.token) {
                config.headers.token = store.state.token
            }
            return config
        }
    )

    //每次请求都有返回的,都是先经过此拦截器
    axios.interceptors.response.use(
        response => {
            if(response.status == 200) {
                const data = response.data
                if(data.code == -1) {
                    //登陆过期,需要重新登陆,清空 vuex 的 token 和 localStorage 的 token
                    store.commit('settoken', '')
                    localStorage.removeItem('token')
                    //跳转到 loginyemian
                    //用 replace 不会插入到 router 的 history 中
                    router.replace({path:'/login'})
                }
                return data
            }
            return response
        }
    )
}