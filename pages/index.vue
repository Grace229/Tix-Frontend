<template>
  <div>
  <productList :items="products" />
  </div>
</template>

<script>
import productList from '../components/Product.vue'
export default {
components: {
  productList,
},
data: () => ({
     products: [],
    }),
  async mounted() {
        let response = await this.$axios.$get('https://getproducts-api.herokuapp.com/api/v1/product');
        this.products = response.allProducts
          this.$store.commit("setProduct", response.allProducts);
    }
}
</script>

<style>

</style>