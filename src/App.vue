<template>
    <nav class="navigation">
        <section class="nav">
            <!-- <router-link to="/" id="logo">
                <img src="./assets/logo.png" alt="Logo">
                Logo
            </router-link> -->
            <router-link to="/">Home</router-link>
            <router-link to="/Test">Test</router-link>
        </section>
    </nav>

    <main class="main">
        <router-view/>
    </main>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        name: 'App',
        components: {

        },
        created() {
            this.fetchDataFromSinayApi();
        },
        methods: {
            ...mapActions([
                'fetchDataFromSinayApi',
            ]),
        },
    }
</script>

<style>
/* --- Reset Css --- */
    *, ::before, ::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style-type: none;
        outline: none;
    }
/* --- Colors --- */
    :root {
        --main-first-color: #41B883;
        --main-second-color: #35495E;
    }

    #app {
        font-family: 'Cabin', sans-serif;
    }

    .navigation {
        padding: 20px;
        background: #35495E;
    }

    .navigation .nav a {
        padding: 10px;
        color: #FFF;
        transition: 0.4s;
    }

    .navigation .nav a:hover {
        color: #35495E;
        background: #FFF;
    }
</style>
