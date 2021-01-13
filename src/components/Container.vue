<template>
  <section>
     <select v-model="selected">
      <option v-for="dish in  getDishes" :key="dish.id" :value="dish.id">{{dish.dish}}</option>
    </select> 
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Hinh anh</th>
          <th scope="col">Ten phan com</th>
          <th scope="col">Gia</th>
          <th scope="col">Dat com</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="dish in getDishes" :key="dish.id">
          <th><img src="../assets/logo.png" alt="img" /></th>
          <td>{{ dish.dish }}</td>
          <td>
            {{
              dish.gia.toLocaleString("it-IT", {
                style: "currency",
                currency: "VND",
              })
            }}
          </td>
          <td><input type="checkbox" name="datcomg" /></td>
        </tr> 
      </tbody>
    </table>
  </section>
</template>
<script>
import { mapActions , mapGetters} from "vuex";
export default {
  name: "Contaner",
  data(){
    return{
      selected: ''
    }
  },
  computed: {
    ...mapGetters(['getDishes','getSelected'])
  },
  methods: {
    ...mapActions(["getAllDish"]),
  },
  async created() {
    await this.getAllDish();
    let selected = this.$store.getters.getSelected;
    this.selected=selected;
  },
  mounted(){
     
     console.log('mounted');
  }
};
</script>
<style scoped>
section {
  flex: 7;
}

img {
  width: 50px;
}

td {
  vertical-align: middle;
}

input[type="checkbox"] {
  transform: scale(2);
}
</style>