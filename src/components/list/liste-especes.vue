<template lang="html">
    <div id="liste-especes">
        <section class="filter">
            <h3>Recherche</h3>
            <input v-model="filter">
            <button @click="change('faoCode')">Fao Code</button>
            <button @click="change('frenchName')">French Name</button>
        </section>

        <!-- <FilterTool/> -->

        <section class="contentList">
            <div class="row title">
                <h3>Fao Code</h3>
                <h3>French Name</h3>
                <h3>Scientific Name</h3>
            </div>
            <div class="row element" v-for="item in filters" v-bind:key="item.faoCode">
                <p>{{ item.faoCode }}</p>
                <p>{{ item.frenchName }}</p>
                <p>{{ item.scientificName }}</p>
            </div>
        </section>
    </div>
</template>

<script>
    // import FilterTool from '../filter/filter-tool.vue';
    import { mapGetters } from 'vuex';

    export default {
        name: 'ListEspeces',
        props: ['data'],
        components: {
            // FilterTool,
        },
        data() {
            return {
                filter: '',
                selected: 'faoCode',
            }
        },
        methods: {
            change(search) {
                this.selected = search;
            },
        },
        computed: {
            ...mapGetters(['getData']),

            filters(){
                if(this.filter !== '' && this.selected === 'faoCode') {
                    return this.data.filter(item => {
                        return item.faoCode.toLowerCase().includes(this.filter);
                    });
                }
                else if(this.filter !== '' && this.selected === 'frenchName') {
                    return this.data.filter(item => {
                        return item.frenchName.toLowerCase().includes(this.filter);
                    });
                }
                return this.data;
            },
        }
    }
</script>

<style lang="css" scoped>
    #liste-especes {
        display: grid;
    }

    .filter {
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
    }

    .contentList {
        margin: 50px 10%;
        display: grid;
        grid-template-columns: 1fr;
    }

    .contentList .row {
        padding: 20px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        align-items: center;
    }

    .contentList .title {
        color: red;
    }

    .contentList .element {
        border-bottom: 1px solid #BBB;
        font-size: 18px;
        transition: 0.4s;
        cursor: pointer;
    }

    .contentList .element:hover {
        background: #AAA;
        border-radius: 10px;
    }

</style>
