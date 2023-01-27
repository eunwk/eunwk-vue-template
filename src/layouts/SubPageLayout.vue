<template>
  <div class="sub-page">
    <header-bar headerType="sub-page" />
    <div :class="{'body-container': true, 'lnb-hidden': $vuetify.breakpoint.mdAndDown && !showLnb, 'lnb-overlay': $vuetify.breakpoint.mdOnly && isLnbOverlay}">
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
      'showLnb',
      'isLnbOverlay',
    ]),
  },
  methods: {
    ...mapMutations('app', [
      // 'toggleLnb',
    ]),
  },
  beforeMount() {
    // // 화면 로딩 시 Lnb의 Show/Hide 기본값 지정. 모바일(md 1264) 이하 false, PC(lg 이상) 은 true
    // this.windowSize = { x: window.innerWidth, y: window.innerHeight };
    // // console.log('windowSize', this.windowSize.x, this.mobileBreakPoint);
    // if (this.windowSize.x < this.mobileBreakPoint) {
    //   // breakpoint md 이하
    // }
    // if (this.windowSize.x >= this.mobileBreakPoint) {
    //   // breakpoint lg 이상
    // }

    // 서브화면 진입 시 현재 카테고리 세팅
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
    overflow: hidden;
  }

  .lnb {
    background: #fff;
    border-right: 1px solid #ddd;
    width: 260px;
    flex-shrink: 0;
    flex-grow: 0;
    transition: 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
    overflow: hidden;
  }
  .contents-box {
    padding: 20px;
    flex: 1 1 auto;
    overflow: auto;
  }
}

/* Lnb Overlay */
.app-xs,
.app-sm,
.app-md .body-container.lnb-overlay {
  .lnb {
    position: absolute;
    height: 100%;
    z-index: 1;
    box-shadow: 0 0 15px rgba(0, 0, 0, 15%);
  }
}

/* Lnb Show/hide */
.lnb-hidden .lnb {
  width: 0;
  border-right: 0;  
}

.v-tabs {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 400px;
}

</style>
