<template lang="html">
    <div id="test">
        <ListTest :data="this.data"/>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import ListTest from '../components/list-test.vue';

    export default {
        name: 'Test',
        components: {
            ListTest,
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
    #test {
        padding: 30px;
        background: #F1F2F6;
    }
</style>
