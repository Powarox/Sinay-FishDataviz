<template lang="html">
    <div id="liste-especes">
        <section class="filter">
            <h2>Filtre ...</h2>
            <button @click="printData()">Print test</button>
        </section>

        <section class="contentCard">
            <div class="card" v-for="item in this.data" v-bind:key="item.faoCode">
                {{ item.faoCode }}

                <!-- englishName: "European eel"
                family: "Anguillidae"
                faoCode: "ELE"
                frenchName: "Anguille d'Europe"
                order: "Anguilliformes"
                scientificName: "Anguilla anguilla"
                spanishName: "Anguila europea" -->

                <!-- <DetailsCard
                    :faoCode="this.data.order"
                    :scientificName=""
                    :family=""
                    :order=""
                    :englishName=""
                    :frenchName=""
                    :spanishName=""
                /> -->
            </div>
        </section>
    </div>
</template>

<script>
    // import DetailsCard from './details-card.vue';

    export default {
        name: 'liste-especes',
        props: ['data'],
        components: {
            // DetailsCard,
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
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 20px;
    }
</style>
