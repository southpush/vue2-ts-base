import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import { light as lightTheme } from './theme'

Vue.use(Vuetify);

const vuetify = new Vuetify({
    theme: {
        themes: {
            light: lightTheme
        },
        options: {
            customProperties: true
        }
    }
})

export default vuetify;

export const themes = vuetify.userPreset.theme?.themes;

export const dark = vuetify.userPreset.theme?.themes?.dark;

export const light = vuetify.userPreset.theme?.themes?.light;
