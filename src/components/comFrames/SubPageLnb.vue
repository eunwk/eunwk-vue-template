<template>
  <!-- <v-navigation-drawer v-model="drawer" app clipped > -->
  <nav class="lnb" id="lnb">
    <v-list expand >
      <v-list-group
        v-for="item in gnbMenuItems"
        v-model="item.active"
        :key="item.id"
        :prepend-icon="item.icon"
        no-action
      >
      <!-- <div>{{item.title}}</div> -->
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item
          v-for="child in item.menus"
          :key="child.value"
          :to="child.src"
          :value="true"
        >
          <v-list-item-content>
            <v-list-item-title v-text="child.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
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
      'gnbMenuItems',
      'selectedLnbItem',
    ]),
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
