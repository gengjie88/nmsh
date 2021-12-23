import axios from "axios";

// axios.defaults.baseURL = 'http://10.22.104.89:49823' //默认请求地址
axios.defaults.baseURL = 'http://10.22.104.141:9000' //默认请求地址
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

axios.interceptors.response.use((response) => {
    if (response.status === 200) {
        return response.data
    }
    return '请检查网络请求'
})
export default axios;