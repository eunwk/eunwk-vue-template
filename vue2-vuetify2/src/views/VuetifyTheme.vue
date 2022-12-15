<template>
  <div>
    <section>
      <section-title title='Vuetify Theme Customizing'></section-title>
      <section-title title='Button Size' depth="2"></section-title>
      <v-row align="end" justify="start" class="mb-4 btn-area-row">
        <v-btn x-small>x-small</v-btn>
        <v-btn small>small</v-btn>
        <v-btn>normal</v-btn>
        <v-btn large>large</v-btn>
        <v-btn x-large>x-large</v-btn>
      </v-row>
      <section-title title='Color' depth="2"></section-title>
      <v-row class="mb-4 btn-area-row mb-10">
        <v-btn depressed>Normal</v-btn>
        <v-btn depressed color="primary">Primary</v-btn>
        <v-btn depressed color="error">Error</v-btn>
        <v-btn depressed disabled>Disabled</v-btn>
      </v-row>
    </section>
  </div>
</template>

<script>
import SectionTitle from '@/components/SectionTitle.vue';

export default {
  name: 'VuetifyTheme',
  components: {
    'section-title': SectionTitle,
  },
  data() {
    return {
      isDisabled: false,
      toggle_exclusive: 2,
    };
  },
  methods: {
    // onClickToggle() {
    //   this.isDisabled = !this.isDisabled;
    // },
  },
};
</script>

<style scope>
.btn-area-row .v-btn:not(:last-child) {
  margin-right: 5px;
}

</style>
