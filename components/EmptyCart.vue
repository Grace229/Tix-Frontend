<template>
  <div>
       <div class="d-flex  align-center mt-10">
<svg xmlns="http://www.w3.org/2000/svg" class="secondary--text cart" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
</svg>
</div>
  <h4 class="text-center mb-8">Your cart is empty!</h4>
  <div class="d-flex add1 align-center ">
      <v-btn color="secondary" class="shop mb-2 mx-5 mt-10 white--text" to="/">START SHOPPING</v-btn>

  </div>
  
  </div>
</template>

<script>
export default {
}
</script>

<style>
.add1{
  width: 200px;
    margin-left: auto;
  margin-right: auto;
}
.cart{
  width: 250px;
  height: 250px;
  margin-left: auto;
  margin-right: auto;
}
.shop:focus{
  background: #fc6435 !important;
}
</style>