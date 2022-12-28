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
  },
  getters: {
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
  },
  mutations: {
    toggleTheme(state) {
      state.isThemeDark = !state.isThemeDark;
    },
  },
  actions: {
  },
  modules: {
  },
});
