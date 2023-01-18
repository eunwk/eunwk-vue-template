<template>
  <header :class="{scrolled : scrolled}" :data-header-type="headerType">
    <div class="max-width-box">
      <h1 class="app-logo">
        <router-link to="/">
          <img src="@/assets/images/logo.png" alt="UI/UX" />
          Template
        </router-link>
      </h1>

      <single-page-header-menu  v-if="headerType === 'single-page'" />
      <sub-page-header-menu  v-if="headerType === 'sub-page'" />

      <div class="header-others">
        <v-text-field
          v-model="searchValue"
          placeholder="Search"
          clearable
          hide-details
          style="max-width: 200px"
          append-icon="mdi-magnify"
          clear-icon="mdi-close-circle"
          dense
          @click:append="onSearch"
        ></v-text-field>
        <v-btn text color="primary" to="/login">Login</v-btn>
        <btn-theme-change />
      </div>
    </div>
  </header>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import BtnThemeChange from '@/components/BtnThemeChange';
import SinglePageHeaderMenu from './SinglePageHeaderMenu.vue';
import SubPageHeaderMenu from './SubPageHeaderMenu.vue';

export default {
  components: {
    BtnThemeChange,
    SinglePageHeaderMenu,
    SubPageHeaderMenu,
  },
  props: {
    headerType: {
      type: String,
      default: 'single-page',
    },
  },
  data() {
    return {
      scrolled: false,
      lastScrollTop: 0,
      // showMegaMenu: false,
      // currentMenu: null, // 현재 선택되어 있는 메뉴
      searchValue: '',
      windowSize: {
        x: 0,
        y: 0,
      },
    };
  },
  computed: {
    ...mapState('app', [
      'selectedMenuData', // 2뎁스 메뉴 데이터
      'showSubPageLnbDrawer',
      'gnbMenuItems',
      // 'singlePageScrolled',
      // 'singlePageLastScrollTop',
    ]),
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll);
  },
  methods: {
    ...mapMutations('app', [
      'setCategoryFromPath',
      'closeMegaMenu',
    ]),
    onSearch() {
      if (this.searchValue) {
        alert(`${this.searchValue}를 검색합니다.`);
      } else {
        alert('검색어를 입력해 주세요.');
      }
    },
    onScroll() {
      // single-page 일 경우 header 플로팅
      if (this.headerType === 'single-page') {
        console.log('scroll');
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop >= this.lastScrollTop) {
          this.scrolled = true;
        } else {
          this.scrolled = false;
        }
        this.lastScrollTop = scrollTop;
        this.closeMegaMenu();
      }
    },
  },
  beforeMount() {
    // 화면 로딩 시 Lnb의 Show/Hide 기본값 지정. 모바일(md 1264) 이하 false, PC(lg 이상) 은 true
    // this.windowSize = { x: window.innerWidth, y: window.innerHeight };
    // console.log('windowSize', this.windowSize.x, this.mobileBreakPoint);
    // if (this.windowSize.x < this.mobileBreakPoint) {
    //   // breakpoint md 이하
    //   this.$store.commit('app/setLnbForCreated', false);
    // }
    // if (this.windowSize.x >= this.mobileBreakPoint) {
    //   // breakpoint lg 이상
    //   this.$store.commit('app/setLnbForCreated', true);
    // }
  },
};
</script>

<style lang="scss">
@import '@/scss/customVariables.scss';

/******************************
  헤더 공통 스타일
*******************************/
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
      .btn-menu-item {
        display: inline-block;
      }
      .btn-menu-item:not(:last-child) {
        margin-right: 10px;
      }
    }
    .header-others {
      margin-left: 20px;
      justify-self: flex-end;
      display: inline-flex;
      align-items: center;
      a {
        margin-right: 5px;
      }
      .v-input {
        margin-right: 10px;
        margin-top: 0;
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

.btn-menu {
  &:hover {
    background: #edf4fb;
  }
}

header.scrolled {
  top: -64px;
}

/******************************
  .single-page 전용 스타일
*******************************/
header[data-header-type="single-page"] {
  .btn-menu {
    &:hover {
      background: #edf4fb;
    }
    padding-right: 7px !important;
    &.v-btn--active .v-icon {
      transform: rotate(180deg);
    }
  }
}

/******************************
  .sub-page 전용 스타일
*******************************/
header[data-header-type="sub-page"] {
  // background: #19509f;
  // color: $textColorWhite;
  // background: #ccc;
  padding: 0 30px;
  border-bottom: 1px solid #ddd;
  .mega-menu {
    border-top: 0px none;
  }
  h1, a, button {
    // color: $textColorWhite;
  }
}
</style>
