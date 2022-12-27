<template>
  <v-btn fab color="primary" width="32px" height="32px" depressed @click="toggleTheme">
    <v-icon small v-if="!isThemeDark">mdi-white-balance-sunny</v-icon>
    <v-icon small v-else>mdi-star-crescent</v-icon>
  </v-btn>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  computed: {
    isThemeDark() {
      return this.$store.state.isThemeDark;
    },
  },
  methods: {
    ...mapMutations([
      'toggleTheme',
    ]),
  },
};

</script>

<style>

</style>
