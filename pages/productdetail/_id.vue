<template>
  <div class="py-0 mb-10 mx-auto" style="max-width: 867px; overflow: hidden">
    <v-row class="mt-md-3">
      <v-col class="pa-0 pa-md-3" cols="12" md="7">
        <v-card elevation="0" class="two-cards" height="max-content"> 
              <img :src="productDetails[0].productImage" aspect-ratio="1"  class="two-cards-sheet" /> 
            
        </v-card>
      </v-col>
      <v-col cols="12" md="5">
        <div
          style="height: 100%"
          class="full-height mt-6 mt-sm-0 d-flex mx-3 mx-sm-0 flex-column justify-space-between"
        >
          <div class="">
            <p
              class="text-h6 font-weight-bold pb-0 mb-0"
              style="line-height: 1.13; letter-spacing: 0.15px"
            >
             {{productDetails[0].productName}}
            </p>
            <p class="primary--text text-h6 font-weight-bold pb-0 mb-0">
              <span>&#8358;</span>{{productDetails[0].productPrice}}
            </p>
          </div>      
  <div class="mt-3">
  <p class="font-weight-bold">Select Size</p>
        <v-select
          :items="sizes"
          v-model="size"
          label="Select Size"
          outlined
        ></v-select>
          <p class="font-weight-bold">Select Colour</p>
          <v-select
          :items="colors"
          v-model="color"
          label="Select Color"
          outlined
        ></v-select>
          </div>
          <div class="mb-5">
            <v-btn
              style="letter-spacing: normal"
              block
              depressed
              height="48px"
              width="100%"
              color="primary"
              class="text-none font-weight-bold body-2 white--text"
              @click="addToCart(productDetails[0])"
              >Add to cart</v-btn
            >
          </div>
        </div>
      </v-col>
    </v-row>

    <v-row justify="center" class="mx-3">
      <v-expansion-panels flat class="elevation-0">
        <v-expansion-panel class="mt-3 elevation-0 borderCard">
          <v-expansion-panel-header class="font-weight-bold"
            >Description</v-expansion-panel-header
          >
          <v-expansion-panel-content>
            <p class="body-2">
              {{productDetails[0].description}}
            </p>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel class="mt-3 elevation-0 borderCard">
          <v-expansion-panel-header class="font-weight-bold"
            >Delivery info</v-expansion-panel-header
          >
          <v-expansion-panel-content> </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel class="mt-3 elevation-0 borderCard">
          <v-expansion-panel-header class="font-weight-bold"
            >Return policy</v-expansion-panel-header
          >
          <v-expansion-panel-content>
            <p class="body-2"></p>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel class="mt-3 elevation-0 borderCard">
          <v-expansion-panel-header class="font-weight-bold"
            >Reviews</v-expansion-panel-header
          >
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
  </div>
</template>

<script>

export default {

//   mounted() {
//     let route = this.$route.params.id;
//     console.log(route);
//     this.getProducts(route);
//   },
  data() {
    return {
      color: '',
      size: '',
      productDetails: [],
       sizes: [ 'S', 'M', 'L', 'XL','XLX'],
       colors: [
            'Blue', 'Black', 'white', 'Red'],
    };
  },
        created(){
        this.productDetails = this.$store.state.products.filter((item)=>{
            return item._id === this.$route.params.id;        
        },
        console.log(this.productDetails)
        );
    },
     computed: {
    cartitem () {
      return this.$store.state.carts.cart
    }
   },
methods: {
   
   
     addToCart (x) {
      let itemExist = false;
      let quantity = null

      //check if item exist
      this.$store.state.carts.cart.forEach((item) => {
        if(item._id === x.id) {
          itemExist = true
          quantity = item.quantity + 1
        }
      })
      if(itemExist) { 

        // remove item if it exist
      let item1 = this.$store.state.carts.cart.filter((item) => {
            return item._id != x.id
        })
 this.$store.commit("carts/setRemoveItemCart", item1)
      // set removed item with its new quantity
      let item = {
        id: x._id,
        img: x.productImage,
        color: this.color,
        size: this.size,
        name: x.productName,
        quantity: quantity,
        unitPrice: x.productPrice,
        subTotal: parseInt(x.productPrice) * quantity
      }
        this.$store.commit("carts/setCart", item)
      } else {
      let item = {
        id: x._id,
        color: this.color,
        size: this.size,
        img: x.productImage,
        name: x.productName,
        quantity: 1,
        unitPrice: x.productPrice,
        subTotal: x.productPrice
      }
              this.$store.commit("carts/setCart", item)
    }
  },
    }
};
</script>

<style scoped>
@media only screen and (min-width: 960px) {
 .price {
    font-family: HelveticaNowDisplay;
    font-size: 18px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.67;
    letter-spacing: normal;
    text-align: left;
    color: #1592e6;
  }
}
.two-cards-sheet {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.two-cards {
  width: 100%;
}
.price {
  font-family: HelveticaNowDisplay;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.67;
  letter-spacing: normal;
  text-align: left;
  color: #1592e6;
}
.v-btn:not(.v-btn--round).v-size--default{
  min-width: 0px !important;
}
</style>
