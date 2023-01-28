<template>
  <div class="header-menu">
    <div v-for="(item, index) in gnbMenuItems" :key="item.value" class="btn-menu-item">
      <v-btn
        text
        color="primary"
        :class="{'btn-menu': true, 'v-btn--active': selectedMenuIndex === index}"
        @click.prevent="onClickMenu(index)"
        @keyup="onKeyup($event, index)"
        >
        {{ item.title }}
        <v-icon>mdi-chevron-down</v-icon>
      </v-btn>

      <div v-if="showMegaMenu && index === selectedMenuIndex" :class="`mega-menu ${selectedMenuIndex !== null ? 'showing' : ''}`">
        <div class="menu-inner-box max-width-box">
          <div class="menu-box">
            <h2 class="category-title">{{ gnbMenuItems[selectedMenuIndex].title }}</h2>
            <ul class="menu-list">
              <li v-for="megaItem in megaMenuData" :key="megaItem.value">
                <router-link :to="megaItem.src" class="menu-link">{{ megaItem.title }}</router-link>
              </li>
            </ul>
            <button class="btn-menu-close" @click="closeMegaMenu" title="메뉴닫기">
              <v-icon>mdi-close</v-icon>
              <!-- Close -->
            </button>
          </div>
        </div>
        <!-- <button class="mega-menu-dim" v-if="showMegaMenu" @click="closeMegamenu" >메뉴 닫기</button> -->
        <div class="mega-menu-dim" @click="closeMegaMenu" @keydown="closeMegaMenu"></div>
      </div>

    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  data() {
    return {
      scrolled: false,
      lastScrollTop: 0,
      notHeaderMenuElems: [],
    };
  },
  computed: {
    ...mapState('app', [
      'gnbMenuItems',
      'showMegaMenu',
      'selectedMenuIndex',
      'megaMenuData', // single page 메가메뉴 데이터
    ]),
  },
  methods: {
    ...mapMutations('app', [
      'setMegaMenuData',
      'closeMegaMenu',
      'setShowMegaMenu',
      'setSelectedMenuIndex',
    ]),
    onClickMenu(clickMenuIndex) {
      if (this.selectedMenuIndex === null) {
        // 메뉴가 닫혀있는 상태에서 메뉴를 누른 경우
        this.setShowMegaMenu(true);
        this.setSelectedMenuIndex(clickMenuIndex);
        this.setMegaMenuData(clickMenuIndex);
        // this.$refs.megaMenu.focus();
      } else if (clickMenuIndex === this.selectedMenuIndex) {
        // 현재 열려있는 메뉴를 또 누른 경우 메뉴 닫음.
        this.setShowMegaMenu(false);
        this.setSelectedMenuIndex(null);
      } else {
        // 현재 열려있는 메뉴와 다른 메뉴를 누른 경우
        this.setSelectedMenuIndex(clickMenuIndex);
        this.setMegaMenuData(clickMenuIndex);
      }
    },
    onKeyup(e, focusMenuIndex) {
        // 키보드로 탭 키로 메뉴진입시 메가메뉴 오픈
        if (e.keyCode === 9 && !e.shiftKey) {
          console.log('focus', focusMenuIndex);
          this.onClickMenu(focusMenuIndex);
        }
    },
  },
  beforeMount() {
    this.closeMegaMenu();
  },
  beforeDestroy() {
    this.closeMegaMenu();

    // 메뉴 외 클릭 또는 포커스 시 메가 메뉴 닫기 clean up
    this.notMenuElems.forEach((elem) => {
      elem.removeEventListener('click', this.closeMegaMenu);
      elem.removeEventListener('focus', this.closeMegaMenu);
    });
  },
  mounted() {
    // 메뉴 외 클릭 또는 포커스 시 메가 메뉴 닫기
    this.notMenuElems = document.querySelectorAll('header button:not(.header-menu button), header  a:not(.header-menu a), header input');
    this.notMenuElems.forEach((elem) => {
      elem.addEventListener('click', this.closeMegaMenu);
      elem.addEventListener('focus', this.closeMegaMenu);
    });
  },
};
</script>

<style scoped lang="scss">
@import '@/scss/customVariables.scss';
.mega-menu {
  position: absolute;
  top: $headerNormalHeight - 1;
  left: 0;
  width: 100%;
  height: 0;
  background: #fff;
  text-align: left;
  .menu-inner-box {
    padding: 20px $boxHPadding_lg;
    display: none;
  }
  &.showing {
    border-top: 1px solid #ddd;
    height: 400px;
    .menu-inner-box {
      display: block;
    }
  }
}

.category-title {
  margin-bottom: 15px;
  font-size: 1.5rem; /* 24px */
}

.btn-menu-close {
  border: 1px solid #fff;
  position: absolute;
  background: #fff;
  right: 10px;
  bottom: 10px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.mega-menu-dim {
  position: fixed;
  left: 0;
  top: 64px;
  right: 0;
  bottom: 0;
  height: calc(100vh - 64px);
  background: rgba(0,0,0,0.5);
  z-index: -1;
  text-indent: -9999px;
  font-size: 0;
  overflow: hidden;
}

.menu-list {
  padding: 0;
  margin-left: -3px;
  width: auto;
  display: inline-block;
  li {
    margin-bottom: 3px;
  }
  li a {
    display: block;
    padding: 4px 5px;
    &:focus {
      background: #d6e7f7;
    }
  }
}

/********************************************
  breakpoint 반응형 처리
*********************************************/

/*** xs, sm, md 공통  ***/
.app-xs,
.app-sm,
.app-md {
  .mega-menu {
    top:  $headerMobileHeight - $headerNormalHeight;
  }
  .mega-menu-dim {
    top: $headerMobileHeight;
  }
}

.app-md {
  .menu-inner-box  {
    padding: 20px $boxHPadding_md;
  }
}

// breakpoint xs : ~ 599px
.app-xs,
.app-sm {
  .category-title {
    font-size: 1.25rem;
  }
  .menu-inner-box  {
    padding: 10px $boxHPadding_sm;
  }
}

.app-xs .menu-list {
  display: block;
}
</style>
