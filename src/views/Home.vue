<template lang="html">
    <div id="home">
        <ListEspeces/>
    </div>
</template>

<script>
    import ListEspeces from '../components/liste-especes.vue';

    export default {
        name: 'Home',
        components: {
            ListEspeces,
        },
    }
</script>

<style lang="css" scoped>
    #home {
        padding: 30px;
    }
</style>
