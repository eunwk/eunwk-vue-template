<template>
  <div>
    <!-- <v-navigation-drawer v-model="drawer" app clipped > -->
    <v-navigation-drawer v-model="drawer" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            {{ selectedTabTitle }}
          </v-list-item-title>
          <v-list-item-subtitle>
            subtext
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list>
        <v-list-item v-for="item in selectedMenuData" :key="item.value" :to="item.src">
          {{ item.title }}
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!-- <v-app-bar app flat clipped-left color="primary" dense> -->
    <v-app-bar app flat color="primary" dense>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" color="#ffffff"></v-app-bar-nav-icon>
      <v-app-bar-title>
        <router-link to="/" class="app-logo">
          <v-icon color="#ffffff">mdi-cloud-braces</v-icon>
          Eunwk
        </router-link>
      </v-app-bar-title>
      <template v-slot:extension>
        <v-tabs v-model="selectedTabIndex" dark slider-color="yellow" show-arrows class="pl-3">
          <v-tab v-for="item in tabItems" :key="item.id" :to="item.src" @click="onClickTab(item)">
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
          dense rounded
          height="24px"
          @click:append="onSearch"></v-text-field>
        <v-btn text color="#ffffff" to="/login">Login</v-btn>
        <btn-theme-change></btn-theme-change>
      </v-row>
    </v-app-bar>
    <v-main>
      <v-container class="sub-layout-body-container">
        <router-view class="sub-content-inner"></router-view>
      </v-container>
    </v-main>
    <v-footer app>
    푸터
    </v-footer>
  </div>
</template>

<script>
import BtnThemeChange from '@/components/BtnThemeChange.vue';

export default {
  name: 'SubPageLayout',
  components: {
    BtnThemeChange,
  },
  data: () => ({
    drawer: true,
    searchValue: '',
    menuItems: [
      {
        category: 'Vuetify',
        menus: [
          { title: 'Theme Customizing', src: '/vuetify/theme' },
          { title: 'Responsive', src: '/vuetify/responsive' },
        ],
      },
      {
        category: 'CustomComponent',
        menus: [
          { title: 'SectionTitle', src: '/custom-component/section-title' },
        ],
      },
      {
        category: 'Etc',
        menus: [
          { title: '404 에러페이지', src: '/css/sub1' },
        ],
      },
    ],
    selectedMenuData: [],
    selectedTabIndex: null,
    selectedTabTitle: '11111',
    tabItems: [
      { id: 1, category: 'Vuetify', src: '/vuetify/theme' },
      { id: 2, category: 'CustomComponent', src: '/custom-component/section-title' },
      { id: 3, category: 'Etc', src: '/css/sub1' },
    ],
    // computed() {
    //   changeMenuItem() {
    //     return this.result.reduce((a,c) => a + c, 0) / this.result.length || 0
    //   }
    // }
    // selectedTabTitle: this.tabItems[this.selectedTabIndex].title,
  }),
  methods: {
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
      const data = this.tabItems.filter(
        ({ src }) => src === this.$route.path,
      );
      this.selectedTabTitle = data[0].category;
    },
  },
  computed: {
  },
  mounted() {
    // 초기 선택된 탭 타이틀을 Drawer 상단에 넣기위에 값 저장
    this.setSubMenuTitle();
    this.setSubMenu();
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

</style>
