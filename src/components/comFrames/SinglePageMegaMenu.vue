<template>
  <div :class="`mega-menu ${selectedMenuIndex !== null ? 'showing' : ''}`">
    <div class="menu-inner-box max-width-box">
      <!-- <div class="img-box"><img src="@/assets/images/img_error.png" alt="" /></div> -->
      <div class="menu-box">
        <h2 class="category-title">{{ gnbMenuItems[selectedMenuIndex].title }}</h2>
        <ul class="menu-list">
          <li v-for="item in megaMenuData" :key="item.value">
            <router-link :to="item.src" class="menu-link">{{ item.title }}</router-link>
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
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  computed: {
    ...mapState('app', [
      'gnbMenuItems',
      'megaMenuData', // single page 메가메뉴 데이터
      // 'gnbMenuItems',
      'selectedMenuIndex',
    ]),
  },
  methods: {
    ...mapMutations('app', [
      'closeMegaMenu',
    ]),
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
    padding: 30px;
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
  margin-bottom: 10px;
  font-size: 1.8rem;
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
  li a {
    display: block;
    padding: 2px;
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
  .mega-menu-dim {
    top: $headerMobileHeight;
  }
}

// breakpoint xs : ~ 599px
.app-xs {
  .category-title {
    font-size: 1.25rem;
  }
}

</style>
