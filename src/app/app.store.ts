import { createStore} from 'vuex'

const store = createStore({
    state:{
        name:"WebDev"
    },
    getters:{
        name(state){
            return'^^ ${state.name}'
        }
    }
})

export default store 