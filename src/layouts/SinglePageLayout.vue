<!-- eslint-disable brace-style -->
<template>
  <div class="single-page">
    <header :class="{scrolled : scrolled}">
      <!-- <div class="scroll-progress"><span ref="myBar"></span></div> -->
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

        </div><!-- .header-menu // -->
        <div class="header-others">
          <v-btn text color="primary" to="/login">Login</v-btn>
          <btn-theme-change></btn-theme-change>
        </div>
      </div>
      <!-- <div :class="{'menu-box': true, showing: showMegaMenu}">
      </div> -->
    </header>
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
import BtnThemeChange from '@/components/BtnThemeChange';
import SinglePageMegaMenu from '@/components/comFrames/SinglePageMegaMenu';
import { mapState } from 'vuex';

export default {
  name: 'SinglePageLayout',
  components: {
    BtnThemeChange,
    SinglePageMegaMenu,
  },
  data() {
    return {
      scrolled: false,
      lastScrollTop: 0,
      showMegaMenu: false,
      currentMenu: null, // 현재 선택되어 있는 메뉴
    };
  },
  computed: {
    ...mapState('app', [
      'selectedCategory',
      'selectedMenuData', // 2뎁스 메뉴 데이터
    ]),
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll);
  },
  methods: {
    onScroll() {
      // header 플로팅
      console.log('scroll');
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop >= this.lastScrollTop) {
        this.scrolled = true;
      } else {
        this.scrolled = false;
      }
      this.lastScrollTop = scrollTop;

      // 메가메뉴 닫음.
      this.closeMegamenu();
    },
    closeMegamenu() {
      // 메가메뉴 닫음.
      if (this.showMegaMenu) {
        this.showMegaMenu = false;
        this.currentMenu = null;
        // this.$refs.Template.focus();
      }
    },
    onClickMenu(e, clickMenu) {
      console.log('처음상태', this.showMegaMenu, clickMenu);
      if (this.currentMenu === null) {
        // 메뉴가 닫혀있는 상태에서 메뉴를 누른 경우
        this.showMegaMenu = true;
        this.currentMenu = clickMenu;
        this.setMenu(clickMenu);
        // this.$refs.megaMenu.focus();
      } else if (clickMenu === this.currentMenu) {
        // 현재 열려있는 메뉴를 또 누른 경우 메뉴 닫음.
        this.showMegaMenu = false;
        this.currentMenu = null;
      } else {
        // 현재 열려있는 메뉴와 다른 메뉴를 누른 경우
        this.currentMenu = clickMenu;
        this.setMenu(clickMenu);
        // this.$refs.megaMenu.focus();
      }
    },
    setMenu(category) {
     // console.log('setMenu item', category);
     this.$store.commit('app/setCategoryFromTabClick', category);
    },
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
    background: rgba(255, 255, 255, 0.5);
    backdrop-filter: saturate(200%) blur(10px);
    z-index:2;
    transition: 0.4s;
    .max-width-box {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 100%;
      .header-menu {
        margin-right: auto;
        .btn-menu:not(:last-child) {
          margin-right: 10px;
        }
      }
      .header-others {
        margin-left: 20px;
        justify-self: flex-end;
        a {
          margin-right: 5px;
        }
      }
    }
    .app-logo a {
      text-decoration: none;
      display: flex;
      align-items: center;
      font-size: 20px;
      margin-right: 40px;
      img {
        margin-right: 10px;
        width: 50px;
      }
    }
  }

  header.scrolled {
    top: -64px;
  }
  .body-container {
    flex: 1 1 auto;
  }

  footer {
    padding-top: 30px;
    padding-bottom: 14px;
    background: #eee;
  }
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
