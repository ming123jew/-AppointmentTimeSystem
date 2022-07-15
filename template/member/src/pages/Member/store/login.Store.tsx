// 登录模块
import { makeAutoObservable } from "mobx"
import { http,setToken, getToken, removeToken} from '../../../utils'


class LoginStore {
  token = ''
  constructor() {
    makeAutoObservable(this)
  }
  // 登录
  login = async ({ username, password }) => {
    const res = await http.post('http://geek.itheima.net/v1_0/authorizations', {
      username,
      password
    })
    this.token = res.data.token
  }
}
export default LoginStore
