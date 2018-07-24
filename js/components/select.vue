<template>
    <select v-on:change="save()" v-model="selected">
        <option disabled value="">Please select one</option>
        <option v-for="option in options" v-bind:value="option.id">
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
                options: dataProvider.getSelectOptions(),
                selected: ''
            }
        },
        methods: {
            save: function(event)  {
                console.log(`saved ${this.selected}`);
            }
        }
    }
</script>

<style scoped>

</style>