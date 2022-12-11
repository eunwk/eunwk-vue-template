<template>
    <v-container class="body-container">
      <div class="login-box">
        <h1 class="text-h4 text-center mb-10">Login</h1>
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
            <div >
              <v-btn
                  color="primary"
                  @click="validate"
                  block
                  class="mb-5"
                  large
              >
              Login
              </v-btn>
              <v-btn
                  color="blue-grey lighten-5"
                  block
                  href="/"
                  large
              >Sign Up</v-btn>
            </div>
        </v-form>
      </div>
  </v-container>
</template>

<script>
  export default {
    name: 'LoginView',

    data: () => ({
      id: '',
      password: '',
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

<style>
.body-container {
  padding: 50px 15px;
}
.login-box {
  margin: 0 auto;
  max-width: 460px;
}

</style>
