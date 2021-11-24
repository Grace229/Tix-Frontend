<template>
<v-app>

 <v-main>
    <Navbar />
 <nuxt />
 </v-main>
</v-app>
 
</template>

<script>
import Navbar from '../components/Navbar.vue'
export default {
components:{
  Navbar,
}
}
</script>
