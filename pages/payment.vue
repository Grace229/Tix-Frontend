<template>
<div>
   
    <div class="form">
         <div class="d-flex justify-space-between align-center my-10" style="width: 300px">
       <nuxt-link to="/cart" style="text-decoration: none;">
         <svg xmlns="http://www.w3.org/2000/svg" class="secondary--text icons" style="height: 45px; width: 45px;" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
</svg>
      </nuxt-link>
      
<p class="font-weight-bold text-h5 mt-4"> Payment</p>
    </div>
  <v-form class="mx-md-3">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          sm="12"
        >
          <v-text-field
            v-model="first"
            label="Card number(the 16 digits on the front of your card)"
            outlined
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
            v-model="last"
            label="Expiry date(09/23)"
            outlined
          ></v-text-field>
        </v-col>
           <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
            v-model="first"
            label="CVV(the 3 digits at the back of your card)"
            outlined
          ></v-text-field>
        </v-col>
          <v-col
          cols="12"
          sm="12"
        >
          <v-btn class="button"  @click.stop="openModal()" x-large color="secondary" block>
   Proceed To Payment
  </v-btn>
        </v-col>
        <v-row justify="center">
            <v-dialog v-model="dialog" max-width="360px">
              <v-card class="pa-6" style="border-radius: 16px; background-color: #fff">
                <div class="d-flex justify-end align-center">
                  <v-btn fab color="rgba(168, 168, 168, 0.32)" depressed x-small @click="dialog = false"
                    ><v-icon color="black">mdi-close</v-icon></v-btn
                  >
                </div>
                <div class="d-flex flex-column justify-center align-center">
                 <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" style="width: 172px; height:172px;" viewBox="0 0 20 20" fill="#50C878">
  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
</svg>
                  <v-card-title
                    class="text-h5 grey--text black--text text-center font-weight-bold"
                  >
                 Payment Successful
                  </v-card-title>
                 
                      </div>
              </v-card>
            </v-dialog>
          </v-row>
      </v-row>
    </v-container>
  </v-form>
  </div>
</div>

</template>

<script>
export default {
data(){
    return{
        dialog: false
    }
},
methods:{
  openModal() {
      this.dialog = true;
     
      }
}
}
</script>

<style>
.button:hover{
    background-color: #fc6435 !important;
}
.form{
    width: 500px;
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