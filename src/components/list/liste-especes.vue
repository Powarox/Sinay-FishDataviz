<template lang="html">
    <div id="liste-especes">
        <FilterTool  v-model:filter="filter" v-model:selected="selected"/>

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
    import FilterTool from '../filter/filter-tool.vue';
    import { mapGetters } from 'vuex';

    export default {
        name: 'ListEspeces',
        props: ['data'],
        components: {
            FilterTool,
        },
        data() {
            return {
                filter: '',
                selected: 'faoCode',
            }
        },
        methods: {

        },
        computed: {
            ...mapGetters(['getData']),

            filters(){
                console.log(this.selected);
                console.log(this.filter);
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
        font-size: 22px;
        border-bottom: 1px solid #BBB;
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
