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
  setLogin(state, payload) {
    state.isLoggedIn = true;
    state.loginUserInfo = payload;
  },
  setLogOut(state) {
    state.isLoggedIn = false;
    state.loginUserInfo = {};
  },
  toggleTheme(state) {
    state.isThemeDark = !state.isThemeDark;
  },
  setDarkMode(mode) {
    this.$vuetify.theme.dark = mode;
      localStorage.setItem('darkMode', mode ? 'dark' : 'light');
    },
  getDarkMode() {
    const mode = localStorage.getItem('darkMode') === 'dark' ? true : false;
    this.$vuetify.theme.dark = mode;
  },
  toggleLnb(state) {
    console.log('toggleLnb');
    state.showLnb = !state.showLnb;
  },
  setShowLnbInitForMobile(state) {
    state.showLnb = false;
  },
  setLnbOverlay(state) {
    state.isLnbOverlay = !state.isLnbOverlay;
  },
  setMegaMenuData(state) {
    // single page 메뉴 클릭시 메가메뉴에 보여질 메뉴 셋팅
    const data = state.gnbMenuItems[state.selectedMenuIndex].menus;
    // 하위메뉴 없을 경우 예외처리
    if (!data.length) {
      state.megaMenuData = [];
    } else {
      state.megaMenuData = data;
    }
  },
  setShowMegaMenu(state, payload) {
    state.showMegaMenu = payload;
  },
  setSelectedMenuIndex(state, payload) {
      state.selectedMenuIndex = payload;
  },
  closeMegaMenu(state) {
    // 메가메뉴 닫음.
    state.showMegaMenu = false;
    state.selectedMenuIndex = null;
    state.megaMenuData = [];
  },
  selectedMenuIndexFromPath(state, path) {
    // 처음 서브화면 진입 시, 새로고침 시 Lnb 1뎁스 메뉴 펼침.
    // console.log('selectedMenuIndexFromPath', path);
    const splitPath = path.split('/');
    state.selectedMenuIndex = state.gnbMenuItems.findIndex((v) => v.category === splitPath[1]);
  },
};

const actions = {
  logIn({ commit }, payload) {
    commit('setLogin', payload);
  },
  logOut({ commit }) {
    commit('setLogOut', null);
  },
};

const state = {
  isLoggedIn: false,
  loginUserInfo: {},
  cardList: generateCardList(7),
  isThemeDark: false,
  showLnb: false, // md 이하에만 초기값 false 적용. lg 이상은 항상 보임.
  isLnbOverlay: false, // md 이하에만 초기값 false 적용. lg 이상은 항상 보임.
  gnbMenuItems: [
    {
      id: 1,
      category: 'Template',
      icon: 'mdi-book-multiple-outline',
      src: '/Template/search-grid',
      title: 'Layout Template',
      // active: false,
      menus: [
        { title: 'Search + Grid', src: '/Template/search-grid' },
        { title: 'Card Layout', src: '/Template/card-layout' },
        { title: 'Post Form', src: '/Template/post' },
        { title: 'Responsive Table', src: '/Template/responsive-table' },
      ],
    },
    {
      id: 2,
      category: 'CustomComponent',
      icon: 'mdi-bulletin-board',
      src: '/CustomComponent/section-title',
      title: 'Custom Component',
      // active: true,
      menus: [
        { title: 'Section Title', src: '/CustomComponent/section-title' },
        { title: 'Search Area', src: '/CustomComponent/search-area' },
        { title: 'Message Box', src: '/CustomComponent/message-box' },
      ],
    },
    {
      id: 3,
      category: 'Etc',
      icon: 'mdi-focus-field',
      src: '/Etc/sub1',
      title: 'Etc',
      // active: true,
      menus: [{ title: '404 에러페이지', src: '/Etc/sub1' }],
    },
  ],
  selectedMenuIndex: null, // 선택된 메뉴 index. single page, sub page 공통 사용
  showMegaMenu: false,
  megaMenuData: [], // single Page 메가메뉴에 뿌려질 데이터
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
