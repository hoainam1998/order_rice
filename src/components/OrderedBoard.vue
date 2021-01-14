<template>
    <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Hinh</th>
      <th scope="col">Ten phan com</th>
      <th scope="col">Gia</th>
      <th scope="col">Huy dat</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="dish in getDishOrdered" :key="dish.id">
      <th><img src="../assets/logo.png" alt="img" /></th>
      <td>{{dish.name}}</td>
      <td>22000</td>
      <td><button type="button" class="btn btn-outline-warning" @click="removeItemOrdered(dish.id)">Huy dat</button></td>
    </tr>
  </tbody>
</table>
</template>
<script>
import {mapGetters,mapActions} from 'vuex'
export default {
    name: 'OrderedBoard',
    computed: mapGetters(['getDishOrdered']),
    methods:{
      ...mapActions(['removeItemOrdered']),
    }
}
</script>
<style scoped>

</style>