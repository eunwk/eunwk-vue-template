<template>
  <!-- <v-navigation-drawer v-model="drawer" app clipped > -->
  <nav class="lnb" id="lnb">
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="text-h6">
          <v-icon class="mr-2">{{ changeIcon }}</v-icon>{{ selectedCategory }}
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-divider></v-divider>
    <v-list>
      <v-list-item-group v-model="selectedItem">
        <v-list-item
          v-for="item in selectedMenuData"
          :key="item.value"
          :to="item.src"
        >
          {{ item.title }}
        </v-list-item>
    </v-list-item-group>
    </v-list>
  </nav>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'SubPageLayoutLnb',
  computed: {
    ...mapState('app', [
      'selectedCategory',
      'selectedMenuData',
    ]),
    changeIcon() {
      switch (this.selectedCategory) {
        case 'Template':
          return 'mdi-book-multiple-outline';
        case 'CustomComponent':
          return 'mdi-bulletin-board';
        case 'Etc':
          return 'mdi-focus-field';
        default:
          return 'mdi-file-settings-outline';
      }
    },
  },
  data: () => ({
    selectedItem: 1,
    currentPath: this.$route.path,
  }),
  methods: {
    ...mapMutations('app', [
      'setCategoryFromMenuClick',
      'setCategoryFromPath',
    ]),
  },
  beforeMount() {
    // 서브화면 진입 시 Lnb 에 현재 카테고리 메뉴 세팅
    if (this.selectedCategory === null) {
      this.setCategoryFromPath(this.$route.path);
    }
  },
  mounted() {

  },
  // watch: {
  //   $route(to, from) {
  //     console.log('여기실행', to, from);
  //   },
  // },
};
</script>

<style scoped lang="scss">
.v-list-item__title {
  display: flex;
  .v-icon {
    color: inherit;
  }
}
</style>
