import Vue from 'vue';
import Counter from './components/counter.vue';
import Select from './components/select.vue';

Vue.component('mauri-counter', Counter);
Vue.component('mauri-select', Select);
const vueApp = new Vue(
    {
        el: '#root',
        //render: counter => counter(Counter)
    }
);