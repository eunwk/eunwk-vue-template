<template>
  <div :class="`mega-menu ${currentMenu !== null ? 'showing' : ''}`">
    <div class="menu-inner-box max-width-box">
      <!-- <div class="img-box"><img src="@/assets/images/img_error.png" alt="" /></div> -->
      <div class="menu-box">
        <h2>{{ selectedCategory }}</h2>
        <ul class="menu-list">
          <li v-for="item in selectedMenuData" :key="item.value">
            <router-link :to="item.src">{{ item.title }}</router-link>
          </li>
        </ul>
      </div>
    </div>
    <button class="mega-menu-dim" v-if="showMegaMenu" @click="closeMegamenu" >메뉴 닫기</button>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState('app', [
      'selectedCategory',
      'selectedMenuData', // 2뎁스 메뉴 데이터
    ]),
  },
  props: ['currentMenu', 'showMegaMenu', 'closeMegamenu'],
  // ,{
  //   currentMenu: {
  //     type: String,
  //     required: true,
  //   },
  //   showMegaMenu: {
  //     type: Boolean,
  //     required: true,
  //   },
  //   closeMegamenu: {
  //     type: Function,
  //     required: true,
  //   },
  // },
};
</script>

<style scoped lang="scss">
.mega-menu {
  background: #fff;
  position: absolute;
  top: 64px;
  left: 0;
  width: 100%;
  text-align: left;
  height: 0;
  // transition: 0.3s height;
  overflow: hidden;
  // display: none;
  .menu-inner-box {
    padding: 30px;
    display: none;
  }

  &.showing {
    height: 400px;
    border-top: 1px solid #ddd;
    .menu-inner-box {
      display: block;

      // .img-box {
      //   width: 200px;
      //   // background: red;
      //   margin-right: 20px;
      // }
    }
  }
}

h2 {
  margin-bottom: 10px;
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
  }
}
</style>
