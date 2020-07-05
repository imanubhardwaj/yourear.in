import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

const colors = Object.freeze({
    primary: '#383838',
    secondary: '#ffffff',
    accent: '#383838',
    error: '#b71c1c',
});

export default new Vuetify({
    theme: {
        themes: {
            light: {
                ...colors
            },
        },
    }
});
