<template lang="html">
    <div id="liste-especes">
        <section class="filter">
            <h2>Filtre ...</h2>
        </section>

        <section class="contentCard">
            <div class="card" v-for="item in this.data" v-bind:key="item.faoCode">
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
    import DetailsCard from './details-card.vue';

    export default {
        name: 'liste-especes',
        props: ['data'],
        components: {
            DetailsCard,
        },
        methods: {
            printData() {
                console.log(this.data);
                console.log(this.data[0].order);
            }
        }
    }
</script>

<style lang="css" scoped>
    #liste-especes {
        display: grid;
    }

    .contentCard {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 40px;
    }
</style>
