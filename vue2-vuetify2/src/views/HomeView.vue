<template>
  <v-container class="v-center text-center">
      <div>
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
      </div>

      <div class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Vue2 + Vuetify2 <br />Layout Template</h1>
        <p class="subheading font-weight-regular">
          For help and collaboration with other Vuetify developers,
          <br>please join our online
          <a
            href="https://community.vuetifyjs.com"
            target="_blank"
          >Discord Community</a>
        </p>
      </div>

      <div
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          Used Dependencies
        </h2>

        <v-row justify="center">
          <v-chip
            class="ma-2"
          >
            Default
          </v-chip>

          <v-chip
            class="ma-2"
            color="primary"
          >
            Primary
          </v-chip>

          <v-chip
            class="ma-2"
            color="secondary"
          >
            Secondary
          </v-chip>

          <v-chip
            class="ma-2"
            color="red"
            text-color="white"
          >
            Red Chip
          </v-chip>

          <v-chip
            class="ma-2"
            color="green"
            text-color="white"
          >
            Green Chip
          </v-chip>
        </v-row>
      </div>
  </v-container>
</template>

<script>
export default {
  name: 'HomeView',
  data: () => ({
  }),
};
</script>

<style>
.v-center {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
