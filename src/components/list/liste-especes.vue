<template lang="html">
    <div id="liste-especes">
        <FilterTool  v-model:filter="filter" v-model:selected="selected"/>

        <section class="contentList">
            <div class="row title">
                <h3>Fao Code</h3>
                <h3>French Name</h3>
                <h3>Scientific Name</h3>
            </div>
            <div v-for="(item, id) in filters" v-bind:key="item.faoCode">
                <router-link class="row element" :to="{name: 'DetailsView', params: { code: item.faoCode, id: id }}">
                    <p>{{ item.faoCode }}</p>
                    <p>{{ item.frenchName }}</p>
                    <p>{{ item.scientificName }}</p>
                </router-link>
            </div>
        </section>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import FilterTool from '../filter/filter-tool.vue';

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
        computed: {
            ...mapGetters(['getData']),

            filters(){
                if(this.filter !== '' && this.selected === 'faoCode') {
                    return this.data.filter(item => {
                        return item.faoCode.toLowerCase().includes(this.filter.toLowerCase());
                    });
                }
                else if(this.filter !== '' && this.selected === 'frenchName') {
                    return this.data.filter(item => {
                        return item.frenchName.toLowerCase().includes(this.filter.toLowerCase());
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
        border-bottom: 2px solid var(--light-grey-color);
    }

    .contentList .element {
        color: var(--main-font-color);
        border-bottom: 2px solid var(--light-grey-color);
        font-size: 18px;
        transition: 0.4s;
        cursor: pointer;
    }

    .contentList .element:hover {
        background: var(--light-grey-color);
        border-radius: 10px;
    }

/* --- Responsive --- */
    @media (max-width: 1100px){
        .contentList {
            margin: 50px 5%;
        }
    }

    @media (max-width: 900px){
        .contentList {
            margin: 50px 0;
        }
    }
</style>
