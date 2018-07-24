<template>
    <button v-on:click="increment">You clicked me {{ count }} times.</button>
</template>

<script>
    export default {
        data: function () {
            return {
                count: 0
            }
        },
        methods: {
            increment: function(event) {
                this.count++;
            }
        }
    }
</script>