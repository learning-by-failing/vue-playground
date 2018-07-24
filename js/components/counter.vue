<template>
    <button @click="increment">You clicked me {{ count }} times.</button>
</template>

<script>
    export default {
        name: 'counter',
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