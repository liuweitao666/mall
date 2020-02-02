import axios from 'axios'
// import Toast from "mint-ui/packages/toast/src/toast";

export function request(config) {
    const instance = axios.create({
        baseURL:'http://123.207.32.32:8000/api/hy',
        timeout:10000
    })

    // instance.interceptors.request.use(config=>{
    //     Toast({
    //         message: '操作成功',
    //         iconClass: 'icon icon-success'
    //     });
    //     // return config
    // },err=>{
    //     console.log(err)
    // })
    return instance(config)
}
export function request2(config) {
    const instance = axios.create({
        baseURL:'http://106.54.54.237:8000/api/hy',
        timeout:10000
    })

    // instance.interceptors.request.use(config=>{
    //     Toast({
    //         message: '操作成功',
    //         iconClass: 'icon icon-success'
    //     });
    //     // return config
    // },err=>{
    //     console.log(err)
    // })
    return instance(config)
}