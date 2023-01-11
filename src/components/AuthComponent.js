//先判断token是否存在
//如果存在，直接渲染
//否则，直接重定向回登陆路由

//高阶组件： 把一个组件当初另外一个组件参数传入，判断后，返回新组件


import { getToken } from '@/utils/token'

import {Navigate} from 'react-router-dom'
function AuthComponent({children}){
    const isToken = getToken()
    if(isToken){
        return <>{children}</>
    }else{
        return <Navigate to="/login" replace />
    }
}

// <AuthComponent> <Layout /> <AuthComponent/>
//登陆的话，就返回Layout， 否则返回登陆

export {
    AuthComponent
}