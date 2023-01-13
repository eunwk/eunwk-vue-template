<template>
  <v-app :class="`app-${breakpoint}`">
      <router-view/>
  </v-app>
</template>

<script>
import './scss/common.scss';

export default {
  name: 'App',
  data: () => ({

  }),
  computed: {
    breakpoint() {
      return this.$vuetify.breakpoint.name;
    },
  },
};
</script>
