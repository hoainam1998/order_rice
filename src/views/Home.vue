<template>
  <main>
    <Container v-on:show-infor="showInfor"/>
    <DishInfor v-bind:dish="getSpecificDish"/>
    <OrderedBoard v-bind:showAddress="showAddress"/>
    <CustomerInfor v-bind:show="showaddress" />
  </main>
</template>
<script>
import Container from "../components/Container"
import DishInfor from "../components/DishInfor"
import OrderedBoard from "../components/OrderedBoard"
import CustomerInfor from '../components/CustomerInfor'
import {createNamespacedHelpers} from 'vuex'
const {mapGetters,mapActions} =createNamespacedHelpers('order_rice');
export default {
  name: "Home",
  data(){
    return{
      dish: {},
      showaddress: false
    }
  },
  computed:mapGetters(['getSpecificDish']),
  components: {
    Container,
    DishInfor,
    OrderedBoard,
    CustomerInfor
  },
  methods:{
    ...mapActions(['setAllDish','setSpecificDish']),
    async showInfor(id){
      await this.setSpecificDish(id)
    },
    showAddress(show){
      this.showaddress=show;
      console.log('show address')
    }
  },
  async created(){
    await this.setAllDish();
    await this.setSpecificDish();
  }
};
</script>
<style scoped>
main {
  padding: 1.5rem;
  display: grid;
  grid-template-columns: 70% 30%;
  grid-row-gap: 15px;
}

</style>