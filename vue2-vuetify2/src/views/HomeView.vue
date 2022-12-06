<template>
  <v-container class="body-container text-center">
      <div>
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
      </div>

      <div class="mb-8">
        <h1 class="display-2 font-weight-bold mb-3">Vue2 + Vuetify2 <br />Layout Template</h1>
      </div>

      <div
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          Used Dependencies
        </h2>
        <v-row justify="center mb-10">
          <v-chip
            class="ma-2"
          >
            Default
          </v-chip>

          <v-chip
            class="ma-2"
            color="primary"
          >
            Primary
          </v-chip>

          <v-chip
            class="ma-2"
            color="secondary"
          >
            Secondary
          </v-chip>

          <v-chip
            class="ma-2"
            color="red"
            text-color="white"
          >
            Red Chip
          </v-chip>

          <v-chip
            class="ma-2"
            color="green"
            text-color="white"
          >
            Green Chip
          </v-chip>
        </v-row>

        <div>
          <h2 class="headline font-weight-bold mb-3">About</h2>
          <p class="subheading font-weight-regular">
            1. 메인화면, 로그인 등 단일페이지 레이아웃
            <br />2. 본문 컨텐츠를 위한 서브페이지 레이아웃
            <br />3. Sass를 이용한 Vuetify Customizing 설정
            <br />4. 다른 버전 <a
              href="https://community.vuetifyjs.com"
              target="_blank"
            >[Vue3 + Nuxt를 사용한 퍼블리싱 템플릿]</a>
          </p>
        </div>
      </div>
  </v-container>
</template>

<script>
export default {
  name: 'HomeView',
  data: () => ({
  }),
};
</script>

<style>

</style>
