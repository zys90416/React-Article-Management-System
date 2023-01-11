//把所有模块统一处理再导出

import React from "react"
import ChannelStore from "./channel.Store"
import LoginStore from "./login.Store"
import UserStore from "./user.Store"



class RootStore {
    constructor(){
       this.loginStore = new LoginStore()
       this.userStore = new UserStore()
       this.channelStore = new ChannelStore()
        
        

    }
}

//实例化根
const rootStore = new RootStore()
const context = React.createContext(rootStore)

const useStore = () => React.useContext(context)
export {useStore}