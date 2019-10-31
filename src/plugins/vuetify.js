import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify); 

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
  },
  theme: {
    dark: true,
    themes: {
      dark: {
        primary: "#15202B",
        secondary: "#15202B",
        background: "#202040",
        accent: "#BB86FC",
      }
    }
  }
});