<template>
  <div class="login">
    <section class="login-box">
      <h1 class="box-title">Login</h1>
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
                x-large
                rounded
            >
            Login
            </v-btn>
            <v-btn
                color="blue-grey lighten-5"
                block
                to="/"
                x-large
                rounded
            >Sign Up</v-btn>
          </div>
      </v-form>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'LoginView',

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

.login {
  height: 100%;
  background: url(@/assets/images/img_bg.jpg) no-repeat center top ;
  display: flex;
  align-items: center;
  justify-content: center;
}
/* 로그인, 메시지 박스 등 내부  Card 형 박스 */
.card-box {
  margin: 0 auto;
  max-width: 460px;
}

.login-box {
  margin: 0 auto;
  width: 460px;
  padding: 30px 30px 50px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.25 );

  .box-title {
    font-size: 42px;
    font-weight: 600;
    text-align: center;
    letter-spacing: -0.1rem;
    margin-bottom: 20px;
  }
}

</style>
