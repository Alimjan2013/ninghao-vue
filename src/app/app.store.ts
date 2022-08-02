import { createStore} from 'vuex'

const store = createStore({
    state:{
        name:"WebDev"
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
    }
})

export default store 