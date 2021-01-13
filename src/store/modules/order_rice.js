import axios from 'axios';
const state={
    dishes:[],
    selected: ''
};

const getters={
    getDishes:(state)=>(state.dishes),
    getSelected:(state)=>(state.selected)

}

const actions={
    async getAllDish({commit}){
        let res=await axios.get('/dishes.json');
        console.log(res.data);
        commit('setAllState',res.data)
    }
}

const mutations={
    setAllState:(state,dishes)=>{
        state.dishes=dishes;
        state.selected=dishes[0].id
    }
}
export default { state, getters,actions,mutations }