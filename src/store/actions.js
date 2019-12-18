
export const actions = {
    pushCart({state,commit}, params) {
        // const pushCart = []
        let oldPrice = state.pushCart.find(item => item.Iid === params.Iid)
        if (oldPrice) {
            commit('addCounter',oldPrice)
        } else {
            commit('addCart',params)
        }
    }
}