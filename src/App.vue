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
    export default {
        name: 'App',
        components: {

        }
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
        font-family: Avenir, Helvetica, Arial, sans-serif;
    }
</style>
