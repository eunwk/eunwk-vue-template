<template>
  <section class="msg-box">
    <h1>{{ title }}</h1>
    <img :src="imageForType(type)" alt="not found" />
    <p v-if="desc" class="txt-description">{{ desc }}</p>
    <!-- <v-icon small v-if="!isThemeDark">mdi-white-balance-sunny</v-icon>
    <v-icon small v-else>mdi-star-crescent</v-icon> -->
    <div class="chidren-area" v-if="hasSlotData">
      <slot />
    </div>
  </section>
</template>

<script>
import img404 from '@/assets/images/img_404.png';
import imgEmpty from '@/assets/images/img_empty.png';
import imgNotice from '@/assets/images/img_notice.png';
import imgForbiden from '@/assets/images/img_auth.png';

export default {
  props: {
    title: {
      type: String,
      requierd: true,
    },
    desc: {
      type: String,
      default: null,
    },
    type: {
      type: String,
      default: 'information',
    },
  },
  data() {
    return {
    };
  },
  computed: {
    hasSlotData() {
      return this.$slots.default;
    },
  },
  methods: {
    imageForType(type) {
      switch (type) {
        case 'error':
          return img404;
        case 'empty':
          return imgEmpty;
        case 'forbidden':
          return imgForbiden;
        default:
          return imgNotice;
      }
    },
  },
};

</script>

<style >
.msg-box {
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 20px;
  padding: 40px 15px 50px 15px;
  text-align: center;
}

.msg-box h1 {
  margin-bottom: 10px;
}

.msg-box .txt-description {
  margin-bottom: 0;
  margin-top: 20px
}

.chidren-area {
  margin-top: 20px;
}

.chidren-area .v-btn {
  margin: 0 5px;
  max-width: 300px;
}

.chidren-area .v-btn--block {
  max-width: 300px;
  min-width: initial !important;
  width: 300px;
  margin: 0 auto;
}
</style>
