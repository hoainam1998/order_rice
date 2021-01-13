<template>
  <main>
    <Container />
    <DishInfor />
  </main>
</template>
<script>
import Container from '../components/Container'
import DishInfor from '../components/DishInfor'
export default {
  name: "Home",
  components:{
      Container,DishInfor
  }
};
</script>
<style scoped>
    main {
        padding: 1.5rem;
        display: flex;
    }
</style>