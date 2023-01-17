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
          <a :class="{'btn-menu': true, active: selectedMenu === 'Template'}" href="#" @click="onClickMenu($event, 'Template')">Layout Template<v-icon>mdi-chevron-down</v-icon></a>
          <div class="mega-menu" ref="template">
            <div class="menu-inner-box">
              <h2>Layout Template</h2>
              <ul>
                <li v-for="item in selectedMenuData" :key="item.value">
                  <router-link :to="item.src">{{ item.title }}</router-link>
                </li>
              </ul>
            </div>
          </div>
          <a :class="{'btn-menu': true, active: selectedMenu === 'CustomComponent'}" href="#" @click="onClickMenu($event, 'CustomComponent')">Custom Component<v-icon>mdi-chevron-down</v-icon></a>
          <div class="mega-menu" ref="customComponent">
            <div class="menu-inner-box">
              <ul>
                <li v-for="item in selectedMenuData" :key="item.value">
                  <router-link :to="item.src">{{ item.title }}</router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="header-others">
          <v-btn text color="primary" to="/login">Login</v-btn>
          <btn-theme-change></btn-theme-change>
        </div>
      </div>
      <!-- <div :class="{'menu-box': true, showing: showMegaMenu}">
      </div> -->
      <button class="mega-menu-dim" v-if="showMegaMenu" @click="onClickDim" tabindex="-1">메뉴 닫기</button>
    </header>
    <div class="body-container">
      <router-view></router-view>
    </div>
    <footer>
      <div class="max-width-box text-center">
        <p>Copyright © 2023 eunwk. All rights reserved. / email: eunwk@naver.com</p>
        <address>경기도 용인시 기흥구 보라동</address>
      </div>
    </footer>
  </div>
</template>

<script>
import BtnThemeChange from '@/components/BtnThemeChange';
import { mapState } from 'vuex';

export default {
  name: 'SinglePageLayout',
  components: {
    BtnThemeChange,
  },
  data() {
    return {
      scrolled: false,
      lastScrollTop: 0,
      showMegaMenu: false,
      selectedMenu: null,
    };
  },
  computed: {
    ...mapState('app', [
      'selectedCategory',
      'selectedMenuData',
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

      // scroll Progress
      // const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      // const scrolled = (scrollTop / height) * 100;
      // this.$refs.myBar.style.width = `${scrolled}%`;
    },
    closeMegamenu() {
      // 메가메뉴 닫음.
      if (this.showMegaMenu) {
        this.showMegaMenu = false;
        this.selectedMenu = null;
      }
    },
    onClickMenu(e, selectMenu) {
      console.log('click', e.type);
     // this.closeMegamenu();
      // 메뉴가 열려있는 상태에서 다른 메뉴를 클릭했을 떄 animation 금지
      if (selectMenu === 'Template') {
        if (this.selectedMenu === 'Template') {
          // 현재 클릭한 메뉴가 기존에 열려있던 메뉴일 떄 메뉴닫음.
          this.$refs.template.style = '';
          this.$refs.customComponent.style = '';
          this.showMegaMenu = false;
          this.selectedMenu = null;
        } else if (this.selectedMenu !== null) {
          console.log('이미 열려있는 메뉴가 있어요');
          // 기존에 다른 메뉴가 열려있다가 이 메뉴가 열리면
          this.$refs.template.style = 'transition: none';
          this.$refs.customComponent.style = 'transition: none';
          this.showMegaMenu = true;
          this.selectedMenu = selectMenu;
          this.setMenu(selectMenu);
        } else {
          this.$refs.template.style = '';
          this.$refs.customComponent.style = '';
          this.showMegaMenu = true;
          this.selectedMenu = selectMenu;
          this.setMenu(selectMenu);
        }
      }
      if (selectMenu === 'CustomComponent') {
        if (this.selectedMenu === 'CustomComponent' && this.selectedMenu !== null) {
          // 현재 클릭한 메뉴가 기존에 열려있던 메뉴일 떄 메뉴닫음.
          this.$refs.template.style = '';
          this.$refs.customComponent.style = '';
          this.showMegaMenu = false;
          this.selectedMenu = null;
        } else if (this.selectedMenu !== null) {
          console.log('이미 열려있는 메뉴가 있어요');
          this.$refs.template.style = 'transition: none';
          this.$refs.customComponent.style = 'transition: none';
          this.showMegaMenu = true;
          this.selectedMenu = selectMenu;
          this.setMenu(selectMenu);
        } else {
          // 현재 클릭한 메뉴가 기존에 열려있지 않았다면 메뉴 오픈.
          this.$refs.template.style = '';
          this.$refs.customComponent.style = '';
          this.showMegaMenu = true;
          this.selectedMenu = selectMenu;
          this.setMenu(selectMenu);
        }
      }
    },
    setMenu(category) {
      console.log('setMenu item', category);
     this.$store.commit('app/setCategoryFromTabClick', category);
    },
    onClickDim() {
      this.showMegaMenu = false;
      this.selectedMenu = null;
      this.$refs.template.style = '';
      this.$refs.customComponent.style = '';
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
    background: #fff;
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

  // header.menu-open {
  //   height: 600px;
  // }

  .body-container {
    flex: 1 1 auto;
  }

  footer {
    padding-top: 50px;
    padding-bottom: 50px;
    background: #eee;
  }
}

.mega-menu-dim {
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  z-index: -1;
  text-indent: -9999px;
  font-size: 0;
}

.mega-menu {
  background: #fff;
  position: absolute;
  top: 64px;
  left: 0;
  width: 100%;
  text-align: left;
  height: 0;
  transition: 0.3s height;
  overflow: hidden;
  // display: none;
  .menu-inner-box {
    padding: 30px;
    display: none;
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

.btn-menu.active + .mega-menu {
  height: 400px;
  border-top: 1px solid #ddd;
  .menu-inner-box {
   display: block;
  }
}

// .btn-menu:focus + .mega-menu,
// .mega-menu:focus-within {
//     height: 400px;
//     border-top: 1px solid $borderColor;
// }

// .mega-menu:focus-within {
//     transition: none;
// }

</style>
