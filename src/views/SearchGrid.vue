<template>
  <div>
    <div class="search-area">
      <v-form v-model="valid">
          <v-row>
            <v-col :cols="calcCols">
              <v-text-field
                v-model="firstname"
                :rules="nameRules"
                label="조회조건"
                required
              ></v-text-field>
            </v-col>
            <v-col :cols="calcCols">
              <v-text-field
                v-model="firstname"
                :rules="nameRules"
                label="조회조건"
                required
              ></v-text-field>
            </v-col>
            <v-col :cols="calcCols">
              <v-text-field
                v-model="firstname"
                :rules="nameRules"
                label="조회조건"
                required
              ></v-text-field>
            </v-col>
            <v-col :cols="calcCols">
              <v-text-field
                v-model="firstname"
                :rules="nameRules"
                label="조회조건"
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-btn type="submit" color="secondary"><v-icon>mdi-magnify</v-icon>Search</v-btn>
      </v-form>
    </div>
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
    {{calcCols}}
  </div>
</template>

<script>
import SectionTitle from '@/components/SectionTitle.vue';

export default {
  name: 'SearchGrid',
  components: {
    'section-title': SectionTitle,
  },
  data() {
    return {
      isDisabled: false,
      toggle_exclusive: 2,
    };
  },
  computed: {
    calcCols() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
         return 12;
        case 'sm':
         return 6;
        case 'md':
         return 4;
      default:
        return 3;
      }
    },
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
