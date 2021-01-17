import Vue from 'vue'
import Vuex from 'vuex'
import order_rice from './modules/order_rice'
import address from './modules/address'
import customer from './modules/customer'

Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        order_rice,
        address,
        customer
    }
})