import {requestGoodsList,requestGoodsCount} from "../../util/request";


const state = {
    list : [],
    total: 0,
    page:1,
}

const mutations = {
    changeList(state,arr){
        state.list=arr;
    },
    changeTotal(state,num){
        state.total=num;
    },
    changePage(state,pageNum){
        state.page=pageNum;
    }
}

const actions = {
    requestList(context){
        requestGoodsCount().then(res=>{
            context.commit("changeTotal",res.data.list[0].total)
        })
        requestGoodsList({page:context.state.page,size:3}).then(res=>{
            if(!res.data.list&&context.state.page>1){
                context.commit("changePage",context.state.page-1)
                context.dispatch("requestList")
                return;
            }
            context.commit("changeList",res.data.list);
        })  
    },
    changePage(context,e){
        context.commit("changePage",e)
    }
}

const getters = {
    list(state){
        return state.list
    },
    total(state){
        return state.total
    },
    page(state){
        return state.page
    }
}

export default {
    state,
    mutations,
    actions,
    getters,
    namespaced:true
}