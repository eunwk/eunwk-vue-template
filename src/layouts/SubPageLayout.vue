<template>
  <div class="sub-page">
    <header>
        <h1 class="app-logo">
          <router-link to="/">
            <img src="@/assets/images/logo.png" alt="UI/UX" />
            Template
          </router-link>
        </h1>
        <div class="header-menu">
          <v-btn
          @click.stop="toggleLnb"
          color="#ffffff"
        ></v-btn>
        <v-tabs
          v-model="selectedIndex"
          dark
          slider-color="yellow"
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
        </div><!-- .header-menu // -->
        <div class="header-others">
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
        </div>
    </header>
    <v-main :class="{'sub-layout-body-container': true, 'lnb-showing': showSubPageLnbDrawer}">
      <sub-page-lnb />
      <v-container class="sub-layout-content" fluid>
        <router-view class="sub-content-inner"></router-view>
      </v-container>
    </v-main>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import BtnThemeChange from '@/components/BtnThemeChange';
import SubPageLnb from '@/components/comFrames/SubPageLnb';

export default {
  name: 'SubPageLayout',
  components: {
    BtnThemeChange,
    SubPageLnb,
  },
  data: () => ({
    searchValue: '',
    windowSize: {
      x: 0,
      y: 0,
    },
    selectedIndex: '',
  }),
  computed: {
    ...mapState('app', [
      'tabItems',
      'showSubPageLnbDrawer',
      'selectedCategory',
    ]),
    mobileBreakPoint() {
      return this.$vuetify.breakpoint.mobileBreakpoint;
    },
  },
  methods: {
    ...mapMutations('app', [
      'toggleLnb',
      'setCategoryFromPath',
      'setCategoryFromTabClick',
    ]),
    onSearch() {
      if (this.searchValue) {
        alert(`${this.searchValue}를 검색합니다.`);
      } else {
        alert('검색어를 입력해 주세요.');
      }
    },
    onClickTab(item) {
      console.log('setMenu item', item.category);
     this.$store.commit('app/setCategoryFromTabClick', item.category);
    },
  },
  beforeMount() {
    // 화면 로딩 시 Lnb의 Show/Hide 기본값 지정. 모바일(md 1264) 이하 false, PC(lg 이상) 은 true
    this.windowSize = { x: window.innerWidth, y: window.innerHeight };
    // console.log('windowSize', this.windowSize.x, this.mobileBreakPoint);
    if (this.windowSize.x < this.mobileBreakPoint) {
      // breakpoint md 이하
      this.$store.commit('app/setLnbForCreated', false);
    }
    if (this.windowSize.x >= this.mobileBreakPoint) {
      // breakpoint lg 이상
      this.$store.commit('app/setLnbForCreated', true);
    }
  },
  beforeCreate() {
    this.$store.commit('app/setCategoryFromPath', this.$route.path);
  },
};
</script>

<style scoped lang="scss">
@import '@/scss/customVariables.scss';
.sub-page {
  header {
    background: $primary;
    height: 64px;
    display: flex;
    align-items: center;
    padding: 0px 30px;
  }
  .header-menu {
    margin-right: auto;
    .btn-menu:not(:last-child) {
      margin-right: 10px;
    }
  }
  .header-others {
    margin-left: 20px;
    justify-self: flex-end;
    a {
      margin-right: 5px;
    }
  }
}
.app-logo a {
  text-decoration: none;
  display: flex;
  align-items: center;
  font-size: 20px;
  margin-right: 40px;
  color: #fff;
  text-shadow: 1px 0 0 #333;
  img {
    margin-right: 10px;
    width: 50px;
  }
}

/* Lnb Show/hide */
.lnb {
  background: #fff;
  border-right: 1px solid #ddd;
  width: 260px;
  margin-left: -260px;
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
