<template>
  <v-app>
    <v-app-bar app class="text-center" color="#ffffff" flat>
      <v-app-bar-title>
        <router-link to="/" class="app-logo">
          <v-icon color="primary">mdi-cloud-braces</v-icon>
          Eunwk
        </router-link>
      </v-app-bar-title>
      <v-spacer></v-spacer>
      <v-row justify="end">
        <v-btn text color="primary" to="/login">Login</v-btn>
        <v-btn text color="primary" to="/sub1">sub1</v-btn>
        <v-btn text color="primary" to="/sub2">sub2</v-btn>
      </v-row>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
    <v-footer color="blue-grey lighten-4">
      <v-col
        class="text-center"
        cols="12"
      >
        <strong>eunwk@naver.com</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'SinglePageLayout',
};
</script>

<style scoped>

.v-app-bar-title .app-logo {
  text-decoration: none;
  display: flex;
  align-items: center;
}

.v-app-bar-title .app-logo:hover {
}

.v-app-bar-title .app-logo .v-icon {
  margin-right: 7px;
  font-size: 30px;
}

.header-links {
  padding-right: 10px;
}

</style>
