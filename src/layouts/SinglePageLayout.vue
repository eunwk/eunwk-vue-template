<!-- eslint-disable brace-style -->
<template>
  <div class="single-page">
    <header-bar />
    <!-- <header :class="{scrolled : scrolled}">
      <div class="max-width-box">
        <h1 class="app-logo">
          <router-link to="/" @focus="closeMegamenu">
            <img src="@/assets/images/logo.png" alt="UI/UX" />
            Template
          </router-link>
        </h1>
        <div class="header-menu">
          <a :class="{'btn-menu': true, active: currentMenu === 'Template'}" href="#" @click.prevent="onClickMenu($event, 'Template')" ref="Template">Layout Template<v-icon>mdi-chevron-down</v-icon></a>
          <Single-page-mega-menu :currentMenu="currentMenu" :showMegaMenu="showMegaMenu" :closeMegamenu="closeMegamenu"/>

          <a :class="{'btn-menu': true, active: currentMenu === 'CustomComponent'}" href="#" @click.prevent="onClickMenu($event, 'CustomComponent')" ref="CustomComponent">Custom Component<v-icon>mdi-chevron-down</v-icon></a>
          <Single-page-mega-menu :currentMenu="currentMenu" :showMegaMenu="showMegaMenu" :closeMegamenu="closeMegamenu"/>

        </div>
        <div class="header-others">
          <v-btn text color="primary" to="/login">Login</v-btn>
          <btn-theme-change></btn-theme-change>
        </div>
      </div>
    </header> -->
    <div class="body-container">
      <router-view></router-view>
    </div>
    <footer>
      <div class="max-width-box text-center">
        <p>Copyright © 2023 eunwk. All rights reserved. / email: eunwk@naver.com</p>
        <!-- <address>경기도 용인시 기흥구 보라동</address> -->
      </div>
    </footer>
  </div>
</template>

<script>
import HeaderBar from '@/components/comFrames/HeaderBar';

export default {
  name: 'SinglePageLayout',
  components: {
    HeaderBar,
  },
  data() {
  },
  methods: {
  },
};
</script>

<style scoped lang="scss">
@import '@/scss/customVariables.scss';
.body-container {
  flex: 1 1 auto;
}

footer {
  padding-top: 30px;
  padding-bottom: 14px;
  background: #eee;
}
.btn-menu {
  display: inline-block;
  padding: 2px 5px 2px 10px;
  border-radius: 3px;
  transition: 0.2s;
  &:hover {
    background: #edf4fb;
  }
}

.btn-menu.active {
    background: #d6e7f7;
    .v-icon {
      transform: rotate(-180deg);
    }
  }

</style>
