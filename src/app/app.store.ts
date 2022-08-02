import { createStore } from 'vuex'

const store = createStore({
    state: {
        name: "Name",
        loading: false
    },
    // getters:{
    //     name(state){
    //         return'^^ ${state.name}'
    //     }
    // },
    mutations: {
        setName(state, data) {
            state.name = data
        },
        setLoading(state, data) {
            state.loading = data
        }
    },
    actions: {
        // getName(context){
        //     const name = 'webDev'
        //     context.commit('setName',name)
        //     console.log(context)
        // }
        // getName({ commit }) {
        //     const name = ' WebDev'
        //     commit('setName', name)
        // }
        getName({ commit }) {
            commit('setLoading', true)
            setTimeout(() => {
                const name = "WebDev"
                commit('setName', name)
                commit('setLoading', false)
            }, 2000)
        }
    }
})

export default store 