<template>
  <single-form-box title="Login">
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
      >
        <v-text-field
            v-model="id"
            :rules="idRules"
            label="ID"
            required
        ></v-text-field>
        <v-text-field
            v-model="password"
            :rules="passwordRules"
            label="Password"
            required
        ></v-text-field>
        <v-checkbox
            v-model="checkbox"
            label="Save ID"
        ></v-checkbox>
        <div class="single-form-btns">
          <v-btn
              color="primary"
              @click="validate"
          >
          Login
          </v-btn>
          <v-btn
              color="blue-grey lighten-5"
              to="/"
          >Sign Up</v-btn>
        </div>
    </v-form>
  </single-form-box>
</template>

<script>
import singleFormBox from '@/components/containers/singleFormBox';

export default {
  name: 'LoginView',
  components: {
    singleFormBox,
  },
  data: () => ({
    id: '',
    password: '',
    valid: false,
    checkbox: false,
    idRules: [
      (v) => !!v || 'Name is required',
    ],
    passwordRules: [
      (v) => !!v || 'Password is required',
    ],
  }),
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        alert('로그인성공!');
      } else {
        alert('로그인실패!');
      }
    },
  },
};
</script>

<style scoped lang="scss">

</style>
