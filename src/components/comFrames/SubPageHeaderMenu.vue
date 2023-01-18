<template>
  <div class="header-menu">
      <div v-for="item in gnbMenuItems" :key="item.value" class="btn-menu-item">
        <v-btn
          text
          class="btn-menu"
          :key="item.value"
          href="#lnb"
          @click.prevent="onClickMenu(item.category)"
        >
          {{ item.title }}
        </v-btn>
      </div>
      currentMenu {{ currentMenu }}
    </div>
</template>

<script>
import { mapState } from 'vuex';
// import SinglePageMegaMenu from '@/components/comFrames/SinglePageMegaMenu';

export default {
  computed: {
    ...mapState('app', [
      'gnbMenuItems',
      'currentMenu', // 현재 선택되어 있는 메뉴
    ]),
  },
  methods: {
    onClickMenu(clickMenu) {
      console.log(clickMenu);
      // if (this.currentMenu === null) {
      //   // 메뉴가 닫혀있는 상태에서 메뉴를 누른 경우
      //   this.setShowMegaMenu(true);
      //   this.setCurrentMenu(clickMenu);
      //   this.setCategoryFromTabClick(clickMenu);
      //   // this.$refs.megaMenu.focus();
      // } else if (clickMenu === this.currentMenu) {
      //   // 현재 열려있는 메뉴를 또 누른 경우 메뉴 닫음.
      //   this.setShowMegaMenu(false);
      //   this.setCurrentMenu(null);
      // } else {
      //   // 현재 열려있는 메뉴와 다른 메뉴를 누른 경우
      //   this.setCurrentMenu(clickMenu);
      //   this.setCategoryFromTabClick(clickMenu);
      // }
    },
  },
  mounted() {
    // window.addEventListener('scroll', this.onScroll);
  },
};
</script>

<style scoped lang="scss">
@import '@/scss/customVariables.scss';

</style>
