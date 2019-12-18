

export const mutations ={
    getGoods(state, type) {
        state.type = type
    },
    changeposition(state, type) {
        state.position = type
        // console.log('chufa')
    },
    addCart(state,params){
        state.pushCart.push(params)
    },
    addCounter(state,counter){
        counter.count++
    }

}