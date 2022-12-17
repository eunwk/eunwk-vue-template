import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
// import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            // background: '#FFFFFF',
            // primary: '#25316A',
            // secondary: '#b0bec5',
            // accent: '#25316A',
            // error: '#E86674',
            // orange: '#FF7A0D',
            // golden: '#A68C59',
            // badge: '#F5528C',
            // customPrimary: '#085294',
          },
          dark: {
            // primary: '#085294',
          },
        },
      },
});
