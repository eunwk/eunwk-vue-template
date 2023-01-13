<template>
  <div>
    <v-btn
    fab
    color="primary"
    width="32px"
    height="32px"
    depressed
    @click="setDarkMode(!darkMode)"
  >
    <v-icon
      small
      v-if="!isThemeDark"
    >
      mdi-white-balance-sunny
    </v-icon>
     <v-icon small v-else>mdi-star-crescent</v-icon>
  </v-btn>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

export default {
  computed: {
      ...mapState('app', [
      'isThemeDark',
    ]),
    darkMode() {
      return this.$vuetify.theme.dark;
    },
  },
  mounted() {
    this.getDarkMode();
  },
  methods: {
    ...mapMutations('app', [
      'toggleTheme',
    ]),
    setDarkMode(mode) {
      console.log('mode', mode);
      this.$vuetify.theme.dark = mode;
        localStorage.setItem('darkMode', mode ? 'dark' : 'light');
      this.toggleTheme();
    },
    getDarkMode() {
      console.log('getmode');
      const mode = localStorage.getItem('darkMode') === 'dark' ? true : false;
      this.$vuetify.theme.dark = mode;
    },
  },
};
</script>

<style scoped lang="scss"></style>
