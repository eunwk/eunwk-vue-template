<template>
  <v-app>
    <v-app-bar app color="primary">
      <v-app-bar-title>vue sample2222</v-app-bar-title>
      <v-spacer></v-spacer>
          <v-btn to="/sub1">sub1</v-btn>
          <v-btn to="/sub2">sub2</v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'SinglePageLayout',
};
</script>
