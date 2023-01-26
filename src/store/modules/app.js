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
    const data = state.gnbMenuItems.filter(({ category }) => category === splitPath[1]);
    console.log('화면 새로고침', data);
    if (data) {
     // console.log('화면 새로고침 path', splitPath[1], data);
     // console.log(data[0].category);
      state.selectedCategory = data[0].category;
      this.commit('app/setSubMenu');
    }
  },
  setCategoryFromMenuClick(state, category) {
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
  setShowMegaMenu(state, payload) {
     state.showMegaMenu = payload;
  },
  setSelectedCategory(state, payload) {
     state.selectedCategory = payload;
  },
  closeMegaMenu(state) {
    // 메가메뉴 닫음.
    state.showMegaMenu = false;
    state.selectedCategory = null;
  },
};

const actions = {
};

const state = {
  cardList: generateCardList(7),
  isThemeDark: false,
  showSubPageLnbDrawer: true,
  selectedCategory: null,
  gnbMenuItems: [
    {
      id: 1,
      category: 'Template',
      src: '/Template/search-grid',
      title: 'Layout Template',
    },
    {
      id: 2,
      category: 'CustomComponent',
      src: '/CustomComponent/section-title',
      title: 'Custom Component',
    },
    {
      id: 3,
      category: 'Etc',
      src: '/Etc/sub1',
      title: 'Etc',
    },
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
  showMegaMenu: false,
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
