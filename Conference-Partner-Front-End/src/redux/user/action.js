import {
    USER_LOAD_DATA_START,
    USER_LOAD_DATA_FINISH,
    USER_LOAD_MORE_START,
    USER_LOAD_MORE_FINISH,
    GET_USER,
    LOGIN,
    REGISTER,
    LOGOUT
} from './action-type';
import Axios from "../../axios/axios";
import {openNotificationWithIcon} from "../../componetns/notification";

//开始加载第一页的文章数据
const userLoadDataStart = () => ({type: USER_LOAD_DATA_START});

//加载第一页的文章数据完毕
const userLoadDataFinish = (data) => ({type: USER_LOAD_DATA_FINISH,data: data});

//开始加载下一页的文章数据
const userLoadMoreStart = () => ({type: USER_LOAD_MORE_START});

//加载下一页的文章数据完毕
const userLoadMoreFinish = (data) => ({type: USER_LOAD_MORE_FINISH,data: data});

// 注册
const register = (data) => ({type: REGISTER, data: data});

// 登录
const login = (data) => ({type: LOGIN, data: data});

// 登出
export const logout = () => ({type: LOGOUT});

// 获取用户信息
const getUserAsyn = (data) => ({type: GET_USER,data: data});

//加载第一页的文章
export const userLoadData = (data) => {
    return dispatch => {
        dispatch(userLoadDataStart());
        fetchData(data.url,data.username,data.pageNo,dispatch);
    }
}

//加载下一页的文章
export const userLoadMore = (data) => {
    return dispatch => {
        dispatch(userLoadMoreStart());
        fetchMoreData(data.url,data.username,data.pageNo,dispatch);
    }
}

//加载用户信息
export const getUser = (data) => {
    return dispatch => {
        fetchUser(data.url,dispatch);
    }
}

// 登录
export const loginAsync = (data) => {
    return dispatch => {
        fetchLogin(data,dispatch);
    }
}

// 注册
export const RegisterAsync = (data) => {
    return dispatch => {
        fetchRegister(data,dispatch);
    }
}

function fetchData(url,username,pageNo,dispatch){
    // console.log("fetchData---url : "+url);
    Axios.get(url,{
        params: {
            username: username,
            pageNo: pageNo
        }
    }).then(({data}) => {
        if(data.code === 200){
            dispatch(userLoadDataFinish(
                {
                    hasMore: !data.detail.last,
                    pageNo: pageNo + 1,
                    article: data.detail.content,
                }
            ))
        }else{
            {openNotificationWithIcon("error","Error",data.description)}
        }
    }).catch(error => {
        {openNotificationWithIcon("error","Error",error.message)}
    })
}

function fetchMoreData(url,username,pageNo,dispatch){
    // console.log("fetchMoreData---url : "+url);
    Axios.get(url,{
        params: {
            username: username,
            pageNo: pageNo
        }
    }).then(({data}) => {
        if(data.code === 200){
            dispatch(userLoadMoreFinish(
                {
                    hasMore: !data.detail.last,
                    pageNo: pageNo + 1,
                    article: data.detail.content,
                }
            ))
        }else{
            {openNotificationWithIcon("error","Error",data.description)}
        }
    }).catch(error => {
        {openNotificationWithIcon("error","Error",error.message)}
    })
}

//获取用户信息
function fetchUser(url,dispatch){
    // console.log("fetchUser---url : "+url);
    Axios.get(url).then(({data}) => {
        if(data.code === 200){
            dispatch(getUserAsyn(
                {
                    user: data.detail.avatar,
                }
            ))
        }else{
            {openNotificationWithIcon("error","Error",data.description)}
        }
    }).catch(error => {
        {openNotificationWithIcon("error","Error",error.message)}
    })
}

// 登录
function fetchLogin(data,dispatch) {
    Axios.post('/auth/login', {
        userName: data.username,
        password: data.password
    }).then(({data}) => {
        console.log(data)
        var data1 = {}
        data1.code = 200
        data1.detail = {
            "token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJyb290IiwiY3JlYXRlZCI6MTcxNjI3NzkxMjYzOCwiZXhwIjoxNzE2ODgyNzEyfQ.IHzp-ww5lCGMqyUiEWNUFFiPzuUlT8Osasu7La53qfivgqL2w9E78Su3Tbbl3zvxW9awrN1obzPP-6urr8RSAQ",
            "username": "a",
            "avatar": "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" 
        }
        if (data1.code === 200) {
            localStorage.setItem("token", data1.detail.token);
            localStorage.setItem("username", data1.detail.username);
            localStorage.setItem("avatar", data1.detail.avatar);
            Axios.defaults.headers.common['Authorization'] = "Bearer " + data1.detail.token
            dispatch(login(data1.detail))
        } else {
            {
                openNotificationWithIcon("error", "Error", data1.description)
            }
        }

    }).catch(error => {
        {
            openNotificationWithIcon("error", "Error", error.message)
        }
    })
}

// 注册
function fetchRegister(data,dispatch) {
    Axios.post('/auth/register', {
        userName: data.username,
        password: data.password,
        email: data.email,
        institution: data.institution
    }).then(({data}) => {
        console.log(data)
        var data1 = {}
        data1.code = 200
        data1.detail = {
            "token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJyb290IiwiY3JlYXRlZCI6MTcxNjI3NzkxMjYzOCwiZXhwIjoxNzE2ODgyNzEyfQ.IHzp-ww5lCGMqyUiEWNUFFiPzuUlT8Osasu7La53qfivgqL2w9E78Su3Tbbl3zvxW9awrN1obzPP-6urr8RSAQ",
            "username": "a",
            "avatar": "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" 
        }
        if (data1.code === 200) {
            localStorage.setItem("token", data1.detail.token);
            localStorage.setItem("username", data1.detail.username);
            localStorage.setItem("avatar", data1.detail.avatar);
            Axios.defaults.headers.common['Authorization'] = "Bearer " + data1.detail.token
            dispatch(register(data1.detail)) 
        } else {
            {
                openNotificationWithIcon("error", "Error", data.description)
            }
        }
    }).catch(error => {
        {
            openNotificationWithIcon("error", "Error", error.message)
        }
    })
}