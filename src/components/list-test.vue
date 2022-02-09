<template lang="html">
    <div id="liste-test">
        <section class="filter">
            <h3>Recherche</h3>
            <input type="text" name="" value="">
            <button type="button" name="button">Search</button>
            <button type="button" name="button">Search</button>
            <button type="button" name="button">Search</button>
        </section>

        <section class="contentList">
            <!-- <i class="fa-solid fa-fish"></i>
            <i class="fa-solid fa-fish-bones"></i>
            <i class="fa-solid fa-fish-cooked"></i>

            <i class="fa-solid fa-crab"></i>
            <i class="fa-solid fa-lobster"></i>
            <i class="fa-solid fa-shrimp"></i>

            <i class="fa-solid fa-dolphin"></i> -->
            <i class="fa-solid fa-code"></i>


            <!-- <font-awesome-icon icon="fa-solid fa-fish" />
            <font-awesome-icon icon="fa-solid fa-fish-bones" />
            <font-awesome-icon icon="fa-solid fa-fish-cooked" /> -->

            <div class="list" v-for="item in this.data" v-bind:key="item.faoCode">
                <h3>{{ item.faoCode }}</h3>
                <h3>{{ item.frenchName }}</h3>
                <h3>{{ item.scientificName }}</h3>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: 'liste-test',
        props: ['data'],
        components: {

        },
        methods: {

        }
    }
</script>

<style lang="css" scoped>
    #liste-test {
        display: grid;
    }

    i {
        color: #333;
        width: 100px;
        font-size: 30px;
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
        margin-top: 50px;
        display: grid;
        grid-template-columns: 1fr;
    }

    .contentList .list {
        padding: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

</style>
