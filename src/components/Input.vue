<template>
  <div>
    <input
      type="text"
      placeholder="abc"
      class="form-control"
      :value="value"
      @input="handleInput"
    />
  </div>
</template>
<script>
export default {
  name: "Input",
  props: ["value"],
  methods: {
    handleInput(e) {
      this.$emit("input", e.target.value);
    },
  },
};
</script>
<style scoped>
</style>