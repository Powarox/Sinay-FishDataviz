<template lang="html">
    <div id="liste-especes">
        <h2>liste especes ...</h2>
        <button @click="printData()">Log all fish</button>
    </div>
</template>

<script>
    export default {
        name: 'liste-especes',
        props: ['data'],
        methods: {
            printData() {
                console.log(this.data);
            }
        }
    }
</script>

<style lang="css" scoped>
    #liste-especes {

    }
</style>
