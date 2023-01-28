<template>
  <v-app :class="`app-${breakpoint}`">
      <router-view/>
  </v-app>
</template>

<script>
import './scss/common.scss';
import './scss/customVariables.scss';
import { mapState } from 'vuex';
import './scss/darkThemeCustom.scss';

export default {
  name: 'App',
  data: () => ({

  }),
  computed: {
    ...mapState('app', [
      'showLnb',
    ]),
    breakpoint() {
      return this.$vuetify.breakpoint.name;
    },
  },
};
</script>
