// 和用户相关的状态管理

import {createSlice} from '@reduxjs/toolkit'
import {request} from '@/utils'

const userStore = createSlice({
  name: 'user',
  initialState: {
    token: localStorage.getItem('token') || ''
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload
      localStorage.setItem('token', action.payload)
    }
  }
})

// 解构actionCreate
const {setToken} = userStore.actions

// 获取reducer函数

const userReducer = userStore.reducer

// 异步方法 完成登陆获取token
const fetchLogin = (loginForm) => {
    return async (dispatch) => {
        const res = await request.post('/authorizations', loginForm)
        dispatch(setToken(res.data.token))
    }
}

export {fetchLogin, setToken}

export default userReducer