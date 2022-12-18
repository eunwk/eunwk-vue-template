<template>
  <div>
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
        <v-btn type="submit" color="secondary"><v-icon>mdi-magnify</v-icon>Search</v-btn>
      </v-form>
    </div>
      <section-title title='검색결과'>
        <v-btn color="secondary" depressed>추가</v-btn>
        <v-btn color="secondary" depressed>삭제</v-btn>
        <v-btn color="secondary" depressed>저장</v-btn>
      </section-title>
      <v-data-table
        v-model="tableData.selected"
        :headers="tableData.headers"
        :items="tableData.desserts"
        :single-select="singleSelect"
        hide-default-footer
        item-key="name"
        show-select
      ></v-data-table>
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
      tableData: {
        selected: [],
        singleSelect: true,
        headers: [
          {
            text: 'Dessert (100g serving)',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Calories', value: 'calories' },
          { text: 'Fat (g)', value: 'fat' },
          { text: 'Carbs (g)', value: 'carbs' },
          { text: 'Protein (g)', value: 'protein' },
          { text: 'Iron (%)', value: 'iron' },
        ],
        desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%',
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%',
          },
          {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: '7%',
          },
          {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: '8%',
          },
          {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: '16%',
          },
          {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: '0%',
          },
          {
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: '2%',
          },
          {
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: '45%',
          },
          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: '22%',
          },
          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: '6%',
          },
        ],
      },
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
    breakpoint() {
      return this.$vuetify.breakpoint.name;
    },
    calcResponsiveCols() {
      return this.$store.getters.calcResponsiveCols;
    },
  },
  methods: {
    // onClickToggle() {
    //   this.isDisabled = !this.isDisabled;
    // },
  },
};
</script>

<style>
/* 조회영역 */
.search-area {
    background: #f1f1f1;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 10px;
    margin-bottom: 20px;
    padding-right: 120px;
    position: relative;
}

.search-area form {
  display: flex;
  flex-wrap: wrap;
}

.search-area .v-text-field__details {
  display: none;
}
.search-area .v-text-field {
  padding-top: 0;
  margin-top: 0;
}
.search-area .v-input__slot {
  margin-bottom: 0;
}
.search-area .v-text-field > .v-input__control > .v-input__slot:before {
  content: none;
}
.search-area .v-text-field__slot .v-label {
  position: relative !important;
  transform: none !important;
  max-width: auto;
  overflow: visible;
  margin-right: 10px;
}
.search-area .v-text-field__slot .v-label + input {
  border: 1px solid #ddd;
  background: #fff;
  border-radius: 2px;
}

.search-area .v-input {
  padding: 3px 5px;
  flex: 0 0 auto;
  width: 25%;
}

.search-area .v-input input {
  max-height: 28px;
  text-indent : 5px;
}

.search-area .v-text-field > .v-input__control > .v-input__slot:after {
  display: none;
}

.search-area .v-btn[type="submit"] {
  position: absolute;
  right: 10px;
  top: 13px;
}

/* 반응형 처리, mobile first */
.search-area.responsive-xs .v-input {
  width: 100%;
}

.search-area.responsive-sm .v-input {
  width: 50%;
}

.search-area.responsive-md .v-input {
  width: 33.3333%;
}

.search-area.responsive-xs,
.search-area.responsive-sm {
  padding-right: 10px;
}
.search-area.responsive-xs .v-btn[type="submit"],
.search-area.responsive-sm .v-btn[type="submit"] {
  position: static;
  width: calc(100% - 10px);
  margin: 3px 5px 0px;
}

</style>
