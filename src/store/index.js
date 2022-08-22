import Vue from 'vue'
import Vuex from 'vuex'
import blockchainApi from "@/api/api_blockchain"

Vue.use(Vuex)
/**
 * 全局存储模块
 */
export default new Vuex.Store({
    state:{
        // 区块链列表缓存
        blockchainList:[]
    },
    getters:{
        getBlockChainById: state => id => {
            return state.blockchainList.find(item => item.id === id)
        },
        getBlockChainList: state => {
            return state.blockchainList
        }
    },
    mutations:{
        obtainBlockchainList(state){
            return state.blockchainList
        },
        updateBlockchainList(state,list){
            state.blockchainList = list
        }
    },
    actions:{
        // 第一个参数是vuex的上下文对象，可以直接调用commit或者dispatch方法
        loadBlockChainList(context){
            //加载区块链数据
            blockchainApi.PAGE({
                pageNum: 1,
                pageSize: 1500
            }).then(res => {
                context.commit("updateBlockchainList", res.list)
            })
        }

    }
})
