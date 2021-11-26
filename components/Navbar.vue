<template>
<div>
  <v-app-bar
  flat
  outlined
 
>
      <v-list-item class="d-flex justify-space-between">
     <v-list-item-title class="logo">tix.africa</v-list-item-title>
     <v-list-item-title>
       
     </v-list-item-title>
     <div class="mr-15 account">
      <v-menu 
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            color="primary"
            v-bind="attrs"
            v-on="on"
          >Account
            <v-icon>mdi-menu-down</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
          >
            <v-list-item-title>Profile</v-list-item-title>
          </v-list-item>
           <v-list-item
          >
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

     </div>
      <v-list-item-icon class="mx-10 notification">
        <svg xmlns="http://www.w3.org/2000/svg" class="" viewBox="0 0 20 20" fill="#fc6435">
  <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
</svg>
      </v-list-item-icon>
      <nuxt-link to="/cart" style="text-decoration: none;">
         <v-list-item-icon class="mr-10">
            <v-icon color="primary">mdi-cart</v-icon>
            <span>{{ cartQty }}</span>
          </v-list-item-icon>
      </nuxt-link>
          </v-list-item>
   <v-app-bar-nav-icon color="primary" class="icon" @click="drawer = true"></v-app-bar-nav-icon>     
</v-app-bar>
 <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

                      <div class="">
                         <v-icon class="mx-2 mr-13"> mdi-account</v-icon>
      <v-menu 
      class=""
      >
        <template v-slot:activator="{ on, attrs }">
         
          <v-btn
            icon
            color="primary"
            v-bind="attrs"
            v-on="on"
          >Account
            <v-icon>mdi-menu-down</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
          >
            <v-list-item-title>Profile</v-list-item-title>
          </v-list-item>
           <v-list-item
          >
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

     </div>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
</div>
</template>
<script>
export default {
  data: () => ({
      drawer: false,
      group: null,
    }),
    computed: {
    cartQty () {
      return this.$store.getters["carts/getCartQty"];
    }
  },
}
</script>

<style>
.theme--light.v-app-bar.v-toolbar.v-sheet{
  background-color: #fff !important;
}
.v-list-item__title {
  color: #fc6435;
}
.logo{
  font-size: 30px;
  font-weight: 500;
}
.v-btn {
  text-transform: none !important;
  font-size: 20px;
}
@media only screen and (min-width: 600px) {
 .icon{
   display: none;
 }
}
@media only screen and (max-width: 600px) {
 .account{
   display: none;
 }
 .notification{
   display: none;
 }
 .logo{
  font-size: 22px;
  font-weight: 500;
}
}
</style>
