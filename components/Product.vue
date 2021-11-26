<template>
  <div>
      <v-container fluid>
      <v-row dense>
            <v-col
        cols="12"
        xs="12" md="4" sm="6" lg="3"
        v-for="item in items" :key="item._id"
        >
        <v-card
    class="mx-auto"
    max-width="300"
  >
    <v-img
      :src="item.productImage"
      height="200px"
    ></v-img>

    <v-card-title>
      {{item.productName}}
    </v-card-title>
    <v-card-actions>
      <p class="font-weight-bold text-h6 my-3"><span>&#8358;</span> {{item.productPrice}}</p>
      <v-spacer></v-spacer>
<nuxt-link
              :to="'/productdetail/' + item._id"
              class="font-weight-bold body-2 mr-4"
              style="text-decoration: none;"
              >
             <v-btn
        color="orange lighten-2"
        text
      >
        Buy Now
      </v-btn>

              </nuxt-link
            >
     
    </v-card-actions>
  </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  props: ['items'],
data: () => ({
      show: false,
    }),
}
</script>

<style>

</style>