<template>
  <div class="single-page">
    <header>
      <div class="max-width-box">
        <h1 class="app-logo">
          <router-link to="/" >
            <v-icon color="primary">mdi-cloud-braces</v-icon>
            Eunwk
          </router-link>
        </h1>
        <div class="header-menu">
          <v-btn text color="primary" to="/Template/search-grid">Layout Template</v-btn>
          <v-btn text color="primary" to="/Custom-component/section-title">Custom Component</v-btn>
        </div>
        <div class="header-others">
          <v-btn text color="primary" to="/login">Login</v-btn>
          <btn-theme-change></btn-theme-change>
        </div>
      </div>
    </header>
    <div class="body-container">
      <router-view></router-view>
    </div>
    <footer>
      <div class="max-width-box text-center">
        <strong>이메일: eunwk@naver.com</strong>
      </div>
    </footer>
  </div>
</template>

<script>
import BtnThemeChange from '@/components/BtnThemeChange';

export default {
  name: 'SinglePageLayout',
  components: {
    BtnThemeChange,
  },
  methods: {
    // onClickMenu() {
    //   console.log('cick');
    //   this.$store.commit('app/setCategoryFromTabClick', 'template');
    // },
  },
};
</script>

<style scoped lang="scss">
@import '@/scss/customVariables.scss';
.single-page {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;

  header {
    // border-bottom: 1px solid $borderColor;
    height: 64px;
    position: sticky;
    top: 0;
    background: #fff;
    z-index:2;
    .max-width-box {
      display: flex;
      align-items: center;
      height: 100%;
      .header-menu {

      }
      .header-others {
        margin-left: auto;
      }
    }
    .app-logo a {
      text-decoration: none;
      display: flex;
      align-items: center;
      font-size: 20px;
      margin-right: 40px;
      .v-icon {
        margin-right: 7px;
        font-size: 30px;
      }
    }
  }

  .body-container {
    flex: 1 1 auto;
  }

  footer {
    padding-top: 50px;
    padding-bottom: 50px;
    background: #eee;
  }
}

</style>
