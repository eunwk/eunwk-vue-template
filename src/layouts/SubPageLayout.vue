<template>
  <div>
    <v-app-bar app flat color="primary" dense>
      <v-app-bar-title>
        <router-link to="/" class="app-logo">
          <v-icon color="#ffffff">mdi-cloud-braces</v-icon>
          Eunwk
        </router-link>
      </v-app-bar-title>
      <template v-slot:extension>
        <v-app-bar-nav-icon
          @click.stop="toggleLnb"
          color="#ffffff"
        ></v-app-bar-nav-icon>
        <v-tabs
          v-model="selectedTabIndex"
          dark
          slider-color="yellow"
          show-arrows
          class="pl-3"
        >
          <v-tab
            v-for="item in tabItems"
            :key="item.id"
            :to="item.src"
            @click="onClickTab(item)"
          >
            {{ item.category }}
          </v-tab>
        </v-tabs>
      </template>
      <v-row justify="end">
        <v-text-field
          v-model="searchValue"
          placeholder="Search"
          solo
          clearable
          hide-details
          style="max-width: 200px"
          append-icon="mdi-magnify"
          clear-icon="mdi-close-circle"
          dense
          rounded
          height="24px"
          @click:append="onSearch"
        ></v-text-field>
        <v-btn text color="#ffffff" to="/login">Login</v-btn>
        <btn-theme-change />
      </v-row>
    </v-app-bar>
    <v-main :class="{'sub-layout-body-container': true, 'lnb-showing': showSubPageLnbDrawer}">
      <sub-page-layout-lnb />
      <v-container class="sub-layout-content" fluid>
        <router-view class="sub-content-inner"></router-view>
      </v-container>
    </v-main>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import BtnThemeChange from '@/components/BtnThemeChange';
import SubPageLayoutLnb from './SubPageLayoutLnb';

export default {
  name: 'SubPageLayout',
  components: {
    BtnThemeChange,
    SubPageLayoutLnb,
  },
  data: () => ({
    searchValue: '',
    windowSize: {
      x: 0,
      y: 0,
    },
  }),
  computed: {
    ...mapState([
      'tabItems',
      'showSubPageLnbDrawer',
      'selectedCategory',
    ]),
    mobileBreakPoint() {
      return this.$vuetify.breakpoint.mobileBreakpoint;
    },
  },
  methods: {
    ...mapMutations([
      'toggleLnb',
      'setCategoryFromPath',
      'setCategoryFromTabClick',
      'setSubMenu',
    ]),
    onSearch() {
      if (this.searchValue) {
        alert(`${this.searchValue}??? ???????????????.`);
      } else {
        alert('???????????? ????????? ?????????.');
      }
    },
    onClickTab(item) {
     this.$store.commit('setCategoryFromTabClick', item.category);
    },
  },
  mounted() {
    // ?????? ????????? ??? ???????????? Drawer ????????? ???????????? ??? ??????
    this.$store.commit('setCategoryFromPath', this.$route.path);
  },
  beforeMount() {
    // ?????? ?????? ??? Lnb??? Show/Hide ????????? ??????. ?????????(md 1264) ?????? false, PC(lg ??????) ??? true
    this.windowSize = { x: window.innerWidth, y: window.innerHeight };
    // console.log('windowSize', this.windowSize.x, this.mobileBreakPoint);
    if (this.windowSize.x < this.mobileBreakPoint) {
      // breakpoint md ??????
      this.$store.commit('setLnbForCreated', false);
    }
    if (this.windowSize.x >= this.mobileBreakPoint) {
      // breakpoint lg ??????
      this.$store.commit('setLnbForCreated', true);
    }
  },
};
</script>

<style scoped>
.v-app-bar-title .app-logo {
  text-decoration: none;
  display: flex;
  align-items: center;
}

.v-app-bar-title a {
  color: #ffffff;
}

.v-app-bar-title .app-logo .v-icon {
  margin-right: 7px;
  font-size: 30px;
}

/* Lnb Show/hide */
.lnb {
  background: #fff;
  border-right: 1px solid #ddd;
  width: 240px;
  margin-left: -240px;
  flex-shrink: 0;
  flex-grow: 0;
  transition: 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
}
.lnb-showing .lnb {
  margin-left: 0;
}

.app-md .lnb,
.app-sm .lnb,
.app-xs .lnb   {
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 1;
};

</style>
