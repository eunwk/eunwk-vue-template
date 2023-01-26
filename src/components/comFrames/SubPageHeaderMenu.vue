<template>
  <div class="header-menu">
    <div v-for="item in gnbMenuItems" :key="item.value" class="btn-menu-item">
      <v-btn
        text
        color="primary"
        :class="{'btn-menu': true, 'v-btn--active': selectedCategory === item.category}"
        @click.prevent="onClickMenu(item.category)"
      >
        {{ item.title }}
      </v-btn>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

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
    },
  },
  mounted() {
   // console.log('this.selectedCategory', this.selectedCategory);
  },
  beforeMount() {
    console.log('beforeMount');
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
    this.closeMegaMenu();
  },
  // watch: {
  //   $route(to, from) {
  //    // console.log('여기실행', to, from);
  //     this.closeMegaMenu();
  //   },
  // },
};
</script>

<style scoped lang="scss">
@import '@/scss/customVariables.scss';

.header-menu {
  position: fixed;
  left: 0;
  width: 250px;
  top: 500px;
}
</style>
