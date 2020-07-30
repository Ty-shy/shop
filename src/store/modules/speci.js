import { requestSpecsList } from "../../util/request"

const state = {
    list:[]
}

const mutations ={
    changeList(state,arr){
        arr.forEach(item=>{
            item.attrs=JSON.parse(item.attrs)
        })
        state.list=arr;
    }
}

const actions = {
    requestList(context){
        requestSpecsList().then(res=>{
            context.commit('changeList',res.data.list)
        })
    }
}

const getters = {
    list(state){
        return state.list 
    }
}

export default {
    state,
    mutations,
    actions,
    getters,
    namespaced:true
}