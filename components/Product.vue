<template>
  <div>
      <v-container fluid>
      <v-row dense>
            <v-col
        cols="12"
        xs="12" md="4" sm="6" lg="3"
        >
        <v-card
    class="mx-auto"
    max-width="300"
  >
    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      height="200px"
    ></v-img>

    <v-card-title>
      Top western road trips
    </v-card-title>

    <!-- <v-card-subtitle>
      1,000 miles of wonder
    </v-card-subtitle> -->

    <v-card-actions>
      <p class="font-weight-bold text-h6 my-3"><span>&#8358;</span> 10000</p>
      <v-spacer></v-spacer>

      <v-btn
        color="orange lighten-2"
        text
      >
        Explore
      </v-btn>

    </v-card-actions>
  </v-card>
        </v-col>
          <v-col
        cols="12"
           xs="12" md="4" sm="6" lg="3"
        >
        <v-card
    class="mx-auto"
    max-width="300"
  >
    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      height="200px"
    ></v-img>

    <v-card-title>
      Top western road trips
    </v-card-title>

    <v-card-subtitle>
      1,000 miles of wonder
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
      >
        Explore
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
        </v-col>
          <v-col
        cols="12"
           xs="12" md="4" sm="6" lg="3"
        >
        <v-card
    class="mx-auto"
    max-width="300"
  >
    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      height="200px"
    ></v-img>

    <v-card-title>
      Top western road trips
    </v-card-title>

    <v-card-subtitle>
      1,000 miles of wonder
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
      >
        Explore
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
        </v-col>
        <v-col
        cols="12"
        xs="12" md="4" sm="6" lg="3"
        >
        <v-card
    class="mx-auto"
    max-width="300"
  >
    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      height="200px"
    ></v-img>

    <v-card-title>
      Top western road trips
    </v-card-title>

    <v-card-subtitle>
      1,000 miles of wonder
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
      >
        Explore
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
data: () => ({
      show: false,
    }),
}
</script>

<style>

</style>