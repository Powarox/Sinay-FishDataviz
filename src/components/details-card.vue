<template lang="html">
    <div id="details-card">
        <section class="top">
            <div class="left">
                <div class="img">

                </div>
                <h4>FAO : {{ this.faoCode }}</h4>
            </div>

            <div class="right">
                <h2>{{ this.scientificName }}</h2>
                <p>Order : {{ this.order }}</p>
                <p>Family : {{ this.family }}</p>
            </div>
        </section>

        <section class="bottom">
            <div class="item">
                <img src="../assets/flags/french-flag.png" alt="">
                <p>{{ this.frenchName }}</p>
            </div>

            <div class="item">
                <img src="../assets/flags/english-flag.png" alt="">
                <p>{{ this.englishName }}</p>
            </div>

            <div class="item">
                <img src="../assets/flags/spanish-flag.png" alt="">
                <p>{{ this.spanishName }}</p>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: 'DetailsCard',
        props: [
            'faoCode', 'scientificName', 'family', 'order',
            'englishName', 'frenchName', 'spanishName',
        ],
    }
</script>

<style lang="css" scoped>
    #details-card {
        padding: 20px;
        display: grid;
        grid-gap: 15px;
        background: #EEF1F9;
        border-radius: 10px;
        box-shadow: 5px 10px 20px #D9D5EC;
    }

    .top {
        display: grid;
        grid-template-columns: 2fr 3fr;
    }

    .top .left {
        display: grid;
        justify-items: center;
        grid-gap: 10px;
    }

    .top .left h4 {
    }

    .top .left .img {
        width: 125px;
        height: 80px;
        background: #348AF4;
        border-radius: 10px;
    }

    .top .right h2 {
        margin-bottom: 10px;
    }

    .bottom {
        display: flex;
        justify-content: space-between;
        gap: 15px;
    }

    .bottom .item {
        display: flex;
        align-items: center;
        gap: 5px;
    }

    .bottom .item img {
        width: 30px;
        /* padding: 0 5px; */
    }
</style>
