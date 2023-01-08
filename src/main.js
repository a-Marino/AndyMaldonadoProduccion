/* eslint-disable no-unused-vars */
//import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles.css'
import './assets/tailwind.css'
import * as Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueCookies from 'vue-cookies'

const app = Vue.createApp(App).use(router).use(VueAxios, axios, VueCookies).mount('#app')






