<template>
  <div>
    <div v-if="items.length === 0">Nenhum item encontrado.</div>
    <div v-else>
      <div v-for="item in items" :key="item.id" class="item">
        <h3>{{ item.name }}</h3>
        <p>{{ item.description }}</p>
        <a :href="item.link" target="_blank">Comprar</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.item {
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
h3 {
  margin: 0 0 5px;
}
a {
  color: #007bff;
  text-decoration: none;
}
</style>
