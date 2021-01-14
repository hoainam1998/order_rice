<template>
  <section>
    <div class="box">
      <img src="../assets/logo.png" alt="img" />
      <div class="infor">
        <h3>{{dish.name}}</h3>
        <span>{{formatCurrency}}</span>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "DishInfor",
  props: ['dish'],
  computed:{
    formatCurrency(){
      return parseInt(this.dish.gia).toLocaleString('it-IT', {style : 'currency', currency : 'VND'});
    }
  }
};
</script>
<style scoped>
section {
  transition: .5s ease;
}

.box {
  border-radius: 5px;
  width: 300px;
  margin: 0 auto;
  padding: 1rem;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.box img {
  width: 100px;
}

.infor {
  background: white; 
}

.datcom {
    border: none;
    border-radius: 4px;
    background: #3498db;
    outline: none;
    color: white;
    text-transform: capitalize;
    padding: 5px 6px;
}
</style>