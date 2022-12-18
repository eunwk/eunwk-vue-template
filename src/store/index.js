import Vue from 'vue';
import Vuex from 'vuex';
import shortId from 'shortid';
import { faker } from '@faker-js/faker';

Vue.use(Vuex);

export const generateCardList = (number) => Array(number).fill().map(() => ({
  id: shortId.generate(),
  category: faker.address.state(),
  title: faker.lorem.sentence(),
  userName: faker.name.fullName(),
  content: faker.lorem.paragraph(),
}));

export default new Vuex.Store({
  state: {
    cardList: generateCardList(7),
    isThemeDark: false,
    // menuItems: [
    //   {
    //     category: 'Template',
    //     menus: [
    //       { title: 'Search + Grid', src: '/template/search-grid' },
    //       { title: 'Card Layout', src: '/template/card-layout' },
    //     ],
    //   },
    //   {
    //     category: 'CustomComponent',
    //     menus: [
    //       { title: 'Section Title', src: '/custom-component/section-title' },
    //       { title: 'Search Area', src: '/custom-component/search-area' },
    //     ],
    //   },
    //   {
    //     category: 'Etc',
    //     menus: [
    //       { title: '404 에러페이지', src: '/css/sub1' },
    //     ],
    //   },
    // ],
    // selectedMenuData: [],
    // selectedTabIndex: null,
    // selectedTabTitle: '11111',
    // tabItems: [
    //   { id: 1, category: 'Template', src: '/template/search-grid' },
    //   { id: 2, category: 'CustomComponent', src: '/custom-component/section-title' },
    //   { id: 3, category: 'Etc', src: '/css/sub1' },
    // ],
  },
  getters: {
    calcResponsiveCols() { // 조회영역 col 기준 공통
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
         return 12;
        case 'sm':
         return 6;
        case 'md':
         return 4;
      default:
        return 3;
      }
    },
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});
