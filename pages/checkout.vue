<template>
<div>
   
    <div class="form">
         <div class="d-flex justify-space-between align-center my-10" style="width: 300px">
       <nuxt-link to="/cart" style="text-decoration: none;">
         <svg xmlns="http://www.w3.org/2000/svg" class="secondary--text icons" style="height: 45px; width: 45px;" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
</svg>
      </nuxt-link>
      
<p class="font-weight-bold text-h5 mt-4"> Checkout</p>
    </div>
  <v-form class="mx-md-3">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
            v-model="first"
            label="First Name"
            outlined
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
            v-model="last"
            label="Last Name"
            outlined
          ></v-text-field>
        </v-col>
           <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
            v-model="first"
            label="Email"
            outlined
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
            v-model="last"
            label="Phone Number"
            outlined
          ></v-text-field>
        </v-col>
           <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
            v-model="first"
            label="Country"
            outlined
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
            v-model="last"
            label="City"
            outlined
          ></v-text-field>
        </v-col>
           <v-col
          cols="12"
          sm="12"
        >
          <v-text-field
            v-model="first"
            label="House Address"
            outlined
          ></v-text-field>
        </v-col>
          <v-col
          cols="12"
          sm="12"
        >
          <v-btn class="button" to="/payment" x-large color="secondary" block>
   Proceed To Payment
  </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
  </div>
</div>

</template>

<script>
export default {

}
</script>

<style>
.button:hover{
    background-color: red !important;
}
.form{
    width: 700px;
    margin-left: auto;
    margin-right: auto; 
}
.icons:hover{
  color: #fc6435 !important;
}
@media only screen and (max-width: 660px) {
   .form{
    width: 380px;
    margin-left: auto;
    margin-right: auto;
} 
}
</style>