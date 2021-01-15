<template>
  <div class="address_box">
    <div v-if="show">
      <form @submit.prevent="submitDatcom">
        <div class="alert alert-danger" role="alert" v-if="err.length > 0">
          <ul class="listErr">
            <li v-for="(err, index) in err" :key="index" v-color="color">
              {{ err }}
            </li>
          </ul>
        </div>
        <div>
          <label>Phuong:</label>
          <select class="form-select mb-3" v-model="address.phuong">
            <option
              v-for="(address, index) in getAddress"
              :key="index"
              :value="address.name"
            >
              {{ address.name }}
            </option>
          </select>
        </div>
        <div class="mb-3">
          <label class="form-label">So nha:</label>
          <input type="text" class="form-control" v-model="address.so_nha" />
        </div>
        <div class="mb-3">
          <label class="form-label">Ten duong</label>
          <input type="text" class="form-control" v-model="address.ten_duong" />
        </div>
        <button type="submit" class="btn btn-primary w-100">Dat com</button>
      </form>
    </div>
    <Input v-model="color" />{{color}}
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import Input from './Input';
export default {
  name: "Address",
  components: {
    Input
  },
  data() {
    return {
      address: {
        phuong: "",
        so_nha: "",
        ten_duong: "",
      },
      address1: 'hoai nam de thuong',
      err: [],
      color: "#e74c3c",
    };
  },
  directives: {
    color: {
      bind: function (el, binding) {
        el.style.color = binding.value;
        console.log(111)
      },
      inserted: function (el, binding) {
        el.style.color = binding.value;
        console.log(222);
      },
    },
  },
  props: ["show"],
  computed: mapGetters(["getAddress"]),
  methods: {
    ...mapActions(["setAddress"]),
    submitDatcom() {
      let err = [];
      Object.keys(this.address).forEach((fieldname) => {
        if (this.address[`${fieldname}`] === "") {
          let strs = fieldname.split("_").join(" ");
          let newstrs =
            strs.charAt(0).toUpperCase() + strs.slice(1, strs.length);
          err.push(newstrs + " rong");
        }
      });

      if (err.length !== 0) {
        this.err = err;
      } else {
        location.href = "#/success";
      }
    }
  },
  async created() {
    await this.setAddress();
    this.address.phuong = this.$store.getters.getAddress[0].name;
  },
};
</script>
<style scoped>
.address_box {
  padding: 2rem;
}

form div {
  display: flex;
}

label {
  flex: 3;
}

input,
select {
  flex: 7;
}

.listErr {
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>
