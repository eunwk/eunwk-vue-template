<template>
  <div class="header-menu">
      <div v-for="item in gnbMenuItems" :key="item.value" class="btn-menu-item">
        <v-btn
          text
          color="primary"
          :class="`btn-menu ${item.category === selectedCategory ? 'v-btn--active' : ''}`"
          :key="item.value"
          @click.prevent="onClickMenu(item.category)"
        >
          {{ item.title }}
        </v-btn>
      </div>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
// import SinglePageMegaMenu from '@/components/comFrames/SinglePageMegaMenu';

export default {
  computed: {
    ...mapState('app', [
      'gnbMenuItems',
      'selectedCategory', // 현재 선택되어 있는 메뉴
    ]),
  },
  methods: {
    ...mapMutations('app', [
      'setCategoryFromMenuClick',
      'setSelectedCategory',
    ]),
    onClickMenu(clickMenu) {
      console.log(clickMenu);
      this.setSelectedCategory(clickMenu);
      this.setCategoryFromMenuClick(clickMenu);
      // if (clickMenu === this.selectedCategory) {
      //   // 현재 열려있는 메뉴를 또 누른 경우 메뉴 닫음.
      //   this.setShowMegaMenu(false);
      //   this.setSelectedCategory(null);
      // } else {
      //   // 현재 열려있는 메뉴와 다른 메뉴를 누른 경우
      //   this.setSelectedCategory(clickMenu);
      //   this.setCategoryFromMenuClick(clickMenu);
      // }
    },
  },
  mounted() {
   // console.log('this.selectedCategory', this.selectedCategory);
  },
};
</script>

<style scoped lang="scss">
@import '@/scss/customVariables.scss';

</style>
