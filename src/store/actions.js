
export const actions = {
    pushCart({state,commit}, params){
        // const pushCart = []
       return new Promise((resolve,reject)=>{
            let oldPrice = state.pushCart.find(item => item.Iid === params.Iid)
            if (oldPrice){
                commit('addCounter',oldPrice)
                resolve('当前商品数量+1')
            }else{
                commit('addCart',params)
                resolve('添加商品成功')
            }
        })
    }
}