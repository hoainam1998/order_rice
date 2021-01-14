<template>
  <section>
    <select @change="filterdishes($event)">
      <option value="all">All</option>
      <option v-for="item in getListname" :key="item.name" :value="item.id">
        {{ item.name }}
      </option>
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
        <tr
          v-for="dish in getDishes"
          :key="dish.id"
          @click="showDish(dish.id)"
          :class="{ select: dish.selected }"
        >
          <th><img src="../assets/logo.png" alt="img" /></th>
          <td>{{ dish.name }}</td>
          <td>
            {{
              dish.gia.toLocaleString("it-IT", {
                style: "currency",
                currency: "VND",
              })
            }}
          </td>
          <td>
              <input type="checkbox" :checked="dish.dadat" :disabled="dish.dadat" @change="datcom(dish.id)" />
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Contaner",
  computed: mapGetters(["getDishes", "getListname"]),
  methods: {
    ...mapActions([
      "filterDishes",
      "setListname",
      "selectDish",
      "setSpecificDish",
      "setListOrdered",
    ]),
    showDish(id) {
      this.selectDish(id);
      this.$emit("show-infor", id);
    },
    async filterdishes(evt) {
      await this.filterDishes(evt);
      await this.setSpecificDish();
    },
    datcom(id) {
      this.setListOrdered(id);
    },
  },
  async created() {
    await this.setListname();
  }
};
</script>
<style scoped>
input[type="checkbox"] {
  transform: scale(2);
}

.select {
  background-color: #c7ecee;
}
</style>