<template>
  <div :class="{'priod-date d-flex': double, 'single-date': !double}">
  <v-menu
    ref="menu"
    v-model="menu"
    :close-on-content-click="false"
    :return-value.sync="date"
    transition="scale-transition"
    offset-y
    min-width="auto"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-text-field
        v-model="date"
        :label="label"
        append-icon="mdi-calendar"
        v-bind="attrs"
        v-on="on"
        class="date-picker"
      ></v-text-field>
    </template>
    <v-date-picker
      v-model="date"
      no-title
      scrollable
    >
      <v-spacer></v-spacer>
      <v-btn
        text
        color="primary"
        @click="menu = false"
      >
        Cancel
      </v-btn>
      <v-btn
        text
        color="primary"
        @click="$refs.menu.save(date)"
      >
        OK
      </v-btn>
    </v-date-picker>
  </v-menu>
  <v-menu
    ref="menu"
    v-model="menu"
    :close-on-content-click="false"
    :return-value.sync="date"
    transition="scale-transition"
    offset-y
    min-width="auto"
    v-if="double"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-text-field
        v-model="date"
        label=" ~"
        append-icon="mdi-calendar"
        v-bind="attrs"
        v-on="on"
        class="date-picker"
      ></v-text-field>
    </template>
    <v-date-picker
      v-model="date"
      no-title
      scrollable
    >
      <v-spacer></v-spacer>
      <v-btn
        text
        color="primary"
        @click="menu = false"
      >
        Cancel
      </v-btn>
      <v-btn
        text
        color="primary"
        @click="$refs.menu.save(date)"
      >
        OK
      </v-btn>
    </v-date-picker>
  </v-menu>
</div>
</template>

<script>
export default {
  name: 'DatePicker',
  // inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: '조회일',
    },
    double: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
    menu: false,
    modal: false,
    menu2: false,
  }),
};
</script>

<style>
.date-picker {
  border: 1px solid green;
}
/* .date-picker input{
  min-width: 120px;
  max-width: 160px;
} */

</style>
