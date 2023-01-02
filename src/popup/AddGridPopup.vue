<template>
<v-card>
    <v-card-title class="text-h5">신규입력</v-card-title>
    <v-form ref="addForm" lazy-validation v-model="valid" @submit.prevent="onSubmitForm">
      <v-card-text>
        <v-text-field
          label="Dessert*"
          required
          :rules="[v => !!v || 'Dessert는 필수 입력 사항 입니다.']"
          v-model="dessert"
        ></v-text-field>
        <v-text-field
          label="Calories*"
          required
          type="number"
          :rules="[v => !!v || 'Calories는 필수 입력 사항 입니다.']"
          v-model="calories"
        ></v-text-field>
        <v-text-field
          label="Fat"
          suffix="g"
          type="number"
          v-model="fat"
        ></v-text-field>
        <v-text-field
          label="Carbs"
          suffix="g"
          type="number"
          v-model="carbs"
        ></v-text-field>
        <v-text-field
          label="Protein"
          suffix="g"
          type="number"
          v-model="protein"
        ></v-text-field>
        <v-text-field
          label="Iron"
          suffix="%"
          type="number"
          v-model="iron"
        ></v-text-field>
        <small>*필수입력</small>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          @click="bindClose"
          type="button"
        >
        취소
        </v-btn>
        <v-btn
        color="secondary"
        type="submit"
          @click="onSubmitAddForm"
        >
        저장
        </v-btn>
      </v-card-actions>
    </v-form>
</v-card>
</template>

<script>
export default {
  data() {
    return {
      valid: false,
      dessert: '',
      calories: '',
      fat: '',
      carbs: '',
      protein: '',
      iron: '',
    };
  },
  props: {
    bindClose: {
        type: Function,
        default: () => { },
    },
  },
  methods: {
    onSubmitAddForm() {
      if (this.$refs.addForm.validate()) {
        console.log('폼전송', {
          dessert: this.dessert,
          calories: this.calories,
          fat: this.fat,
          carbs: this.carbs,
          protein: this.protein,
          iron: this.iron,
        });
        this.$refs.addForm.resetValidation();
        this.dessert = '';
        this.calories = '';
        this.fat = '';
        this.carbs = '';
        this.protein = '';
        this.iron = '';
        alert('저장되었습니다.');
        this.bindClose();
      }
    },
  },
};
</script>
