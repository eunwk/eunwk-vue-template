<template>
  <!-- <v-navigation-drawer v-model="drawer" app clipped > -->
  <nav class="lnb" id="lnb">
    <div class="login-info">
      로그인 정보 영역
      <v-btn rounded icon class="btn-pin" v-if="$vuetify.breakpoint.mdOnly" @click="setLnbOverlay"><v-icon>{{ isLnbOverlay ? 'mdi-pin-off' : 'mdi-pin'}}</v-icon></v-btn>
    </div>
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
      'selectedLnbItem',
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
      'setLnbOverlay',
      'setLnbActiveMenu',
    ]),
  },
  // beforeCreate() {
  //   console.log('before create!!!!');
  //   // this.selectedMenuIndexFromPath(this.$route.path);
  // },
  mounted() {
    console.log('mounted');
    this.selectedMenuIndexFromPath(this.$route.path);
    // this.setLnbActiveMenu();
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
.login-info {
  padding: 15px;
  border-bottom: 1px solid #ddd;
  display: flex;
  .btn-pin {
    margin-left: auto;
  }
}
.v-list-item__title {
  display: flex;
  .v-icon {
    color: inherit;
  }
}

</style>
