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
      <single-page-mega-menu v-if="showMegaMenu && index === selectedMenuIndex" />
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
      notHeaderMenuElems: [],
    };
  },
  computed: {
    ...mapState('app', [
      'gnbMenuItems',
      'showMegaMenu',
      'selectedMenuIndex',
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

</style>
