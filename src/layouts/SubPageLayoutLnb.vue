<template>
  <!-- <v-navigation-drawer v-model="drawer" app clipped > -->
  <nav class="lnb">
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="text-h6">
          {{ selectedTabTitle }}
        </v-list-item-title>
        <v-list-item-subtitle> subtext </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-divider></v-divider>
    <v-list>
      <v-list-item
        v-for="item in selectedMenuData"
        :key="item.value"
        :to="item.src"
      >
        {{ item.title }}
      </v-list-item>
    </v-list>
  </nav>
</template>

<script>

export default {
  name: 'SubPageLayoutLnb',
  data: () => ({
    drawer: true,
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
  }),
  methods: {
    // onClickTab(clickedItem) {
    //   this.selectedTabTitle = clickedItem.category;
    //   console.log('this.selectedTabIndex', this.selectedTabIndex);
    //   this.setSubMenu();
    // },
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
    // setSubMenuTitle() {
    //   const data = this.tabItems.filter(({ src }) => src === this.$route.path);
    //   this.selectedTabTitle = data[0].category;
    // },
  },
  mounted() {
    // 초기 선택된 탭 타이틀을 Drawer 상단에 넣기위에 값 저장
   // this.setSubMenuTitle();
    this.setSubMenu();
  },
};
</script>

<style scoped>

</style>
