import axios from "axios";

let api;
console.log('process.env.NODE_ENV', process.env.NODE_ENV)

if (process.env.NODE_ENV === 'production') {
  // 生产环境api接口地址
  api = {
    apiURL: '/',
    publicPath: '/',
    apiPath: '/',
    staticPath: '/',
  }
} else if (process.env.NODE_ENV === 'development') {
  // 开发环境
  api = {
    apiURL: '/',
    publicPath: '/',
    apiPath: 'http://localhost:3000',
    staticPath: '/',
  }
}

export function axiosGet (url, params) {
  url = api.apiPath + url
  
  return axios.get(url, params)
    .then((res) => {
    return Promise.resolve (res.data)
    })
    .catch((ERR) => {
      alert(ERR)
      console.log('接口报错', ERR)
    })
}

export function axiosPost (url, params) {
  url = api.apiPath + url
  
  return axios.post(url, params)
    .then((res) => {
      return Promise.resolve (res.data)
    })
    .catch((ERR) => {
      alert(ERR)
      console.log('接口报错', ERR)
    })
}