const state={
    customer:{
        ten: "",
        gioi_tinh: "anh",
        sdt: "",
        phuong: "",
        so_nha: "",
        ten_duong: ""
    }
}

const actions={
    setCustomer:({commit},customer)=>{
        commit('setCustomer',customer)
    }
}

const getters={
    getCustomer:(state)=>(state.customer)
}

const mutations={
    setCustomer:(state,customer)=>(state.customer=customer)
}

export default {namespaced: true, state,actions,getters,mutations}