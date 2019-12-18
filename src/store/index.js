import Vue from 'vue'
import Vuex from 'vuex'
import {mutations} from "./mutations"
import {actions} from "./actions";

Vue.use(Vuex)

const state = {
  type: 'pop',
  position: false,
  pushCart: []
}
export default new Vuex.Store({
    state,
    getters: {
        // pushCart(state){
        //   return state.pushCart
        // }
    },
    mutations,
    actions,
    modules: {}
})
