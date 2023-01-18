<template>
  <div :class="`mega-menu ${currentMenu !== null ? 'showing' : ''}`">
    <div class="menu-inner-box">
      <!-- <div class="img-box"><img src="@/assets/images/img_error.png" alt="" /></div> -->
      <div class="menu-box">
        <h2>{{ selectedCategory }}</h2>
        <ul class="menu-list">
          <li v-for="item in selectedMenuData" :key="item.value">
            <router-link :to="item.src">{{ item.title }}</router-link>
          </li>
        </ul>
        <button class="btn-menu-close" @click="closeMegaMenu" @keydown="onCloseBtnKeydown($event)" title="메뉴닫기">
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
      'selectedCategory',
      'selectedMenuData', // 2뎁스 메뉴 데이터
      'gnbMenuItems',
      'currentMenu',
    ]),
  },
  methods: {
    ...mapMutations('app', [
      'closeMegaMenu',
    ]),
    onCloseBtnKeydown(e) {
      // 메뉴닫기 버튼에서 탭키로 나갈때 현재 열려진 카테고리 메뉴가 마지막 메뉴이면 메가메뉴 닫기
      if (e.keyCode === 9 && !e.shiftKey) {
        // 현재 열려진 카테고리의 index 찾기
        const index = this.gnbMenuItems.findIndex((v) => v.category === this.currentMenu);
        if (this.gnbMenuItems.length - 1 === index) {
          this.closeMegaMenu();
        }
      }
    },
  },
};

</script>

<style scoped lang="scss">
.mega-menu {
  position: absolute;
  top: 64px;
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

h2 {
  margin-bottom: 10px;
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
  // top: 0;
  // right: 10px;
  // width: 50px;
  // height: 24px;
  // font-size: 12px;
  // border-radius: 0px 0px 3px 3px;
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

</style>
