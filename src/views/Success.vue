<template>
  <main>
    <div class="box_payment">
      <div class="box_header">
        <h3>Com</h3>
      </div>
      <div class="box_content">
        <table class="table table-success table-striped">
          <thead>
            <tr>
              <th scope="col">Hinh anh</th>
              <th scope="col">Ten</th>
              <th scope="col">Gia</th>
              <th scope="col">So luong</th>
              <th scope="col">Thanh tien</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="dish in getDishOrdered" :key="dish.id">
              <th><img src="../assets/logo.png" alt="logo" /></th>
              <td>{{ dish.name }}</td>
              <td>{{ formatCurrency(dish.gia) }}</td>
              <td>{{ dish.soluong }}</td>
              <td :data-total="dish.soluong * dish.gia" class="sub_total">
                {{ formatCurrency(dish.gia * dish.soluong) }}
              </td>
            </tr>
          </tbody>
        </table>
        <div class="total">
          <span>Tong thanh tien: </span
          ><span>{{ formatCurrency(tongthanhtien) }}</span>
        </div>
        <div class="inforCustomer">
          <span v-for="infor in formatInforCustomerAddress" :key="infor.name"
            >{{ infor.name + ": " + infor.value }}
          </span>
        </div>
      </div>
      <div class="box-footer">
        <p>Cam on quy khach da ung ho</p>
        <ul>
          <li>Dia chi: so 01, Duong Hung Vuong, TP.Quy Nhon, T.Bind Dinh</li>
          <li>SDT: 098654321</li>
          <li>Website: http://localhost:8080</li>
        </ul>
      </div>
    </div>
    <router-link to="/" type="button" class="btn btn-primary"
      >&larr; Dut tiep</router-link
    >
  </main>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Success",
  computed: {
    ...mapGetters("order_rice", ["getDishOrdered"]),
    formatInforCustomerAddress() {
      let customer = this.$store.getters["customer/getCustomer"];
      let address = "";
      let ten = customer.gioi_tinh + " " + customer.ten;
      let sdt = customer.sdt;
      let arrInfor = [
        { name: "Ten", value: ten },
        { name: "SDT", value: sdt },
      ];
      Object.keys(customer).forEach(function (fieldname) {
        if (
          fieldname === "so_nha" ||
          fieldname === "ten_duong" ||
          fieldname === "phuong"
        ) {
          let newFieldname = fieldname.split("_").join(" ");
          newFieldname =
            newFieldname.charAt(0).toUpperCase() +
            newFieldname.slice(1, newFieldname.length);
          let newPairFieldname_value =
            newFieldname + "." + customer[`${fieldname}`];
          address += newPairFieldname_value + ", ";
        }
      });

      address += "TP.Quy Nhon,T.Bind Dinh";
      arrInfor.push({ name: "Dia chi giao hang", value: address });
      console.log(arrInfor);
      return arrInfor;
    },
  },
  data() {
    return {
      tongthanhtien: 0,
    };
  },
  methods: {
    ...mapActions("order_rice", ["removeAllItemOrdered"]),
    formatCurrency(gia) {
      return gia.toLocaleString("it-IT", {
        style: "currency",
        currency: "VND",
      });
    },
  },
  mounted() {
    let tongthanhtien = 0;
    document.querySelectorAll(".sub_total").forEach(function (item) {
      tongthanhtien += parseInt(item.dataset.total);
      console.log(tongthanhtien);
    });

    this.tongthanhtien = tongthanhtien;
  },
  beforeDestroy() {
    this.removeAllItemOrdered();
  },
};
</script>
<style scoped>
main {
  width: 50%;
  margin: 2.5rem auto;
}

.box_payment {
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  border-radius: 5px;
  overflow: hidden;
}

.box_header {
  background: #ffbe76;
  text-align: center;
}

.box-footer {
  background: #ffbe76;
  color: black;
}

.box-footer p {
  text-align: center;
  font-size: 20px;
  margin: 0;
  font-weight: bold;
}

.box-footer ul {
  list-style: none;
  margin: 0;
  padding: 0.5rem 1rem;
  font-weight: 500;
}

table {
  margin: 0;
}

.box_content {
  max-height: 400px;
  overflow: auto;
}

img {
  width: 50px;
}

.total,
.inforCustomer {
  padding: 0.5rem;
  border-radius: 4px;
  margin: 0.5rem 0;
  color: white;
}

.total {
  background: #7ed6df;
}

.inforCustomer {
  background: #ff7979;
}

.total span:last-child {
  font-weight: bold;
  color: black;
}

.btn-primary {
  margin: 0.5rem 0;
}

td:nth-child(2),
.inforCustomer span {
  text-transform: capitalize;
}

.inforCustomer span {
  display: block;
}
</style>