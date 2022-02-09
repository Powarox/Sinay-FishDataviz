<template lang="html">
    <div id="card-especes">
        <FilterTool  v-model:filter="filter" v-model:selected="selected"/>

        <section class="contentCard">
            <div class="card" v-for="item in filters" v-bind:key="item.faoCode">
                <DetailsCard
                    :faoCode="item.faoCode"
                    :scientificName="item.scientificName"
                    :family="item.family"
                    :order="item.order"
                    :englishName="item.englishName"
                    :frenchName="item.frenchName"
                    :spanishName="item.spanishName"
                />
            </div>
        </section>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import DetailsCard from './details-card.vue';
    import FilterTool from '../filter/filter-tool.vue';

    export default {
        name: 'CardEspeces',
        props: ['data'],
        components: {
            DetailsCard, FilterTool,
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
    #card-especes {
        display: grid;
    }

    .contentCard {
        margin-top: 50px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 40px;
    }

    @media (max-width: 1450px){
        .contentCard {
            grid-template-columns: 1fr 1fr;
        }
    }

    @media (max-width: 1000px){
        .contentCard {
            grid-gap: 20px;
        }
    }

    @media (max-width: 950px){
        .contentCard {
            grid-template-columns: 1fr;
        }
    }

    @media (max-width: 450px){
        .contentCard {
            grid-template-columns: 1fr;
        }
    }
</style>
