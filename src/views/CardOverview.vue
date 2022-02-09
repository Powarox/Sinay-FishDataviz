<template lang="html">
    <div id="cardOverview">
        <CardEspeces :data="this.data"/>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import CardEspeces from '../components/card/card-especes.vue';

    export default {
        name: 'CardOverview',
        components: {
            CardEspeces,
        },
        data() {
            return {

            }
        },
        methods: {

        },
        computed: {
            ...mapGetters([
                'getLoadData', 'getLoadPrice', 'getData'
            ]),
            data() {
                return this.getData;
            },
        }
    }
</script>

<style lang="css" scoped>
    #cardOverview {
        padding: 30px;
        background: #F1F2F6;
    }
</style>
