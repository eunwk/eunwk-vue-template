<template>
  <!-- <v-navigation-drawer v-model="drawer" app clipped > -->
  <nav class="lnb">
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="text-h6">
          {{ selectedCategory }}
        </v-list-item-title>
        <v-list-item-subtitle> subtext </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-divider></v-divider>
    <v-list>
      <v-list-item-group v-model="selectedItem">
        <v-list-item
          v-for="item in selectedMenuData"
          :key="item.value"
          :to="item.src"
        >
          {{ item.title }}
        </v-list-item>
    </v-list-item-group>
    </v-list>
  </nav>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'SubPageLayoutLnb',
  computed: {
    ...mapState([
      'selectedCategory',
      'selectedMenuData',
    ]),
  },
  watch: {
    selectedMenuData(value, oldValue) {
      console.log(value, oldValue);
    },
  },
  data: () => ({
    selectedItem: 1,
  }),
  methods: {
  },
  mounted() {
    // 초기 선택된 탭 타이틀을 Drawer 상단에 넣기위에 값 저장
   // this.setSubMenuTitle();
  // this.setSubMenu();
  },
};
</script>

<style scoped>

</style>
