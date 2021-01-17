<template>
  <div class="address_box">
    <div v-if="show">
      <form @submit.prevent="submitDatcom">
        <div class="group_radion_button">
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="gender"
              checked
              value="anh"
              v-model="customer.gioi_tinh"
            />
            <label class="form-check-label"> Anh </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="gender"
              value="chi"
              v-model="customer.gioi_tinh"
            />
            <label class="form-check-label"> Chi </label>
          </div>
        </div>
        <div class="mb-3">
          <label class="form-label">Ten:</label>
          <input type="text" class="form-control" v-model="customer.ten" />
        </div>
        <div class="mb-3">
          <label class="form-label">SDT:</label>
          <input type="text" class="form-control" v-model="customer.sdt" />
        </div>
        <div class="alert alert-danger" role="alert" v-if="err.length > 0">
          <ul class="listErr">
            <li v-for="(err, index) in err" :key="index" v-color="color">
              {{ err }}
            </li>
          </ul>
        </div>
        <div>
          <label>Phuong:</label>
          <select class="form-select mb-3" v-model="customer.phuong">
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
          <input type="text" class="form-control" v-model="customer.so_nha" />
        </div>
        <div class="mb-3">
          <label class="form-label">Ten duong:</label>
          <input
            type="text"
            class="form-control"
            v-model="customer.ten_duong"
          />
        </div>
        <button type="submit" class="btn btn-primary w-100">Dat com</button>
      </form>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "CustomerInfor",
  data() {
    return {
      customer: {},
      err: [],
      color: "#e74c3c",
    };
  },
  directives: {
    color: {
      bind: function (el, binding) {
        el.style.color = binding.value;
      },
    },
  },
  props: ["show"],
  computed: mapGetters("address", ["getAddress"]),
  methods: {
    ...mapActions("address", ["setAddress"]),
    ...mapActions("customer", ["setCustomer"]),
    submitDatcom() {
      let err = [];
      Object.keys(this.customer).forEach((fieldname) => {
        if (this.customer[`${fieldname}`] === "") {
          let strs = fieldname.split("_").join(" ");
          let newstrs =
            strs.charAt(0).toUpperCase() + strs.slice(1, strs.length);
          err.push(newstrs + " rong");
        }
      });

      if (parseInt(this.customer.sdt).toString() === "NaN") {
        err.push("SDT phai la so");
      }else if(this.customer.sdt.length<10 || this.customer.sdt.length >10){
        err.push('SDT khong hop le')
      }

      if(parseInt(this.customer.so_nha).toString()==='NaN'){
        err.push('So nha phai la so');
      }

      if (err.length !== 0) {
        this.err = err;
      } else {
        this.setCustomer(this.customer);
        location.href = "#/success";
      }
    },
  },
  async created() {
    await this.setAddress();
    this.customer = this.$store.getters["customer/getCustomer"];
    this.customer.phuong = this.$store.getters["address/getAddress"][0].name;
  }
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

input[type="text"],
select {
  flex: 7;
}

.listErr {
  list-style: none;
  padding: 0;
  margin: 0;
}

.group_radion_button {
  display: flex;
}

.group_radion_button div {
  flex: 5;
}

td {
  vertical-align: middle;
  text-align: center;
}
</style>
