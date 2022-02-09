<template lang="html">
    <div id="liste-especes">
        <!-- <section class="filter">
            <h3>Recherche</h3>
            <input type="text" name="" value="">
            <button type="button" name="button">Search</button>
            <button type="button" name="button">Search</button>
            <button type="button" name="button">Search</button>
        </section> -->

        <FilterTool/>

        <section class="contentList">
            <div class="list" v-for="item in this.data" v-bind:key="item.faoCode">
                <h3>{{ item.faoCode }}</h3>
                <h3>{{ item.frenchName }}</h3>
                <h3>{{ item.scientificName }}</h3>
            </div>
        </section>
    </div>
</template>

<script>
    import FilterTool from '../filter/filter-tool.vue';

    export default {
        name: 'ListEspeces',
        props: ['data'],
        components: {
            FilterTool,
        },
        methods: {

        }
    }
</script>

<style lang="css" scoped>
    #liste-especes {
        display: grid;
    }

    i {
        color: #333;
        width: 100px;
        font-size: 30px;
    }

    /* .filter {
        width: 80%;
        top: 17%;
        left: 0%;
        margin: 20px 10%;
        padding: 30px 20px;
        position: absolute;
        display: grid;
        grid-template-columns: 1fr 2fr 1fr 1fr 1fr;
        grid-gap: 10px;
        background: #FFF;
        border-radius: 10px;
        box-shadow: inset 0 -1px 0 0 rgb(0 0 0 / 10%), 0 2px 5px 0 rgb(51 51 51 / 20%);
    } */

    .contentList {
        margin: 50px 10%;
        display: grid;
        grid-template-columns: 1fr;
    }

    .contentList .list {
        padding: 20px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        align-items: center;
        border-bottom: 1px solid #BBB;
        transition: 0.4s;
        cursor: pointer;
    }

    .contentList .list:hover {
        background: #AAA;
        border-radius: 10px;
    }

</style>
