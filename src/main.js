import Vue from 'vue'
import main_page from './main_page.vue'
import controls from './controls.vue'
import bus from './bus.vue'
import logs from './logs.vue'
import editor from './editor.vue'
import drivers from './file_editors/drivers.vue'
import event_scripts from './file_editors/event_scripts.vue'
import timer_scripts from './file_editors/timer_scripts.vue'
import web_scripts from './file_editors/web_scripts.vue'
import user_html from './file_editors/user_html.vue'


import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
Vue.use(Vuetify, {
    theme: {
        primary: "#124191",
        secondary: "#1976D2",
        accent: "#80D8FF",
        error: "#B71C1C",
        warning: "#FBC02D",
        info: "#2196f3",
        success: "#4caf50"
    }
})

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import fontawesome from '@fortawesome/fontawesome'
import solid from '@fortawesome/fontawesome-free-solid'
import faDatabase from '@fortawesome/fontawesome-free-solid/faDatabase'
fontawesome.library.add(solid.faDatabase)

import 'material-design-icons-iconfont/dist/material-design-icons.css'

const router = new VueRouter({
    routes: [{
        path: '/bus',
        component: bus
    }, {
        path: '/logs',
        component: logs
    }, {
        path: '/files/drivers',
        component: drivers
    }, {
        path: '/files/event_scripts',
        component: event_scripts
    }, {
        path: '/files/web_scripts',
        component: web_scripts
    }, {
        path: '/files/timer_scripts',
        component: timer_scripts
    }, {
        path: '/files/user_html',
        component: user_html
    }, {
        path: '/controls',
        component: controls,
    }, {
        path: '/editor',
        component: editor
    }, {
        path: '*',
        redirect: '/bus'
    }]
})



new Vue({
    el: '#app',
    router,
    render: h => h(main_page)
})