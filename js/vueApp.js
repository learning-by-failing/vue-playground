import Vue from 'vue';
import Counter from './components/counter.vue';

const vueApp = new Vue(
    {
        el: '#root',
        render: counter => counter(Counter)
    }
);