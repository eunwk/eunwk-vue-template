<template>
  <div>
    <!-- <v-app-bar app flat clipped-left color="primary" dense> -->
    <v-app-bar app flat color="primary" dense>
      <v-app-bar-title>
        <router-link to="/" class="app-logo">
          <v-icon color="#ffffff">mdi-cloud-braces</v-icon>
          Eunwk
        </router-link>
      </v-app-bar-title>
      <template v-slot:extension>
        <v-app-bar-nav-icon
          @click.stop="toggleLnb"
          color="#ffffff"
        ></v-app-bar-nav-icon>
        <v-tabs
          v-model="selectedTabIndex"
          dark
          slider-color="yellow"
          show-arrows
          class="pl-3"
        >
          <v-tab
            v-for="item in tabItems"
            :key="item.id"
            :to="item.src"
            @click="onClickTab(item)"
          >
            {{ item.category }}
          </v-tab>
        </v-tabs>
      </template>
      <v-row justify="end">
        <v-text-field
          v-model="searchValue"
          placeholder="Search"
          solo
          clearable
          hide-details
          style="max-width: 200px"
          append-icon="mdi-magnify"
          clear-icon="mdi-close-circle"
          dense
          rounded
          height="24px"
          @click:append="onSearch"
        ></v-text-field>
        <v-btn text color="#ffffff" to="/login">Login</v-btn>
        <btn-theme-change />
      </v-row>
    </v-app-bar>
    <v-main :class="{'sub-layout-body-container': true, 'lnb-showing': showSubPageLnbDrawer}">
      <sub-page-layout-lnb />
      <v-container class="sub-layout-content" fluid>
        <router-view class="sub-content-inner"></router-view>
      </v-container>
    </v-main>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import BtnThemeChange from '@/components/BtnThemeChange.vue';
import SubPageLayoutLnb from './SubPageLayoutLnb.vue';

export default {
  name: 'SubPageLayout',
  components: {
    BtnThemeChange,
    SubPageLayoutLnb,
  },
  data: () => ({
    searchValue: '',
    menuItems: [
      {
        category: 'Template',
        menus: [
          { title: 'Search + Grid', src: '/template/search-grid' },
          { title: 'Card Layout', src: '/template/card-layout' },
          { title: 'Post Form', src: '/template/post' },
          { title: 'Responsive Table', src: '/template/responsive-table' },
        ],
      },
      {
        category: 'CustomComponent',
        menus: [
          { title: 'Section Title', src: '/custom-component/section-title' },
          { title: 'Search Area', src: '/custom-component/search-area' },
          { title: 'Message Box', src: '/custom-component/message-box' },
        ],
      },
      {
        category: 'Etc',
        menus: [{ title: '404 에러페이지', src: '/css/sub1' }],
      },
    ],
    selectedMenuData: [],
    selectedTabIndex: null,
    selectedTabTitle: '11111',
    tabItems: [
      { id: 1, category: 'Template', src: '/template/search-grid' },
      {
        id: 2,
        category: 'CustomComponent',
        src: '/custom-component/section-title',
      },
      { id: 3, category: 'Etc', src: '/css/sub1' },
    ],
    windowSize: {
      x: 0,
      y: 0,
    },
  }),
  computed: {
    showSubPageLnbDrawer() {
      return this.$store.state.showSubPageLnbDrawer;
    },
    mobileBreakPoint() {
      return this.$vuetify.breakpoint.mobileBreakpoint;
    },
  },
  methods: {
    ...mapMutations([
      'toggleLnb',
    ]),
    onSearch() {
      if (this.searchValue) {
        alert(`${this.searchValue}를 검색합니다.`);
      } else {
        alert('검색어를 입력해 주세요.');
      }
    },
    onClickTab(clickedItem) {
      this.selectedTabTitle = clickedItem.category;
      console.log('this.selectedTabIndex', this.selectedTabIndex);
      this.setSubMenu();
    },
    setSubMenu() {
      const data = this.menuItems.filter(
        ({ category }) => category === this.selectedTabTitle,
      );
      // 하위메뉴 없을 경우 예외처리
      if (!data.length) {
        this.selectedMenuData = [];
      } else {
        this.selectedMenuData = data[0].menus;
      }
    },
    setSubMenuTitle() {
      const data = this.tabItems.filter(({ src }) => src === this.$route.path);
      this.selectedTabTitle = data[0].category;
    },
  },
  mounted() {
    // 초기 선택된 탭 타이틀을 Drawer 상단에 넣기위에 값 저장
    this.setSubMenuTitle();
    this.setSubMenu();
  },
  beforeMount() {
    // 화면 로딩 시 Lnb의 Show/Hide 기본값 지정. 모바일(md 1264) 이하 false, PC(lg 이상) 은 true
    this.windowSize = { x: window.innerWidth, y: window.innerHeight };
    console.log('windowSize', this.windowSize.x, this.mobileBreakPoint);
    if (this.windowSize.x < this.mobileBreakPoint) {
      // breakpoint md 이하
      this.$store.commit('setLnbForCreated', false);
    }
    if (this.windowSize.x >= this.mobileBreakPoint) {
      // breakpoint lg 이상
      this.$store.commit('setLnbForCreated', true);
    }
  },
};
</script>

<style scoped>
.v-app-bar-title .app-logo {
  text-decoration: none;
  display: flex;
  align-items: center;
}

.v-app-bar-title a {
  color: #ffffff;
}

.v-app-bar-title .app-logo .v-icon {
  margin-right: 7px;
  font-size: 30px;
}

/* Lnb Show/hide */
.lnb {
  background: #fff;
  border-right: 1px solid #ddd;
  width: 240px;
  margin-left: -240px;
  flex-shrink: 0;
  flex-grow: 0;
  transition: 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
}
.lnb-showing .lnb {
  margin-left: 0;
}

.app-md .lnb,
.app-sm .lnb,
.app-xs .lnb   {
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 1;
};

</style>
