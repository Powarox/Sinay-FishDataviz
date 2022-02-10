<template lang="html">
    <div id="home">
        <ListEspeces :data="this.data"/>
        <AddItems/>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import AddItems from '../components/add/add-items.vue';
    import ListEspeces from '../components/list/liste-especes.vue';

    export default {
        name: 'Home',
        components: {
            ListEspeces, AddItems,
        },
        data() {
            return {

            }
        },
        methods: {

        },
        computed: {
            ...mapGetters(['getData']),
            data() {
                return this.getData;
            },
        }
    }
</script>

<style lang="css" scoped>
    #home {
        padding: 30px;
        background: var(--body-grey-color);
    }

    @media (max-width: 600px){
        #home {
            padding: 20px;
        }
    }

    @media (max-width: 500px){
        #home {
            padding: 10px;
        }
    }

    @media (max-width: 400px){
        #home {
            padding: 5px;
        }
    }
</style>
