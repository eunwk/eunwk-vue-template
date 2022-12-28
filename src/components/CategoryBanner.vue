<template>
  <div class="category-banner">
    <div class="title">{{ title }}</div>
    <P v-if="description">{{ description }}</P>
    <slot v-if="hasSlotData" />
  </div>
</template>

<script>
export default {
  name: 'CategoryBanner',
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: null,
    },
    compact: {
      type: Boolean,
      default: false,
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
};
</script>

<style scoped lang="scss" >
.category-banner {
  height: 120px;
  background: url('@/assets/images/category_write.png') no-repeat top right 20px;
  background-size: auto 200%;
  margin-bottom: 20px;
  padding: 20px 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .title {
    font-size: 32px !important;
    font-weight: 400;
  }
  p {
    margin-top: 5px;
    margin-bottom: 0;
  }
}

</style>
