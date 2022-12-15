<template>
  <div>
    <section>
      <section-title title='Card Layout & breakpoint' depth="1">breakpoint: {{this.$vuetify.breakpoint.name}}</section-title>
        <v-row>
          <v-col cols="12" sm="6" md="4" v-for="item in cardList" :key="item.id" align-self="stretch">
          <v-card>
            <v-img
              height="150"
              src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
            ></v-img>
            <v-card-text>
              <div>{{ item.category }}</div>
              <p class="card-title text-h4 text--primary">{{ item.title }}</p>
              <p>{{ item.userName }}</p>
              <div class="card-content text--primary">{{ item.content }}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn
                text
                color="teal accent-4"
                @click="reveal = true"
              >
                Learn More
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </section>
  </div>
</template>

<script>
import SectionTitle from '@/components/SectionTitle.vue';

export default {
  name: 'VuetifyResponsive',
  components: {
    'section-title': SectionTitle,
  },
  data() {
    return {
    };
  },
  computed: {
    cardList() {
      return this.$store.state.cardList;
    },
  },
  methods: {
  },
};
</script>

<style scope>
.list-container {
  border: 1px solid red;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  margin-bottom: 30px;
}

.card-title {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.card-content {
  line-height: 1.3;
  max-height: 9.2em;
  white-space: normal;
  display: block;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  /* autoprefixer: off */
}

.v-card {
  height: 100%;
}

</style>
