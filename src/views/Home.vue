<template lang="html">
    <div id="home">
        <ListEspeces :data="this.data"/>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import ListEspeces from '../components/list/liste-especes.vue';

    export default {
        name: 'Home',
        components: {
            ListEspeces,
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
    #home {
        padding: 30px;
        background: #F1F2F6;
    }
</style>
