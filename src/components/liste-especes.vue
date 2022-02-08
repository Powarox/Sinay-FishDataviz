<template lang="html">
    <div id="liste-especes">
        <section class="filter">
            <h3>Recherche</h3>
            <input type="text" name="" value="">
            <button type="button" name="button">Search</button>
            <button type="button" name="button">Search</button>
            <button type="button" name="button">Search</button>
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

            <DetailsCard/>
            <DetailsCard/>
            <DetailsCard/>
            <DetailsCard/>
            <DetailsCard/>
            <DetailsCard/>
            <DetailsCard/>
            <DetailsCard/>
            <DetailsCard/>
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

    .filter {
        width: 80%;
        top: 17%;
        margin: 20px 10%;
        padding: 30px 20px;
        position: absolute;
        display: grid;
        grid-template-columns: 1fr 2fr 1fr 1fr 1fr;
        grid-gap: 10px;
        /* justify-items: center; */
        background: #FFF;
        border-radius: 10px;
        box-shadow: inset 0 -1px 0 0 rgb(0 0 0 / 10%), 0 2px 5px 0 rgb(51 51 51 / 20%);
    }

    .contentCard {
        margin-top: 50px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 40px;
    }
</style>
