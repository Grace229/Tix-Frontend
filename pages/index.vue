<template>
  <div>
    <div class="d-flex justify-space-between align-center my-10" style="width: 300px">
       <nuxt-link to="/cart" style="text-decoration: none;">
         <svg xmlns="http://www.w3.org/2000/svg" class="secondary--text ml-5" style="height: 45px; width: 45px;" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
</svg>
      </nuxt-link>
      
<p class="font-weight-bold text-h5 mt-4">BTS Merchandise</p>
    </div>
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
    this.getProducts()    
    },
    methods:{
     async getProducts(){
let response = await this.$axios.$get('https://getproducts-api.herokuapp.com/api/v1/product');
        this.products = response.allProducts
          this.$store.commit("setProduct", response.allProducts);
     }
    }
}
</script>

<style>

</style>