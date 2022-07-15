// 登录模块
import { makeAutoObservable } from "mobx"
import { http, setToken, getToken, removeToken } from '@/utils'


class LoginStore {
    token = ''
    constructor() {
        makeAutoObservable(this)
    }
    // 登录
    login = async ({ username, password }) => {
        console.log( username, password)
        const res = await http.post('/api/login', {
            username,
            password
        })
        this.token = res.data.token
        console.log(res)
        setToken(this.token)

    }

    // 退出登录
    loginOut = () => {
        this.token = ''
        removeToken()
    }
}
export default LoginStore
