<template>
  <div class="sub-page">
    <header-bar headerType="sub-page" />
    <div class="body-container">
      <sub-page-lnb />
      <div class="contents-box">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import SubPageLnb from '@/components/comFrames/SubPageLnb';
import HeaderBar from '@/components/comFrames/HeaderBar';

export default {
  name: 'SubPageLayout',
  components: {
    SubPageLnb,
    HeaderBar,
  },
  data: () => ({
    // windowSize: {
    //   x: 0,
    //   y: 0,
    // },
  }),
  computed: {
    ...mapState('app', [
      'showSubPageLnbDrawer',
      // 'selectedCategory',
    ]),
    // mobileBreakPoint() {
    //   return this.$vuetify.breakpoint.mobileBreakpoint;
    // },
  },
  methods: {
    ...mapMutations('app', [
      // 'toggleLnb',
      // 'setCategoryFromPath',
      'setCategoryFromMenuClick',
      // 'setLnbForCreated',
    ]),
  },
  beforeMount() {
    // // 화면 로딩 시 Lnb의 Show/Hide 기본값 지정. 모바일(md 1264) 이하 false, PC(lg 이상) 은 true
    // this.windowSize = { x: window.innerWidth, y: window.innerHeight };
    // // console.log('windowSize', this.windowSize.x, this.mobileBreakPoint);
    // if (this.windowSize.x < this.mobileBreakPoint) {
    //   // breakpoint md 이하
    //   this.setLnbForCreated(false);
    // }
    // if (this.windowSize.x >= this.mobileBreakPoint) {
    //   // breakpoint lg 이상
    //   this.setLnbForCreated(true);
    // }

    // 서브화면 진입 시 현재 카테고리 세팅
  },
  beforeCreate() {
    // this.setCategoryFromPath(this.$route.path);
  },
};
</script>

<style scoped lang="scss">
@import '@/scss/customVariables.scss';

.sub-page {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 100vh;
  // border: 2px solid green;

  .body-container {
    display: flex;
    flex: 1 1 auto;
    position: relative;
    height: 100px;
  }
  .contents-box {
    padding: 20px;
    flex: 1 1 auto;
    overflow: auto;
  }
}

/* Lnb Show/hide */
.lnb {
  background: #fff;
  border-right: 1px solid #ddd;
  width: 260px;
  flex-shrink: 0;
  flex-grow: 0;
  transition: 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
}
.lnb-showing .lnb {
  margin-left: 0;
}

// .app-md .lnb,
// .app-sm .lnb,
// .app-xs .lnb   {
//   position: absolute;
//   top: 0;
//   bottom: 0;
//   z-index: 1;
// };

.v-tabs {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 400px;
}

</style>
