<template>
  <div>
    <div class="search-area">
      <v-form v-model="valid">
        <div class="src-item">
          <date-picker default-date="2000-12-12"></date-picker>
        </div>
        <div class="src-item">
          <v-text-field
            v-model="firstname"
            label="조회조건"
            required
          ></v-text-field>
        </div>
        <div class="src-item">
          <v-select
            :items="items"
            label="SelectBox"
          ></v-select>
        </div>
        <div class="src-item">
          <v-text-field
            v-model="firstname"
            label="조회조건"
            required
          ></v-text-field>
        </div>
        <v-btn type="submit" color="secondary"><v-icon>mdi-magnify</v-icon>Search</v-btn>
      </v-form>
    </div>
    <section-title title='검색결과'>
      <v-dialog v-model="addPopup" width="500">
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="secondary" depressed v-bind="attrs" v-on="on">추가</v-btn>
      </template>
      <add-grid-popup :bind-close="onCloseAddPopup" />
    </v-dialog>
    <v-dialog
      v-model="confirm"
      persistent
      max-width="290"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="secondary" depressed v-bind="attrs" v-on="on">삭제</v-btn>
      </template>
      <common-message :bind-close="cancleConfirm" :bind-ok="okConfirm" msg="삭제하시겠습니까?" type="delete" confirm />
    </v-dialog>
    </section-title>
    <v-data-table
      v-model="tableData.selected"
      :headers="tableData.headers"
      :items="tableData.desserts"
      :single-select="tableData.singleSelect"
      hide-default-footer
      item-key="name"
      show-select
    ></v-data-table>
  </div>
</template>

<script>
import SectionTitle from '@/components/SectionTitle';
import DatePicker from '@/components/DatePicker';
import CommonMessage from '@/components/CommonMessage';
import AddGridPopup from '@/popup/AddGridPopup';

export default {
  name: 'SearchGrid',
  components: {
    SectionTitle,
    DatePicker,
    AddGridPopup,
    CommonMessage,
  },
  data() {
    return {
      valid: false,
      addPopup: false,
      confirm: false,
      isDisabled: false,
      toggle_exclusive: 2,
      items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
      firstname: '',
      returnValue: null,
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
  methods: {
    onCloseAddPopup() {
      this.addPopup = false;
    },
    onSaveAddPopup() {
      alert('저장되었습니다.');
      this.addPopup = false;
    },
    cancleConfirm() {
      this.confirm = false;
    },
    okConfirm() {
      alert('삭제하였습니다.');
      this.confirm = false;
    },
  },
};
</script>

<style scoped lang="scss">
</style>
