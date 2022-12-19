<template>
    <div>
        <section-title title='조회영역 1Row 4컬럼'></section-title>
        <div :class="['search-area', 'responsive-'+ breakpoint]">
          <v-form v-model="valid">
            <datePicker />
            <v-text-field
              v-model="firstname"
              :rules="nameRules"
              label="조회조건"
              required
            ></v-text-field>
            <v-text-field
              v-model="firstname"
              :rules="nameRules"
              label="조회조건"
              required
            ></v-text-field>
            <v-text-field
              v-model="firstname"
              :rules="nameRules"
              label="조회조건"
              required
            ></v-text-field>
            <v-btn type="submit" color="secondary"><v-icon>mdi-magnify</v-icon>Search</v-btn>
          </v-form>
        </div>
        <section-title title='조회영역 2 Row'></section-title>
        <div :class="['search-area', 'responsive-'+ breakpoint]">
          <v-form v-model="valid">
            <datePicker label="조회기간" double />
            <v-text-field
              v-model="firstname"
              :rules="nameRules"
              label="조회조건"
              required
            ></v-text-field>
            <v-text-field
              v-model="firstname"
              :rules="nameRules"
              label="조회조건"
              required
            ></v-text-field>
            <v-text-field
              v-model="firstname"
              :rules="nameRules"
              label="조회조건"
              required
            ></v-text-field>
            <v-text-field
              v-model="firstname"
              :rules="nameRules"
              label="조회조건"
              required
            ></v-text-field>
            <v-text-field
              v-model="firstname"
              :rules="nameRules"
              label="조회조건"
              required
            ></v-text-field>
            <v-btn type="submit" color="secondary"><v-icon>mdi-magnify</v-icon>Search</v-btn>
          </v-form>
        </div>
        <section-title title='조회영역 3 Row'></section-title>
        <div :class="['search-area', 'responsive-'+ breakpoint]">
          <v-form v-model="valid">
            <v-text-field
              v-model="firstname"
              :rules="nameRules"
              label="조회조건"
              required
            ></v-text-field>
            <v-text-field
              v-model="firstname"
              :rules="nameRules"
              label="조회조건"
              required
            ></v-text-field>
            <v-text-field
              v-model="firstname"
              :rules="nameRules"
              label="조회조건"
              required
            ></v-text-field>
            <v-text-field
              v-model="firstname"
              :rules="nameRules"
              label="조회조건"
              required
            ></v-text-field>
            <v-text-field
              v-model="firstname"
              :rules="nameRules"
              label="조회조건"
              required
            ></v-text-field>
            <v-text-field
              v-model="firstname"
              :rules="nameRules"
              label="조회조건"
              required
            ></v-text-field>
            <v-text-field
              v-model="firstname"
              :rules="nameRules"
              label="조회조건"
              required
            ></v-text-field>
            <v-text-field
              v-model="firstname"
              :rules="nameRules"
              label="조회조건"
              required
            ></v-text-field>
            <v-text-field
              v-model="firstname"
              :rules="nameRules"
              label="조회조건"
              required
            ></v-text-field>
            <v-text-field
              v-model="firstname"
              :rules="nameRules"
              label="조회조건"
              required
            ></v-text-field>
            <v-btn type="submit" color="secondary"><v-icon>mdi-magnify</v-icon>Search</v-btn>
          </v-form>
        </div>
        <section-title title='조회영역 4 Row'></section-title>
        <div :class="['search-area', 'responsive-'+ breakpoint]">
          <v-form v-model="valid">
            <v-text-field
              v-model="firstname"
              :rules="nameRules"
              label="조회조건"
              required
            ></v-text-field>
            <v-text-field
              v-model="firstname"
              :rules="nameRules"
              label="조회조건"
              required
            ></v-text-field>
            <v-text-field
              v-model="firstname"
              :rules="nameRules"
              label="조회조건"
              required
            ></v-text-field>
            <v-text-field
              v-model="firstname"
              :rules="nameRules"
              label="조회조건"
              required
            ></v-text-field>
            <v-text-field
              v-model="firstname"
              :rules="nameRules"
              label="조회조건"
              required
            ></v-text-field>
            <v-text-field
              v-model="firstname"
              :rules="nameRules"
              label="조회조건"
              required
            ></v-text-field>
            <v-text-field
              v-model="firstname"
              :rules="nameRules"
              label="조회조건"
              required
            ></v-text-field>
            <v-text-field
              v-model="firstname"
              :rules="nameRules"
              label="조회조건"
              required
            ></v-text-field>
            <v-text-field
              v-model="firstname"
              :rules="nameRules"
              label="조회조건"
              required
            ></v-text-field>
            <v-text-field
              v-model="firstname"
              :rules="nameRules"
              label="조회조건"
              required
            ></v-text-field>
            <v-text-field
              v-model="firstname"
              :rules="nameRules"
              label="조회조건"
              required
            ></v-text-field>
            <v-text-field
              v-model="firstname"
              :rules="nameRules"
              label="조회조건"
              required
            ></v-text-field>
            <v-text-field
              v-model="firstname"
              :rules="nameRules"
              label="조회조건"
              required
            ></v-text-field>
            <v-text-field
              v-model="firstname"
              :rules="nameRules"
              label="조회조건"
              required
            ></v-text-field>
            <v-text-field
              v-model="firstname"
              :rules="nameRules"
              label="조회조건"
              required
            ></v-text-field>
            <v-text-field
              v-model="firstname"
              :rules="nameRules"
              label="조회조건"
              required
            ></v-text-field>
            <v-btn type="submit" color="secondary"><v-icon>mdi-magnify</v-icon>Search</v-btn>
          </v-form>
        </div>
    </div>
</template>

<script>
import SectionTitle from '@/components/SectionTitle.vue';
import DatePicker from '@/components/DatePicker.vue';

export default {
  name: 'CustomSearchArea',
  components: {
      SectionTitle,
      DatePicker,
  },
  data() {
      return {
      };
  },
  computed: {
    breakpoint() {
      return this.$vuetify.breakpoint.name;
    },
  },
};
</script>

<style scoped>
</style>
