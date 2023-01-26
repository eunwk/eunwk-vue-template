<!-- eslint-disable brace-style -->
<template>
  <div class="single-page">
    <header-bar />
    <div class="body-container">
      <router-view></router-view>
    </div>
    <footer-bar />
  </div>
</template>

<script>
import HeaderBar from '@/components/comFrames/HeaderBar';
import FooterBar from '@/components/comFrames/FooterBar';

export default {
  name: 'SinglePageLayout',
  components: {
    HeaderBar,
    FooterBar,
  },
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>

<style scoped lang="scss">
@import '@/scss/customVariables.scss';
.single-page {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;

  .body-container {
    flex: 1 1 auto;
  }
}
.btn-menu {
  display: inline-block;
  padding: 2px 5px 2px 10px;
  border-radius: 3px;
  transition: 0.2s;
  &:hover {
    background: #edf4fb;
  }
}

.btn-menu.active {
    background: #d6e7f7;
    .v-icon {
      transform: rotate(-180deg);
    }
  }

</style>
