<template>
  <div  :class="{'priod-date d-flex': double, 'single-date': !double}">
  <v-menu
    ref="menu1"
    v-model="menu1"
    :close-on-content-click="false"
    :return-value.sync="startDate"
    transition="scale-transition"
    offset-y
    min-width="auto"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-text-field
        v-model="startDate"
        :label="label"
        append-icon="mdi-calendar"
        v-bind="attrs"
        v-on="on"
      ></v-text-field>
    </template>
    <v-date-picker
      v-model="startDate"
      no-title
      scrollable
    >
      <v-spacer></v-spacer>
      <v-btn
        text
        color="primary"
        @click="menu1 = false"
      >
        Cancel
      </v-btn>
      <v-btn
        text
        color="primary"
        @click="$refs.menu1.save(startDate)"
      >
        OK
      </v-btn>
    </v-date-picker>
  </v-menu>
  <v-menu
    ref="menu2"
    v-model="menu2"
    :close-on-content-click="false"
    :return-value.sync="endDate"
    transition="scale-transition"
    offset-y
    v-if="double"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-text-field
        v-model="endDate"
        label=" ~"
        append-icon="mdi-calendar"
        v-bind="attrs"
        v-on="on"
        class="date-picker"
      ></v-text-field>
    </template>
    <v-date-picker
      v-model="endDate"
      no-title
      scrollable
    >
      <v-spacer></v-spacer>
      <v-btn
        text
        color="primary"
        @click="menu2 = false"
      >
        Cancel
      </v-btn>
      <v-btn
        text
        color="primary"
        @click="$refs.menu2.save(endDate)"
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
    defaultDate: {
      type: String,
      default: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
    },
    from: {
      type: String,
      default: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
    },
    to: {
      type: String,
      default: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
    },
  },
  data() {
    return {
      singleDate: this.defaultDate,
      startDate: this.from,
      endDate: this.to,
      menu1: false,
      menu2: false,
      modal: false,
    };
  },
  created() {
    // props are exposed on `this`
    // console.log(this.defaultDate, this.date);
  },
};
</script>

<style>
</style>
