<template>
  <header :class="{scrolled : scrolled}" :data-header-type="headerType">
    <div class="max-width-box">
      <v-btn @click.stop="toggleLnb" v-if="headerType === 'sub-page'"><v-icon>mdi-view-headline</v-icon></v-btn>
      <h1 class="app-logo">
        <router-link to="/" @focus="closeMegamenu">
          <img src="@/assets/images/logo.png" alt="UI/UX" />
          Template
        </router-link>
      </h1>
      <div class="header-menu">
        <div v-for="(item, i) in gnbMenuItems" :key="i" class="btn-menu-item">
          <v-btn
            text color="primary"
            :class="{'btn-menu': true, 'v-btn--active': currentMenu === item.category}"
            @click.prevent="onClickMenu(item.category)"
            @keyup="onKeyup($event, item.category)"
            @keydown="onKeydown($event, item.category)"
            ref="item.category"
            href="#mega"
          >
            {{ item.title }}
            <v-icon>mdi-chevron-down</v-icon>
          </v-btn>
          <Single-page-mega-menu
            :currentMenu="currentMenu"
            :closeMegamenu="closeMegamenu"
            :headerType="headerType"
            v-if="showMegaMenu && item.category === currentMenu"
          />
        </div>
      </div><!-- .header-menu // -->
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
        <btn-theme-change></btn-theme-change>
      </div>
    </div>
  </header>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import BtnThemeChange from '@/components/BtnThemeChange';
import SinglePageMegaMenu from '@/components/comFrames/SinglePageMegaMenu';

export default {
  components: {
    BtnThemeChange,
    SinglePageMegaMenu,
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
      showMegaMenu: false,
      currentMenu: null, // 현재 선택되어 있는 메뉴
      searchValue: '',
      windowSize: {
        x: 0,
        y: 0,
      },
      selectedIndex: '',
      focusBtnIndex: null,
    };
  },
  computed: {
    ...mapState('app', [
      'selectedCategory',
      'selectedMenuData', // 2뎁스 메뉴 데이터
      'showSubPageLnbDrawer',
      'gnbMenuItems',
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
      'toggleLnb',
      'setCategoryFromPath',
      'setCategoryFromTabClick',
    ]),
    onSearch() {
      if (this.searchValue) {
        alert(`${this.searchValue}를 검색합니다.`);
      } else {
        alert('검색어를 입력해 주세요.');
      }
    },
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

      this.closeMegamenu();
    },
    closeMegamenu() {
      // 메가메뉴 닫음.
      if (this.showMegaMenu) {
        this.showMegaMenu = false;
        this.currentMenu = null;
      }
    },
    onClickMenu(clickMenu) {
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
      }
      return false;
    },
    onKeyup(e, focusCategory) {
        // 키보드로 메뉴진입시 메가메뉴 오픈
        if (e.keyCode === 9 && !e.shiftKey) {
          // console.log('탭키로 들어왔어. ');
          this.onClickMenu(focusCategory);
        }
    },
    onKeydown(e, focusCategory) {
      if (e.keyCode === 9 && e.shiftKey) {
        // 시프트 + 탭키로 나갈때 현재 열려진 카테고리 메뉴가 첫번째 메뉴이면 메가메뉴 닫기
        // 현재 열려진 카테고리의 index 찾기
        const index = this.gnbMenuItems.findIndex((v) => v.category === focusCategory);
        if (index === 0) {
          this.closeMegamenu();
        }
      }
    },
    setMenu(category) {
     this.$store.commit('app/setCategoryFromTabClick', category);
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

<style scoped lang="scss">
@import '@/scss/customVariables.scss';

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

.btn-menu-item {
  display: inline-block;
}
.btn-menu {
  &:hover {
    background: #edf4fb;
  }
  padding-right: 7px !important;
  &.v-btn--active .v-icon {
    transform: rotate(180deg);
  }
}

header.scrolled {
  top: -64px;
}

header[data-header-type="single-page"] {

}
header[data-header-type="sub-page"] {
  // background: $primary;
  // background: #ccc;
  padding: 0 30px;
  border-bottom: 1px solid #ddd;
  .mega-menu {
    border-top: 0px none;
  }
}
</style>
