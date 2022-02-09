<template>
    <header>
        <nav class="navigation">
            <router-link to="/" id="logo">
                <!-- <img src="./assets/header/sinay-logo.png" alt="Logo"> -->
                <img src="./assets/header/logo_banner.svg" alt="Logo">
            </router-link>

            <section class="nav">
                <router-link to="/">Home</router-link>
                <router-link to="/CardOverview">Card Overviews</router-link>
                <router-link to="/CardOverview">List Overviews</router-link>
            </section>
        </nav>
        <!-- <img src="./assets/header/banner.svg" id="banner" alt="une bannière"> -->
    </header>

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
        color: #425486;
        font-family: 'Cabin', sans-serif;
    }

    header {
        width: 100%;
        height: 25vh;
        /* background: #02C39A; */
        background: linear-gradient(135deg, hsla(210, 96%, 40%, 1) 0%, hsla(181, 73%, 67%, 1) 100%);
    }

    .navigation {
        padding: 20px 10%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .navigation #logo img {
        width: 175px;
        padding: 10px;
        background: #FFF;
        border-radius: 20px;
    }

    .navigation .nav a {
        margin: 0 20px;
        padding: 10px;
        color: #132f63;
        font-size: 30px;
        font-weight: bold;
        transition: 0.4s;
    }

    .navigation .nav a:hover {
        color: #132f63;
        background: #FFF;
    }
</style>
