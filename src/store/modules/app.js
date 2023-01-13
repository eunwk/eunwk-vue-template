import shortId from 'shortid';
import { faker } from '@faker-js/faker';

const generateCardList = (number) => Array(number).fill().map(() => ({
  id: shortId.generate(),
  category: faker.address.state(),
  title: faker.lorem.sentence(),
  userName: faker.name.fullName(),
  content: faker.lorem.paragraph(),
}));

export const getters = {
  // calcResponsiveCols() { // 조회영역 col 기준 공통
    //   switch (this.$vuetify.breakpoint.name) {
    //     case 'xs':
    //      return 12;
    //     case 'sm':
    //      return 6;
    //     case 'md':
    //      return 4;
    //   default:
    //     return 3;
    //   }
    // },
    darkMode() {
      return this.$vuetify.theme.dark;
    },
};

const mutations = {
  toggleTheme(state) {
    state.isThemeDark = !state.isThemeDark;
  },
  toggleLnb(state) {
    state.showSubPageLnbDrawer = !state.showSubPageLnbDrawer;
  },
  setLnbForCreated(state, payload) {
   // console.log('setLnbForCreated', state, payload);
    state.showSubPageLnbDrawer = payload;
  },
  setCategoryFromPath(state, path) {
    // 처음 서브화면 진입 시, 새로고침 시 카테고리 및 LNB select 셋팅
    const splitPath = path.split('/');
    const data = state.tabItems.filter(({ category }) => category === splitPath[1]);
    if (data) {
     // console.log('화면 새로고침 path', splitPath[1], data);
     // console.log(data[0].category);
      state.selectedCategory = data[0].category;
      this.commit('app/setSubMenu');
    }
  },
  setCategoryFromTabClick(state, category) {
    state.selectedCategory = category;
    this.commit('app/setSubMenu');
  },
  setSubMenu(state) {
    const data = state.menuItems.filter(
      ({ category }) => category === state.selectedCategory,
    );
    // 하위메뉴 없을 경우 예외처리
    if (!data.length) {
      state.selectedMenuData = [];
    } else {
      state.selectedMenuData = data[0].menus;
    }
    // console.log('setSubMenu 실행', state.selectedMenuData);
  },
  setDarkMode(mode) {
    this.$vuetify.theme.dark = mode;
      localStorage.setItem('darkMode', mode ? 'dark' : 'light');
    },
  getDarkMode() {
    const mode = localStorage.getItem('darkMode') === 'dark' ? true : false;
    this.$vuetify.theme.dark = mode;
  },
};

const actions = {
};

const state = {
  cardList: generateCardList(7),
  isThemeDark: false,
  showSubPageLnbDrawer: true,
  selectedCategory: null,
  tabItems: [
    { id: 1, category: 'Template', src: '/Template/search-grid' },
    {
      id: 2,
      category: 'CustomComponent',
      src: '/CustomComponent/section-title',
    },
    { id: 3, category: 'Etc', src: '/Etc/sub1' },
  ],
  menuItems: [
    {
      category: 'Template',
      menus: [
        { title: 'Search + Grid', src: '/Template/search-grid' },
        { title: 'Card Layout', src: '/Template/card-layout' },
        { title: 'Post Form', src: '/Template/post' },
        { title: 'Responsive Table', src: '/Template/responsive-table' },
      ],
    },
    {
      category: 'CustomComponent',
      menus: [
        { title: 'Section Title', src: '/CustomComponent/section-title' },
        { title: 'Search Area', src: '/CustomComponent/search-area' },
        { title: 'Message Box', src: '/CustomComponent/message-box' },
      ],
    },
    {
      category: 'Etc',
      menus: [{ title: '404 에러페이지', src: '/Etc/sub1' }],
    },
  ],
  selectedMenuData: [],
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
