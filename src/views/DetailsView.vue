<template lang="html">
    <div id="detailsView">
        <h1>Details page ...</h1><br>
        <p>Fao code : {{ this.data.faoCode }}</p><br>
        <p>Order : {{ this.data.order }}</p>
        <p>Family : {{ this.data.family }}</p><br>
        <p>French Name : {{ this.data.frenchName }}</p>
        <p>English Name : {{ this.data.englishName }}</p>
        <p>Spanish Name : {{ this.data.spanishName }}</p><br>
        <p>Scientific Name : {{ this.data.scientificName }}</p>
        <img :src="getImgUrl()" alt="">
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        name: 'DetailsView',
        props: ['id', 'code'],
        methods: {
            getImgUrl() {
                let num = this.id % 9;
                return require('../assets/fish/img'+num+'.jpg');
            },
        },
        computed: {
            ...mapGetters(['getData']),
            data() {
                for(let i in this.getData) {
                    if(this.getData[i].faoCode === this.code){
                        return this.getData[i];
                    }
                }
                return 0;
            },
        }
    }
</script>

<style lang="css" scoped>
    #detailsView {
        padding: 30px;
    }
</style>
