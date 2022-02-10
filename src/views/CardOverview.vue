<template lang="html">
    <div id="cardOverview">
        <AddItems/>
        <CardEspeces :data="this.data"/>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import AddItems from '../components/add/add-items.vue';
    import CardEspeces from '../components/card/card-especes.vue';

    export default {
        name: 'CardOverview',
        components: {
            CardEspeces, AddItems,
        },
        computed: {
            ...mapGetters([
                'getData',
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
        background: var(--body-grey-color);
    }

/* --- Responsive --- */
    @media (max-width: 500px){
        #cardOverview {
            padding: 5px;
        }
    }
</style>
