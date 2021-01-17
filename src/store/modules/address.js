import axios from 'axios'
const state={
    address: []
}

const getters={
    getAddress: (state) => (state.address)
}

const actions={
    async setAddress({ commit }) {
        let address = await axios.get('./address.json');
        commit('setAddress', address.data);
    }
}

const mutations={
    setAddress: (state, address) => (state.address = address)
}

export default {namespaced: true, state, getters, actions, mutations}