<template>
    <header>
        <nav class="navigation">
            <router-link to="/" id="logo">
                <!-- <img src="./assets/header/sinay-logo.png" alt="Logo"> -->
                <img src="./assets/header/logo_banner.svg" alt="Logo">
            </router-link>

            <section class="nav">
                <router-link to="/" :class="{activePage: basic}" @click="switchPage('basic')">Basic views</router-link>
                <router-link to="/CardOverview" :class="{activePage: card}" @click="switchPage('card')">Card views</router-link>
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
        data() {
            return {
                basic: true,
                card: false,
            }
        },
        created() {
            this.fetchDataFromSinayApi();
        },
        methods: {
            ...mapActions([
                'fetchDataFromSinayApi',
            ]),
            switchPage(elem) {
                if(elem === 'basic'){
                    this.basic = true;
                    this.card = false;
                }
                else {
                    this.basic = false;
                    this.card = true;
                }
            },
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
        --main-font-color: #425486;
        --main-button-color: #41B883;

        --main-white-color: #FFFFFF;
        --body-grey-color: #F1F2F6;
        --light-grey-color: #DDDDDD;
        --dark-grey-color: #333333;
        --main-red-color: #fb565e;


        --header-font-color: #132f63;
        --header-first-color: hsla(210, 96%, 40%, 1);
        --header-second-color: hsla(181, 73%, 67%, 1);
    }

    #app {
        color: var(--main-font-color);
        font-family: 'Cabin', sans-serif;
    }

    header {
        width: 100%;
        height: 25vh;
        background: linear-gradient(135deg, var(--header-first-color) 0%, var(--header-second-color) 100%);
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
        background: var(--main-white-color);
        border-radius: 20px;
    }

    .navigation .nav a {
        margin: 0 20px;
        padding: 10px;
        color: var(--header-font-color);
        border-bottom: 3px solid transparent;
        font-size: 25px;
        font-weight: bold;
        transition: 0.4s;
    }

    .navigation .nav .activePage {
        border-bottom: 3px solid var(--main-white-color);
    }

    @media (max-width: 950px){
        .navigation {
            padding: 20px 5%;
        }
    }

    @media (max-width: 600px){
        .navigation .nav a {
            margin: 0;
        }
    }

    @media (max-width: 515px){
        .navigation #logo img {
            width: 150px;
        }

        .navigation .nav a {
            font-size: 20px;
        }
    }

    @media (max-width: 515px){
        .navigation #logo img {
            width: 150px;
        }

        .navigation .nav a {
            font-size: 20px;
        }
    }

    @media (max-width: 430px){
        .navigation #logo img {
            display: none;
        }
    }
</style>
