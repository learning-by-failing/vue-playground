<template>
    <select v-on:change="incrementCounter()">
        <option v-for="option in options" :value="option.id" >
            {{ option.text }}
        </option>
    </select>
</template>

<script>
    import dataProvider from './services/dataProvider';

    export default {
        name: "mauri-select",
        data: function () {
            return {
                options: dataProvider.getSelectOptions()
            }
        },
        methods: {
            incrementCounter()  {
                alert('hi');
            }
        }
    }
</script>

<style scoped>

</style>