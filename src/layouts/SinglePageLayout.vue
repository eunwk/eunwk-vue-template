<!-- eslint-disable brace-style -->
<template>
  <div class="single-page">
    <header-bar />
    <div class="body-container">
      <router-view></router-view>
    </div>
    <footer>
      <div class="max-width-box text-center">
        <p>Copyright © 2023 eunwk. All rights reserved. / email: eunwk@naver.com</p>
        <!-- <address>경기도 용인시 기흥구 보라동</address> -->
      </div>
    </footer>
  </div>
</template>

<script>
import HeaderBar from '@/components/comFrames/HeaderBar';

export default {
  name: 'SinglePageLayout',
  components: {
    HeaderBar,
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

  footer {
    padding-top: 30px;
    padding-bottom: 14px;
    background: #eee;
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
