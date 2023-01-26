<template>
  <div class="header-menu">
    <div v-for="item in gnbMenuItems" :key="item.value" class="btn-menu-item">
      <v-btn
        text
        color="primary"
        :class="{'btn-menu': true, 'v-btn--active': selectedCategory === item.category}"
        @click.prevent="onClickMenu(item.category)"
        @keyup="onKeyup($event, item.category)"
        >
        {{ item.title }}
        <v-icon>mdi-chevron-down</v-icon>
      </v-btn>
      <single-page-mega-menu
        :selectedCategory="selectedCategory"
        v-if="showMegaMenu && item.category === selectedCategory"
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
      notHeaderMenuElems: [],
    };
  },
  computed: {
    ...mapState('app', [
      'gnbMenuItems',
      'showMegaMenu',
      'selectedCategory', // 현재 선택되어 있는 메뉴
    ]),
  },
  methods: {
    ...mapMutations('app', [
      'setCategoryFromMenuClick',
      'closeMegaMenu',
      'setShowMegaMenu',
      'setSelectedCategory',
    ]),
    onClickMenu(clickMenu) {
      if (this.selectedCategory === null) {
        // 메뉴가 닫혀있는 상태에서 메뉴를 누른 경우
        this.setShowMegaMenu(true);
        this.setSelectedCategory(clickMenu);
        this.setCategoryFromMenuClick(clickMenu);
        // this.$refs.megaMenu.focus();
      } else if (clickMenu === this.selectedCategory) {
        // 현재 열려있는 메뉴를 또 누른 경우 메뉴 닫음.
        this.setShowMegaMenu(false);
        this.setSelectedCategory(null);
      } else {
        // 현재 열려있는 메뉴와 다른 메뉴를 누른 경우
        this.setSelectedCategory(clickMenu);
        this.setCategoryFromMenuClick(clickMenu);
      }
    },
    onKeyup(e, focusCategory) {
        // 키보드로 탭 키로 메뉴진입시 메가메뉴 오픈
        if (e.keyCode === 9 && !e.shiftKey) {
          this.onClickMenu(focusCategory);
        }
    },
  },
  beforeMount() {
    this.closeMegaMenu();
  },
  beforeDestroy() {
    console.log('beforeDestroy');
    this.setShowMegaMenu(false);

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
