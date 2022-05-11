import React, { useState, createContext, useContext } from "react";
import { Navigate } from "react-router-dom";

const AuthContext = createContext()

// 自定义Hook 设置权限
const useAuth = () => {
    const [authed, setAuthed] = useState(false);
    return {
        authed,
        login(){
            return new Promise((resolve)=>{
                setAuthed(true)
                resolve()
            })
        },
        logout(){
            return new Promise((resolve)=>{
                setAuthed(false)
                resolve()
            })
        }
    }
}

// 创建上下文广播Auth及设置Auth的方法
const AuthProvider = ({children})=>{
    const auth = useAuth()
    return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

// 创建消费者拿到上下文传递的实例
const AuthConsumer = ()=>{
    return useContext(AuthContext);
}

/**
 * @description
 * 封装拦截组件,如果已登录，返回包括的children组件；
 * 未登录，返回 <Navigate to="/user" /> 组件跳转到登录页面。
 * 
 * @example
 * <RequireAuth>
 *   <ComponentNeedAuth />
 * </RequireAuth>
 */
const RequireAuth = ({children})=>{
    const auth = AuthConsumer();
    const { authed } = auth;
    if(authed){
        return children
    }else{
        return <Navigate to='/login' replace/>
    }
}

export { AuthProvider, RequireAuth, AuthConsumer }