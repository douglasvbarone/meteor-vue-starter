import './main.html';
import Vue from 'vue';
import Vuetify from 'vuetify'
import VueMeteorTracker from 'vue-meteor-tracker'

import 'vuetify/dist/vuetify.min.css'
// import 'material-design-icons-iconfont/dist/material-design-icons.css'

import {router} from '../imports/router'

Vue.use(Vuetify)

Vue.use(VueMeteorTracker)

// The App
import App from '../imports/ui/App';

Meteor.startup(() => {
    new Vue({
        router,
        ...App
    }).$mount('#app');
});
