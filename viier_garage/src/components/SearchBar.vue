<template>
  <input
    type="text"
    v-model="searchQuery"
    placeholder="Pesquise Aqui..."
    @input="emitSearchQuery"
  />
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
    };
  },
  methods: {
    emitSearchQuery() {
      this.$emit('input', this.searchQuery);
    },
  },
};
</script>

<style scoped>
input {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
}
</style>
