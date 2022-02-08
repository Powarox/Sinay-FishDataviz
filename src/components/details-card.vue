<template lang="html">
    <div di="details-card">
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

        <div class="bottom">
            <i class="fas fa-flag-usa"></i>

            <i class="fas fa-flag-usa"></i>

            <i class="fas fa-flag-usa"></i>
        </div>
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

</style>
