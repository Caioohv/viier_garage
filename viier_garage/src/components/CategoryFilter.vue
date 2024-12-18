<template>
  <div>
    <label v-for="category in categories" :key="category">
      <input
        type="radio"
        :value="category"
        v-model="selectedCategory"
        @change="emitCategory"
      />
      {{ category }}
    </label>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: ['Lâmpadas', 'Ferramentas', 'Acessórios', 'Outros'], // Categorias padrão
      selectedCategory: '',
    };
  },
  methods: {
    emitCategory() {
      this.$emit('change', this.selectedCategory);
    },
  },
};
</script>

<style scoped>
label {
  margin-right: 10px;
}
input[type="radio"] {
  margin-right: 5px;
}
</style>
