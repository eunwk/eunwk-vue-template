<template>
  <header :class="{scrolled : scrolled}" :data-header-type="headerType">
    <div class="max-width-box">
      <h1 class="app-logo">
        <router-link to="/">
          <img src="@/assets/images/logo.png" alt="UI/UX" />
          Template
        </router-link>
      </h1>

      <!-- // single page only -->
      <single-page-header-menu  v-if="headerType === 'single-page'" />
      <!-- single page only // -->

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
          class="input-src"
          v-if="$vuetify.breakpoint.smAndUp"
        ></v-text-field>
        <router-link v-if="!isLoggedIn" to="/login">로그인</router-link>
        <div v-else class="myInfo">
          <v-menu left offset-y v-model="menu" :close-on-content-click="false" attach=".myInfo">
            <template v-slot:activator="{ on, attrs }">
              <button v-bind="attrs" v-on="on" class="btn-avatar" >
                <v-avatar size="50" tile>
                  <v-img src="https://cdn.vuetifyjs.com/images/lists/3.jpg"></v-img>
                </v-avatar>
              </button>
            </template>
            <v-list dense>
                <v-list-item class="list-title">
                  <v-list-item-content>
                  <v-list-item-title>Park Eunhee</v-list-item-title>
                  <v-list-item-subtitle>Web Publisher</v-list-item-subtitle>
                </v-list-item-content>
                </v-list-item>
                <v-list-item to="/account" disabled>
                  나의 정보(준비중)
                </v-list-item>
                <v-list-item @click="onClickLogOut">
                  로그아웃
                </v-list-item>
            </v-list>
          </v-menu>
        </div>
        <btn-theme-change />
      </div>

      <!-- // sub page only -->
      <button
        v-if="headerType === 'sub-page' && $vuetify.breakpoint.mdAndDown"
        :title="showLnb ? '메뉴열기' : '메뉴닫기'"
        class="btn-lnb-toggle"
        @click="toggleLnb"
      >
        <v-icon>{{showLnb ? 'mdi-arrow-left' : 'mdi-menu'}}</v-icon>
      </button>
      <button class="btn-pin" v-if="headerType === 'sub-page' && $vuetify.breakpoint.mdOnly" @click="setLnbOverlay"><v-icon>{{ isLnbOverlay ? 'mdi-pin-off' : 'mdi-pin'}}</v-icon></button>
      <!-- sub page only //-->

    </div><!-- .max-width-box //-->
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
      selectedItem: null,
      menu: false,
      // windowSize: {
      //   x: 0,
      //   y: 0,
      // },
      myMenuList: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],
    };
  },
  computed: {
    ...mapState('app', [
      'megaMenuData', // single page 메가메뉴 데이터
      'showLnb',
      'gnbMenuItems',
      'isLoggedIn',
      'isLnbOverlay',
      'loginUserInfo',
    ]),
  },
  methods: {
    ...mapMutations('app', [
      'closeMegaMenu',
      'toggleLnb',
      'setLnbOverlay',
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
    onClickLogOut() {
      setTimeout(() => {
        this.$store.dispatch('app/logOut');
        this.$router.push({
          path: '/',
        });
      }, 1000);
      this.menu = false;
    },
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll);
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
      display: inline-flex;
      align-items: center;
      height: 100%;
      & > *:not(:last-child) {
        margin-right: 10px;
      }
      & > a {
        padding: 0;
        color: $primary;
      }
    }
    .myInfo {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      overflow: hidden;
    }
    .input-src {
      margin-top: 0;
      width: 200px;
    }
  }

  h1.app-logo  {
    display: inline-flex;
    align-items: center;
    a {
      text-decoration: none;
      display: flex;
      align-items: center;
      font-size: 20px;
      margin-right: 10px;
      letter-spacing: -0.03rem;
      img {
        margin-right: 10px;
        width: 50px;
      }
    }
  }

  .list-title {
    border-bottom: 1px solid #ddd;
    margin-bottom: 5px;
  }
}

header.scrolled {
  top: -$headerNormalHeight;
}

/******************************
  반응형 공통 스타일
*******************************/

.app-xs,
.app-sm {
  header {
    .app-logo a {
      font-size: 18px;
      img {
        width: 42px;
      }
    }
  }
}

/******************************
  .single-page 전용 스타일
*******************************/
/* 헤더메뉴로 인한 헤더 높이 조정 */
.app-xs header[data-header-type="single-page"],
.app-sm header[data-header-type="single-page"],
.app-md header[data-header-type="single-page"] {
  height: $headerMobileHeight;
  .max-width-box {
    align-items: flex-start;
    h1 {
      height: $headerNormalHeight - 1;
    }
  }
  .header-others {
    height: $headerNormalHeight - 1;
  }
}

.header-menu {
  display: flex;
  margin-right: auto;
  height: $headerNormalHeight - 1;
  padding: 0px $boxHPadding_lg - 10;
  .btn-menu-item {
    display: inline-flex;
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

.app-xs,
.app-sm,
.app-md {
  .header-menu {
    position: absolute;
    height: $headerMobileHeight - $headerNormalHeight;
    width: 100%;
    top: $headerNormalHeight - 1;
    left: 0;
    border-top: 1px solid #ddd;
    transition: padding 0.4s;
  }
  .mega-menu-dim {
    top: $headerMobileHeight;
  }
}

.app-md header .header-menu {
  padding: 0px $boxHPadding_md - 10;
}

.app-sm header .header-menu,
.app-xs header .header-menu {
  padding: 0px $boxHPadding_sm - 5;
}

.app-xs {
  .btn-menu-item:not(:last-child) {
    margin-right: 5px;
  }
  .btn-menu {
    padding: 0 5px !important;
    .v-icon {
      display: none;
    }
  }
}

/******************************
  .sub-page 전용 스타일
*******************************/
$subPageHeaderFontColor: #e5e5e5;
$subPageHeaderPrimaryColor: #ffd334;

header[data-header-type="sub-page"] {
  background: #1f324c;
  .btn-lnb-toggle,
  .btn-pin {
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

  .btn-lnb-toggle .v-icon {
    font-size: 32px;
    color: $subPageHeaderPrimaryColor;
  }
  .btn-pin .v-icon {
    font-size: 26px;
    color: $subPageHeaderPrimaryColor;
  }

  .header-others > a {
    color: $subPageHeaderPrimaryColor;
  }

  h1.app-logo {
    font-weight: 500;
    img {
      mix-blend-mode: hard-light;
    }
  }

  h1.app-logo a,
  .input-src {
    // color: $subPageHeaderFontColor;
    .v-icon,
    input,
    input::placeholder {
      // color: $subPageHeaderFontColor;
    }
    .v-input__slot:before {
      border-color: rgba(255, 255, 255, 0.42) !important;
    }
    .v-input__slot:after {
      // border-color: $subPageHeaderPrimaryColor;
      border-width: thin 0 0 0;
    }
  }
  .v-icon.primary--text {
    color:  $subPageHeaderFontColor !important;
  }
}

</style>
