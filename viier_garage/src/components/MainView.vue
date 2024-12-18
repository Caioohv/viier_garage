<template>
  <div>
    <SearchBar @input="handleSearch" />
    <CategoryFilter @change="handleFilterChange" />
    <ItemList :items="filteredItems" />
  </div>
</template>

<script>
import SearchBar from './SearchBar.vue';
import CategoryFilter from './CategoryFilter.vue';
import ItemList from './ItemList.vue';

export default {
  components: {
    SearchBar,
    CategoryFilter,
    ItemList,
  },
  data() {
    return {
      items: [
        { id: 1, name: 'Projetor Z7', category: 'Lâmpadas', description: 'Projetor de alta qualidade', link: '#' },
        { id: 2, name: 'Shocklight S14', category: 'Lâmpadas', description: 'Farol LED potente', link: '#' },
        { id: 3, name: 'Chave de Fenda XYZ', category: 'Ferramentas', description: 'Ferramenta essencial', link: '#' },
        // Adicione mais itens conforme necessário
      ],
      searchQuery: '',
      selectedCategory: '',
    };
  },
  computed: {
    filteredItems() {
      return this.items.filter(item =>
        item.name.toLowerCase().includes(this.searchQuery.toLowerCase()) &&
        (this.selectedCategory === '' || item.category === this.selectedCategory)
      );
    },
  },
  methods: {
    handleSearch(query) {
      this.searchQuery = query;
    },
    handleFilterChange(category) {
      this.selectedCategory = category;
    },
  },
};
</script>

<style scoped>
/* Adicione estilos adicionais aqui, se necessário */
</style>
