<template>
  <header :class="{scrolled : scrolled}" :data-header-type="headerType">
    <div class="max-width-box">
      <h1 class="app-logo">
        <router-link to="/">
          <img src="@/assets/images/logo.png" alt="UI/UX" />
          Template
        </router-link>
      </h1>

      <!-- single page mode menu -->
      <single-page-header-menu  v-if="headerType === 'single-page'" />

      <div class="header-others">
        <v-text-field
          v-model="searchValue"
          placeholder="Search"
          clearable
          hide-details
          append-icon="mdi-magnify"
          clear-icon="mdi-close-circle"
          dense
          @click:append="onSearch"
        ></v-text-field>
        <router-link to="/login">Login</router-link>
        <btn-theme-change />
      </div>

      <!-- sub page mode menu -->
      <button
        v-if="headerType === 'sub-page' && $vuetify.breakpoint.mdAndDown"
        :title="showLnb ? '메뉴열기' : '메뉴닫기'"
        class="btn-lnb-toggle"
        @click="toggleLnb"
      >
        <v-icon>{{showLnb ? 'mdi-menu' : 'mdi-arrow-left'}}</v-icon>
      </button>
    </div>
  </header>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import BtnThemeChange from '@/components/BtnThemeChange';
import SinglePageHeaderMenu from './SinglePageHeaderMenu.vue';

export default {
  components: {
    BtnThemeChange,
    SinglePageHeaderMenu,
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
      searchValue: '',
      windowSize: {
        x: 0,
        y: 0,
      },
    };
  },
  computed: {
    ...mapState('app', [
      'megaMenuData', // single page 메가메뉴 데이터
      'showLnb',
      'gnbMenuItems',
      // 'singlePageScrolled',
      // 'singlePageLastScrollTop',
    ]),
  },

  methods: {
    ...mapMutations('app', [
      'closeMegaMenu',
      'toggleLnb',
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
  mounted() {
    window.addEventListener('scroll', this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll);
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

/*******************************************
  공통 스타일 - PC first style
********************************************/
header {
  height: $headerNormalHeight;
  position: sticky;
  top: 0;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: saturate(200%) blur(10px);
  z-index:2;
  flex-shrink: 0;
  // transition: 0.4s;
  .max-width-box {
    display: flex;
    align-items: center;
    height: 100%;
    transition: padding 0.4s;
    .header-others {
      margin-left: auto;
      justify-self: flex-end;
      display: inline-flex;
      align-items: center;
      height: $headerNormalHeight - 1;
      a {
        margin-right: 10px;
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
    margin-right: 10px;
    img {
      margin-right: 10px;
      width: 50px;
    }
  }
}

header.scrolled {
  top: -$headerNormalHeight;
}

/******************************
  .single-page 전용 스타일
*******************************/
header[data-header-type="single-page"] {
  .header-menu {
    display: flex;
    margin-right: auto;
    height: $headerNormalHeight - 1;
    .btn-menu-item {
      display: inline-flex;
      height: $headerNormalHeight;
      align-items: center;
      .btn-menu {
        padding-right: 7px !important;
        &:hover {
          background: #edf4fb;
        }
      }
      &.v-btn--active .v-icon {
        transform: rotate(180deg);
      }
    }
    .btn-menu-item:not(:last-child) {
      margin-right: 10px;
    }
  }
}
/*** 반응형 xs, sm, md 공통  ***/
.app-xs,
.app-sm,
.app-md {
  header[data-header-type="single-page"] {
  height: 128px;
    .max-width-box {
      align-items: flex-start;
      h1 {
        height: $headerNormalHeight - 1;
        display: inline-flex;
        align-items: center;
      }
      .header-menu {
        position: absolute;
        height: $headerNormalHeight;
        width: 100%;
        top: $headerNormalHeight - 1;
        left: 0;
        border-top: 1px solid #ddd;
        transition: padding 0.4s;
      }
    }
  }
  .mega-menu-dim {
    top: $headerMobileHeight;
  }
}

// breakpoint xs : ~ 599px
.app-xs {
  header[data-header-type="single-page"] {
    .header-menu {
      padding-right: $boxHPadding_xs - 5;
      padding-left: $boxHPadding_xs - 5;
    }
    .btn-menu-item .v-icon {
      display: none;
    }
    .btn-menu-item:not(:last-child) {
      margin-right: 0;
    }
    .btn-menu {
      padding: 5px !important;
    }
  }
}

// breakpoint sm : 600px ~ 950px
.app-sm {
  header[data-header-type="single-page"] {
    .header-menu {
      padding-right: $boxHPadding_sm - 10;
      padding-left: $boxHPadding_sm - 10;
    }
  }
}

// breakpoint md : 960px ~ 1263px
.app-md {
  header[data-header-type="single-page"] {
    .header-menu {
      padding-right: $boxHPadding_md - 10;
      padding-left: $boxHPadding_md - 10;
    }
  }
}

// breakpoint lg : 1264px ~
.app-lg {
}

/******************************
  .sub-page 전용 스타일
*******************************/
header[data-header-type="sub-page"] {
  // background: #19509f;
  // color: $textColorWhite;
  // background: #ccc;
  // padding: 0 $boxHPadding_lg;
  border-bottom: 1px solid #ddd;
  .mega-menu {
    border-top: 0px none;
  }
  h1, a, button {
    // color: $textColorWhite;
  }
  .btn-lnb-toggle {
    width: 40px;
    height: 40px;
    flex: 0 0 auto;
    margin-left: -10px;
    margin-right: 10px;
    order: -1;
    .v-icon {
      font-size: 32px;
    }
  }
}

</style>
