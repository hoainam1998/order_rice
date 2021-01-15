import axios from 'axios';
const state = {
    dishes: [],
    selected: false,
    listname: [],
    specificDish: {},
    listDishOrderd: [],
    address: []
}

const getters = {
    getDishes: (state) => (state.dishes),
    getListname: (state) => (state.listname),
    getSelected: (state) => (state.selected),
    getSpecificDish: (state) => (state.specificDish),
    getDishOrdered: (state) => (state.listDishOrderd),
    getAddress: (state) => (state.address)
}

const actions = {
    async setAllDish({ commit }) {
        let res = await axios.get('/dishes.json');
        commit('setAllState', res.data)
    },

    async filterDishes({ commit }, evt) {
        let res = await axios.get('/dishes.json');
        let dishes = res.data;
        if (evt.target.value !== 'all') {
            dishes = res.data.filter(dish => dish.id === parseInt(evt.target.value));
        }
        commit('setAllState', dishes);
    },

    async setListname({ commit }) {
        let res = await axios.get('/dishes.json');
        let listname = res.data.map(dish => ({ id: dish.id, name: dish.name }))
        commit('setListname', listname);
    },

    selectDish({ commit }, id) {
        commit('selectDish', id);
    },

    async setSpecificDish({ commit }, id = undefined) {
        let specificDish = state.dishes[0];
        if (id) {
            specificDish = state.dishes.find(dish => dish.id === id);
        }
        commit('setSpecificDish', specificDish);
    },

    setListOrdered({ commit }, id) {
        if (state.listDishOrderd.findIndex(dish => dish.id === id) === -1) {
            let dish = state.dishes.find(dish => dish.id === id);
            commit('setListOrdered', dish);
        }
    },

    removeItemOrdered({ commit }, id) {
        commit('removeItemOrdered', id);
    },

    updateListOrdered({commit},dish){
        let updated_listDishOrderd=state.listDishOrderd.map(dishItem=>dishItem.id===dish.id?dish:dishItem);
        commit('updatedListOrderd',updated_listDishOrderd)
    },

    async setAddress({ commit }) {
        let address = await axios.get('./address.json');
        commit('setAddress', address.data);
    }
}

const mutations = {
    setAllState: (state, dishes) => (state.dishes = dishes),
    setListname: (state, listname) => (state.listname = listname),
    selectDish: (state, id) => {
        state.dishes = state.dishes.map(dish => dish.id === id ? { ...dish, selected: !dish.selected } : { ...dish, selected: false })
    },
    setSpecificDish: (state, specificDish) => (state.specificDish = specificDish),
    setListOrdered: (state, dish) => {
        state.listDishOrderd.unshift({...dish,soluong:1});
        state.dishes = state.dishes.map(d => d.id === dish.id ?{ ...d, dadat: true }: d)
    },
    removeItemOrdered: (state, id) => {
        state.listDishOrderd = state.listDishOrderd.filter(dish => dish.id !== id);
        state.dishes = state.dishes.map(dish => dish.id === id ? { ...dish, dadat: false } : dish)
    },
    updatedListOrderd:(state,updated_listDishOrderd)=>(state.listDishOrderd=updated_listDishOrderd),
    setAddress: (state, address) => (state.address = address)

}
export default { state, getters, actions, mutations }