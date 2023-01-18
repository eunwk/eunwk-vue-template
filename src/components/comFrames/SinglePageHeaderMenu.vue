<template>
  <div class="header-menu">
    <div v-for="item in gnbMenuItems" :key="item.value" class="btn-menu-item">
      <v-btn
        text color="primary"
        :class="{'btn-menu': true, 'v-btn--active': currentMenu === item.category}"
        @click.prevent="onClickMenu(item.category)"
        @keyup="onKeyup($event, item.category)"
        @keydown="onKeydown($event, item.category)"
        ref="item.category"
      >
        {{ item.title }}
        <v-icon>mdi-chevron-down</v-icon>
      </v-btn>
      <single-page-mega-menu
        :currentMenu="currentMenu"
        v-if="showMegaMenu && item.category === currentMenu"
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import SinglePageMegaMenu from '@/components/comFrames/SinglePageMegaMenu';

export default {
  components: {
    SinglePageMegaMenu,
  },
  data() {
    return {
      scrolled: false,
      lastScrollTop: 0,
    };
  },
  computed: {
    ...mapState('app', [
      'gnbMenuItems',
      'showMegaMenu',
      'currentMenu', // 현재 선택되어 있는 메뉴
    ]),
  },
  methods: {
    ...mapMutations('app', [
      'setCategoryFromTabClick',
      'closeMegaMenu',
      'setShowMegaMenu',
      'setCurrentMenu',
    ]),
    onClickMenu(clickMenu) {
      if (this.currentMenu === null) {
        // 메뉴가 닫혀있는 상태에서 메뉴를 누른 경우
        this.setShowMegaMenu(true);
        this.setCurrentMenu(clickMenu);
        this.setCategoryFromTabClick(clickMenu);
        // this.$refs.megaMenu.focus();
      } else if (clickMenu === this.currentMenu) {
        // 현재 열려있는 메뉴를 또 누른 경우 메뉴 닫음.
        this.setShowMegaMenu(false);
        this.setCurrentMenu(null);
      } else {
        // 현재 열려있는 메뉴와 다른 메뉴를 누른 경우
        this.setCurrentMenu(clickMenu);
        this.setCategoryFromTabClick(clickMenu);
      }
      return false;
    },
    onKeyup(e, focusCategory) {
        // 키보드로 탭 키로 메뉴진입시 메가메뉴 오픈
        if (e.keyCode === 9 && !e.shiftKey) {
          this.onClickMenu(focusCategory);
        }
    },
    onKeydown(e, focusCategory) {
      if (e.keyCode === 9 && e.shiftKey) {
        // 시프트 + 탭키로 나갈때 현재 열려진 카테고리 메뉴가 첫번째 메뉴이면 메가메뉴 닫기
        // 현재 열려진 카테고리의 index 찾기
        const index = this.gnbMenuItems.findIndex((v) => v.category === focusCategory);
        if (index === 0) {
          this.closeMegaMenu();
        }
      }
    },
  },
  beforeMount() {
    // 화면 로딩 시 Lnb의 Show/Hide 기본값 지정. 모바일(md 1264) 이하 false, PC(lg 이상) 은 true
    // this.windowSize = { x: window.innerWidth, y: window.innerHeight };
    // console.log('windowSize', this.windowSize.x, this.mobileBreakPoint);
    // if (this.windowSize.x < this.mobileBreakPoint) {
    //   // breakpoint md 이하
    //   this.$store.commit('app/setLnbForCreated', false);
    // }
    // if (this.windowSize.x >= this.mobileBreakPoint) {
    //   // breakpoint lg 이상
    //   this.$store.commit('app/setLnbForCreated', true);
    // }
  },
};
</script>

<style scoped lang="scss">
@import '@/scss/customVariables.scss';

/******************************
  헤더 공통 스타일
*******************************/
header {
  // border-bottom: 1px solid $borderColor;
  height: 64px;
  position: sticky;
  top: 0;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: saturate(200%) blur(10px);
  z-index:2;
  transition: 0.4s;
  .max-width-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    .header-menu {
      margin-right: auto;
      .btn-menu-item:not(:last-child) {
        margin-right: 10px;
      }
    }
    .header-others {
      margin-left: 20px;
      justify-self: flex-end;
      display: inline-flex;
      align-items: center;
      a {
        margin-right: 5px;
      }
      .v-input {
        margin-right: 10px;
        margin-top: 0;
      }
    }
  }
  .app-logo a {
    text-decoration: none;
    display: flex;
    align-items: center;
    font-size: 20px;
    margin-right: 40px;
    img {
      margin-right: 10px;
      width: 50px;
    }
  }
}

.btn-menu-item {
  display: inline-block;
}
.btn-menu {
  &:hover {
    background: #edf4fb;
  }
}

header.scrolled {
  top: -64px;
}

/******************************
  .single-page 전용 스타일
*******************************/
header[data-header-type="single-page"] {
  .btn-menu {
    &:hover {
      background: #edf4fb;
    }
    padding-right: 7px !important;
    &.v-btn--active .v-icon {
      transform: rotate(180deg);
    }
  }
}

/******************************
  .sub-page 전용 스타일
*******************************/
header[data-header-type="sub-page"] {
  // background: #19509f;
  // color: $textColorWhite;
  // background: #ccc;
  padding: 0 30px;
  border-bottom: 1px solid #ddd;
  .mega-menu {
    border-top: 0px none;
  }
  h1, a, button {
    // color: $textColorWhite;
  }
}
</style>
