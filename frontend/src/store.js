import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        cartRef: null,
    },

    mutations: {
        saveCartRef: (state, cartRef) => {
            state.cartRef = cartRef;
        }
    },

    actions: {

    },

    getters: {
        getCart: (state) => {             // remember these are cached
            return state.cartRef;
        }
    }

})
