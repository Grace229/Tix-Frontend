<template>
  <div>
      <div class="greyLight" style="height: 100%;">

<v-row style="width:80%;" class="container mx-auto mr-20">
          <h2 class="font-weight-bold text-h5 my-5" v-if="this.$store.state.carts.cart.length > 0">Cart ({{ totalQuantity }} items)</h2>

  <v-col
v-for="cart in cartitems" :key="cart.id"
          cols="12"
        >
          <v-card
 

          >
            <div  class="d-flex flex-no-wrap" >
                        <div class="my-8" >
            <img class='bigpic' :src="cart.img" />
            </div>
              <div class="mt-10 ml-5" style="width: 150px;">
 <p class=" text-h6"><b>{{ cart.name}}</b></p>
 <svg xmlns="http://www.w3.org/2000/svg" class="trash h-5 w-5 mt-5 " viewBox="0 0 20 20" fill="#fc6435">
  <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
</svg>  <nuxt-link to='' @click.native="remove(cart)" class="font-weight-bold" style="text-decoration: none;">Remove</nuxt-link>
              </div>
                <div class="border my-10 mx-10">
              </div>
               <div class="d-flex justify-space-between align-center">
              <v-btn
                outlined
                width="42px"
                height="42px"
                >{{ cart.quantity }}</v-btn
              >
            </div>
            <div class="border my-10 mx-10">
              </div>
              <div class="d-flex align-center" style="width:50px;">
              <v-btn
                outlined
                width="42px"
                height="42px"
                >{{ cart.color }}</v-btn
              >
            </div>
            <div class="border my-10 mx-10">
              </div>
              <div class="d-flex align-center">
              <v-btn
                outlined
                width="42px"
                height="42px"
                >{{ cart.size }}</v-btn
              >
            </div>
            <div class="border my-10 mx-10">
              </div>
              <div class="d-flex justify-space-between align-center">
                <p>₦ {{ cart.unitPrice }}</p>
              </div>
                <div class="border my-10 mx-10">
              </div>
               <div class="d-flex justify-space-between align-center">
                <p>₦ {{  cart.subTotal }}</p>
              </div>
            </div>
          </v-card>
        </v-col>
</v-row>


        <div class="text-right mr-1 my-5" v-if="this.$store.state.carts.cart.length > 0">
  <p class="font-weight-bold text-h5">Total:	₦ {{ totalPrice }} </p>
 Shipping fees not included yet <br> 
 Customs Fee not included yet
  </div>
    <div class='cartActions'>
   <v-container>
   <v-col lg="12" md="12" xl="12" xs="12">
   <v-row align-h="end" class="mr-5">
  <div class='d-lg-flex d-sm-flex flex-sm-row flex-lg-row d-xs-block mr-5'>
    <v-btn class="add1 mb-2 mx-5" to="/">CONTINUE SHOPPING</v-btn>
    <v-btn to="/checkout" class="add">PROCEED TO CHECKOUT</v-btn>
  </div>
  </v-row>
  </v-col>
  </v-container>
  </div>
        </div>

    </div>

</template>

<script>
export default {
    props: ["cart"],
  data(){
return{
}
  },
 computed: {
   
    cartitems () {
      return this.$store.state.carts.cart
    },
    quantity () {
        return this.$store.state.carts.cart.quantity
    },
    subTotal () {
       return this.$store.state.carts.cart.subTotal
    },
     
    totalQuantity () {
      return this.$store.getters["carts/getCartQty"]
    },
    // get cart total price
    totalPrice () {
      return this.$store.getters["carts/getTotalPrice"]
    },
  },
  methods:{
      remove (x) {
        let item = this.cartitems.filter((item) => {
            return item.id != x.id
        })
        this.$store.commit("carts/setRemoveItemCart", item)
        this.$router.go()
      },
  }
}
</script>
<style scoped>
body{
  background-color: #f5f5f5;
}
.content {
  margin-left: 20px;
  margin-right: 10px;
  text-align: center;
  border-right: 1px solid gray;
}
.border{
   border-right: 1px solid gray;
   margin-left: 0;
   margin-right: 0;
}
.bigpic {
  width: 100px;
  height: 100px;
  margin-left: 20px;
}
.details {
  width: 100%;
}
.trash {
 width: 25px;
  height: 20px;
  
}
.cartActions {
  background-color: white;
  padding: 2vmin;
  margin-top: 2vmin
}


.add {
  width: auto;
  color: #fc6435;
  border: none;
  border-radius: 4px;
  margin-bottom: 3rem;
  box-shadow: 0px 0px 10px 0px #e5e5e5;
  height: 48px;
  font-weight: bold
}

.add1 {
  width: 150%;
  background: #fff;
  color: #ff9900;
  border: none;
  border-radius: 4px;
  box-shadow: 0px 0px 10px 0px #e5e5e5;
  height: 48px;
  font-weight: bold;
}

.add1:focus {
  outline: none
}

.add:hover {
  background: #ffad33;
  color: white;
}


@media only screen and (min-width: 768px) {

.cartActions {
  background-color: white;
  padding: 2vmin;
  margin-top: 2vmin
}
.add {
  width: auto;
  color: #fff;
  background-color: #038595 !important;
  border: none;
  border-radius: 4px;
  box-shadow: 0px 0px 10px 0px #e5e5e5;
  height: 48px;
  font-weight: bold
}

.add1 {
  width: auto;
  color: #fff;
  background-color: #038595 !important;
  border: none;
  border-radius: 4px;
  box-shadow: 0px 0px 10px 0px #e5e5e5;
  height: 48px;
  font-weight: bold;
}

.add1:hover {
   background: #ffad33 !important;
  color: white;
}

.add:hover {
  background: #ffad33 !important;
  color: white;
}
.fa-trash {
  color: #f68b1e;
  font-size: 13px;
  margin-right: 1vmin;
  margin-left: 2vmin
}
}
</style>