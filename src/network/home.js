import {request,request2} from "./requset"

export function getHomemultidata() {
    const Homemultidata = request({
        url: '/home/multidata'
    })
    return Homemultidata
}

export function getGoods(type,page) {
    const Goods=request2({
        url:'/home/data',
        params:{
            type,
            page
        }
    })
    return Goods
}