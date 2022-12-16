<template>
  <v-btn fab color="primary" width="32px" height="32px" depressed @click="onToggleTheme">
    <v-icon small v-if="!isThemeDark">mdi-white-balance-sunny</v-icon>
    <v-icon small v-else>mdi-star-crescent</v-icon>
  </v-btn>
</template>

<script>
export default {
  computed: {
    isThemeDark() {
      return this.$store.state.isThemeDark;
    },
  },
  methods: {
    onToggleTheme() {
      console.log('this.isThemeDark', this.isThemeDark);
      this.$store.state.isThemeDark = !this.isThemeDark;
    },
  },
};

</script>

<style>

</style>
