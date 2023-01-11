// login module
import {makeAutoObservable, remove} from 'mobx'
import { http } from '@/utils/http'
import { getToken, removeToken, setToken } from '@/utils/token'
class LoginStore {
    token = this.getToken || ''
    constructor(){
        makeAutoObservable(this)
    }

    getToken = async ({mobile, code}) =>{
        //调用接口
       const res =  await http.post('http://geek.itheima.net/v1_0/authorizations', {
            mobile, code
        })
        //存入 token
        console.log(res.data)
        this.token = res.data.token
        //存入 localStorge
        setToken(this.token)


    }
    loginOut = () =>{
        this.token = ''
        removeToken()
    }
}

export default LoginStore