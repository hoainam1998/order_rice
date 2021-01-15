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
            <tr>
              <th><img src="../assets/logo.png" alt="logo" /></th>
              <td>Mark</td>
              <td>Otto</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
          </tbody>
        </table>
        <div class="total">
          <span>Tong thanh tien: </span><span>10000 d</span>
        </div>
        <div class="address">
          <span>Dia chi giao hang: </span
          ><span>so 01, hung vuong, quy nhon, bind dinh</span>
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
    <router-link to="/" type="button" class="btn btn-primary">&larr; Dut tiep</router-link>
  </main>
</template>
<script>
// import { mapGetters } from "vuex";
export default {
  name: "Success",
  // computed:mapGetters(['getDishOrdered'])
  data() {
    return {
      tongthanhtien: 0,
    };
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
.address {
  padding: 0.5rem;
  border-radius: 4px;
  margin: 0.5rem 0;
  color: white;
}

.total {
  background: #7ed6df;
}

.address {
  background: #ff7979;
}

.total span:last-child {
  font-weight: bold;
  color: black;
}

.btn-primary {
  margin: .5rem 0;
}
</style>