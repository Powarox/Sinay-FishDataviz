<template lang="html">
    <div id="detailsView">
        <h1>Details page ...</h1><br>
        <p>Fao code : {{ this.data.faoCode }}</p><br>
        <p>Order : {{ this.data.order }}</p>
        <p>Family : {{ this.data.family }}</p><br>
        <p>French Name : {{ this.data.frenchName }}</p>
        <p>English Name : {{ this.data.englishName }}</p>
        <p>Spanish Name : {{ this.data.spanishName }}</p><br>
        <p>Scientific Name : {{ this.data.scientificName }}</p>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        name: 'DetailsView',
        props: ['id'],
        data() {
            return {
                result: {},
            }
        },
        methods: {

        },
        computed: {
            ...mapGetters(['getData']),
            data() {
                return this.getData[this.id];
            },
        }
    }
</script>

<style lang="css" scoped>
    #detailsView {
        padding: 30px;
    }
</style>
