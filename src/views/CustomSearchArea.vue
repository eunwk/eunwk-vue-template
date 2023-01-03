<template>
    <div>
        <section-title title='조회영역 1Row 4컬럼'></section-title>
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
        <section-title title='조회영역 2 Row'></section-title>
        <div class="search-area">
          <v-form v-model="valid">
            <div class="src-item col2">
              <date-picker label="조회기간" double from="2000-12-12" to="2024-12-12"></date-picker>
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
            <div class="src-item">
              <v-text-field
                v-model="firstname"
                label="조회조건"
                required
              ></v-text-field>
            </div>
            <div class="src-item">
              <v-text-field
                v-model="firstname"
                label="조회조건"
                required
              ></v-text-field>
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
        <section-title title='조회영역 3 Row'></section-title>
        <div class="search-area">
          <v-form v-model="valid">
            <div class="src-item">
              <date-picker default-date="2000-12-12"></date-picker>
            </div>
            <div class="src-item col3">
              <label for="selectAll">CheckBox</label>
              <v-checkbox
                v-model="checkboxAll"
                label="전체"
                id="selectAll"
                value="all"
                @change="onClickCheckAll"
              ></v-checkbox>
              <v-checkbox
                v-model="checkbox"
                label="선택1"
                value="s1"
                @change="onClickCheckItem"
              ></v-checkbox>
              <v-checkbox
                v-model="checkbox"
                label="선택2"
                value="s2"
                @change="onClickCheckItem"
              ></v-checkbox>
              <v-checkbox
                v-model="checkbox"
                label="선택3"
                value="s3"
                @change="onClickCheckItem"
              ></v-checkbox>
              <v-checkbox
                v-model="checkbox"
                label="선택4"
                value="s4"
                @change="onClickCheckItem"
              ></v-checkbox>
            </div>
            <div class="src-item">
              <v-text-field
                v-model="firstname"
                label="조회조건"
                required
              ></v-text-field>
            </div>
            <div class="src-item">
              <v-text-field
                v-model="firstname"
                label="조회조건"
                required
              ></v-text-field>
            </div>
            <div class="src-item">
              <v-text-field
                v-model="firstname"
                label="조회조건"
                required
              ></v-text-field>
            </div>
            <div class="src-item">
              <v-text-field
                v-model="firstname"
                label="조회조건"
                required
              ></v-text-field>
            </div>
            <div class="src-item">
              <v-text-field
                v-model="firstname"
                label="조회조건"
                required
              ></v-text-field>
            </div>
            <div class="src-item">
              <v-text-field
                v-model="firstname"
                label="조회조건"
                required
              ></v-text-field>
            </div>
            <div class="src-item">
              <v-text-field
                v-model="firstname"
                label="조회조건"
                required
              ></v-text-field>
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
        <section-title title='조회영역 4 Row'></section-title>
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
              <v-text-field
                v-model="firstname"
                label="조회조건"
                required
              ></v-text-field>
            </div>
            <div class="src-item">
              <v-text-field
                v-model="firstname"
                label="조회조건"
                required
              ></v-text-field>
            </div>
            <div class="src-item">
              <v-text-field
                v-model="firstname"
                label="조회조건"
                required
              ></v-text-field>
            </div>
            <div class="src-item">
              <v-text-field
                v-model="firstname"
                label="조회조건"
                required
              ></v-text-field>
            </div>
            <div class="src-item">
              <v-text-field
                v-model="firstname"
                label="조회조건"
                required
              ></v-text-field>
            </div>
            <div class="src-item">
              <v-text-field
                v-model="firstname"
                label="조회조건"
                required
              ></v-text-field>
            </div>
            <div class="src-item">
              <v-text-field
                v-model="firstname"
                label="조회조건"
                required
              ></v-text-field>
            </div>
            <div class="src-item">
              <v-text-field
                v-model="firstname"
                label="조회조건"
                required
              ></v-text-field>
            </div>
            <div class="src-item">
              <v-text-field
                v-model="firstname"
                label="조회조건"
                required
              ></v-text-field>
            </div>
            <div class="src-item">
              <v-text-field
                v-model="firstname"
                label="조회조건"
                required
              ></v-text-field>
            </div>
            <div class="src-item">
              <v-text-field
                v-model="firstname"
                label="조회조건"
                required
              ></v-text-field>
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
    </div>
</template>

<script>
import SectionTitle from '@/components/SectionTitle';
import DatePicker from '@/components/DatePicker';

export default {
  name: 'CustomSearchArea',
  components: {
      SectionTitle,
      DatePicker,
  },
  data() {
      return {
        items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
        firstname: '',
        valid: false,
        checkboxAll: false,
        checkbox: [],
      };
  },
  computed: {
    breakpoint() {
      return this.$vuetify.breakpoint.name;
    },
  },
  methods: {
    onClickCheckAll() {
      // this.checkboxAll = !this.checkboxAll;
      if (this.checkboxAll) {
        this.checkbox = ['s1', 's2', 's3', 's4'];
      } else {
        this.checkbox = [];
      }
    },
    onClickCheckItem() {
      // 전체 선택 후, 기타 체크박스 해제 시 전체해제
      if (this.checkbox.length < 4) {
        this.checkboxAll = false;
      }
    },
  },
};
</script>

<style scoped>
</style>
