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
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});
