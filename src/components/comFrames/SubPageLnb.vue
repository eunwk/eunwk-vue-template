<template>
  <!-- <v-navigation-drawer v-model="drawer" app clipped > -->
  <nav class="lnb" id="lnb">
    <v-list expand>
      <v-list-group
        v-for="(item, index) in gnbMenuItems"
        :key="item.id"
        :prepend-icon="item.icon"
        no-action
        :value="selectedMenuIndex === index"
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
          @click="onClickLink"
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
      'selectedMenuIndex',
      'gnbMenuItems',
      'isLoggedIn',
      'loginUserInfo',
      'isLnbOverlay',
    ]),
  },
  data: () => ({
    selectedItem: [1],
    currentPath: this.$route.path,
  }),
  methods: {
    ...mapMutations('app', [
      'selectedMenuIndexFromPath',
      'toggleLnb',
    ]),
    onClickLink() {
      if (this.$vuetify.breakpoint.smAndDown || (this.$vuetify.breakpoint.mdOnly && this.isLnbOverlay)) {
        // sm 이하이거나. md +  lnb overlay 모드일 때. 메뉴를 누르면 화면 바뀌면서 lnb 닫음.
        this.toggleLnb();
      }
    },
  },
  mounted() {
    console.log('mounted');
    this.selectedMenuIndexFromPath(this.$route.path);
  },
  updated() {
    console.log('lnb updated');
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

.v-avatar {
  margin-right: 10px;
}
</style>
