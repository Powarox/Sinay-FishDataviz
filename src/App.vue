<template>
    <!-- Google font api -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <!-- Google font font-family -->
    <link href="https://fonts.googleapis.com/css2?family=Cabin:wdth,wght@91.7,529&display=swap" rel="stylesheet">
    <!-- Font Awesome Icon -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"/>

    <div id="app">
        <nav class="navigation">
            <section class="nav">
                <!-- <router-link to="/" id="logo">
                    <img src="./assets/logo.png" alt="Logo">
                    Logo
                </router-link> -->
                <router-link to="/">Home</router-link>
            </section>
        </nav>

        <main class="main">
            <router-view/>
        </main>
    </div>
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
        font-family: sans-serif;
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
