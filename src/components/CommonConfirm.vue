<template>
  <v-card>
    <v-card-title class="text-h5">Confirm</v-card-title>
    <v-card-text><v-icon v-if="type" :color="setType.color">{{setType.icon}}</v-icon>{{msg}}</v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        @click="bindClose"
      >
        취소
      </v-btn>
      <v-btn
        color="secondary"
        @click="bindOk"
      >
        확인
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '확인',
    },
    msg: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: null,
    },
    bindClose: {
        type: Function,
        default: () => { },
    },
    bindOk: {
        type: Function,
        default: () => { },
    },
  },
  computed: {
    setType() {
      switch (this.type) {
        case 'delete':
          return {
            color: 'red lighten-1',
            icon: 'mdi-alert-box',
          };
        case 'check':
          return {
            color: 'primary',
            icon: 'mdi-check-circle',
          };
        default:
          return null;
      }
    },
  },
};

</script>

<style scoped lang="scss">
.v-card__text {
  font-size: 16px;
  display: flex;
  align-items: center;
}
.v-icon {
  margin-right: 10px;
  font-size: 32px;
}
</style>
