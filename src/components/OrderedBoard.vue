<template>
<section>
  <div v-if="getDishOrdered.length > 0">
    {{showAddress(true)}}
    <table class="table table-striped" id="listordered">
      <thead>
        <tr>
          <th scope="col">Hinh</th>
          <th scope="col">Ten phan com</th>
          <th scope="col">Gia</th>
          <th scope="col">So luong</th>
          <th scope="col">Thanh tien</th>
          <th scope="col">Huy dat</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="dish in getDishOrdered" :key="dish.id">
          <th><img src="../assets/logo.png" alt="img" /></th>
          <td>{{ dish.name }}</td>
          <td>{{ formatCurrency(dish.gia) }}</td>
          <td> <input type="number" class="form-control" :value="dish.soluong" @change="updateSoluong($event,dish)" max="20"/></td>
          <td :data-total="dish.gia*dish.soluong" class="total">{{formatCurrency(dish.gia*dish.soluong)}}</td>
          <td>
            <button
              type="button"
              class="btn btn-outline-warning"
              @click="removeItemOrdered(dish.id)"
            >
              Huy dat
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <span><span>Tong thanh tien: </span><span>{{formatCurrency(tongthanhtien)}}</span></span>
  </div>
  <div v-else>{{showAddress(false)}}</div>
  </section>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "OrderedBoard",
  props: ['showAddress'],
  computed: mapGetters(["getDishOrdered"]),
  data(){
    return {
      tongthanhtien:0
    }
  },
  methods: {
    ...mapActions(["removeItemOrdered","updateListOrdered"]),
    formatCurrency(gia) {
      return parseInt(gia).toLocaleString("it-IT", {
        style: "currency",
        currency: "VND",
      });
    },
    updateSoluong(event,dish){
      let updatedish={...dish,soluong:parseInt(event.target.value)}
      this.updateListOrdered(updatedish);
    }
  },
  updated(){
    let tds=document.querySelectorAll('.total')
    let mainTotal=0;
    for(let td of tds){
      mainTotal+=parseInt(td.dataset.total);
    }
    this.tongthanhtien=mainTotal
  }
};
</script>
<style scoped>
</style>