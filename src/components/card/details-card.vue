<template lang="html">
    <div id="details-card">
        <section class="top">
            <div class="left">
                <div class="img">

                </div>
                <h4>FAO : {{ this.faoCode }} ANC</h4>
            </div>

            <div class="right">
                <h2>{{ this.scientificName }} Requin Marteaux</h2>
                <p>Order : {{ this.order }} Benavita</p>
                <p>Family : {{ this.family }} Megalo</p>
            </div>
        </section>

        <section class="bottom">
            <div class="item">
                <img src="../../assets/flags/french-flag.png" alt="">
                <p>{{ this.frenchName }} Requin tortue</p>
            </div>

            <div class="item">
                <img src="../../assets/flags/english-flag.png" alt="">
                <p>{{ this.englishName }} Requin tortue</p>
            </div>

            <div class="item">
                <img src="../../assets/flags/spanish-flag.png" alt="">
                <p>{{ this.spanishName }} Requin tortue</p>
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
        background: #fcfcfd;
        border-radius: 10px;
        box-shadow: inset 0 -1px 0 rgb(0 0 0 / 10%), 0 2px 5px rgb(51 51 51 / 20%);
        cursor: pointer;
    }

    #details-card:hover {
        box-shadow: 0 0 20px rgb(51 51 51 / 20%);
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
        background: #DDD;
        border-radius: 10px;
        animation: breathing 5s ease-out infinite normal;
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
    }

    @keyframes breathing {
      0% { -webkit-transform: scale(0.9); -ms-transform: scale(0.9); transform: scale(0.9); }
      25% { -webkit-transform: scale(1); -ms-transform: scale(1); transform: scale(1); }
      50% { -webkit-transform: scale(0.9); -ms-transform: scale(0.9); transform: scale(0.9); }
      75% { -webkit-transform: scale(1); -ms-transform: scale(1); transform: scale(1); }
      100% { -webkit-transform: scale(0.9); -ms-transform: scale(0.9); transform: scale(0.9); }
    }
</style>
