import { createStore} from 'vuex'

const store = createStore({
    state:{
        name:"Name"
    },
    // getters:{
    //     name(state){
    //         return'^^ ${state.name}'
    //     }
    // },
    mutations:{
        setName(state,data){
            state.name = data
        }
    },
    actions:{
        getName(context){
            const name = 'webDev'
            context.commit('setName',name)
        }
    }
})

export default store 