<template>
  <div :class="{'section-title-area':true, box:box}">
    <div :class="computeDepth"><v-icon v-if="icon" class="mr-2">{{ icon }}</v-icon>{{ title }}</div>
    <div class="section-extra-area">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SectionTitle',
  props: {
    title: {
      type: String,
      default: '',
    },
    depth: {
      type: String,
      default: '1',
    },
    icon: {
      type: String,
      default: null,
    },
    box: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
  }),
  computed: {
    computeDepth() {
      return `section-title depth-${this.depth}`;
    },
  },
  methods: {
  },
};
</script>

<style lang="scss">
.section-title-area {
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 28px;
  &.box {
    padding: 5px 8px 5px 10px;
    background: #f1f1f1;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
  }
  .section-title {
    margin-right: 10px;
    font-weight: 500;
    &.depth-1 {
      font-size: 18px;
    }
    &.depth-2 {
      font-size: 16px;
    }
    &.depth-3 {
      font-size: 16px;
      font-weight: 400;
    }
    &.depth-4 {
      font-size: 14px;
      font-weight: 400;
    }
  }
}

.section-extra-area {
  display: flex;
  align-items: center;
}

.section-extra-area>*:not(:last-child) {
  margin-right: 5px;
}
.section-extra-area>button {
  height: 28px !important;
}

.section-extra-area .v-input__slot[role='combobox'] {
  height: 28px;
  min-height: 28px !important;
}

.section-extra-area .v-input__slot[role='combobox'] .v-input__append-inner {
  align-self: center;
  margin-top: 0 !important;
}

.section-extra-area .v-text-field--outlined.v-input--dense .v-label {
  top: auto;
}

</style>
