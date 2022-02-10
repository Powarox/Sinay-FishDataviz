<template lang="html">
    <div id="add-items">
        <button class="addList" @click="change()">
            <i class="fa fa-plus"></i>
        </button>

        <div class="addListForm" v-if="popup">
            <div class="item">
                <h3>Add new species</h3>
                <i class="fa fa-plus" @click="change()"></i>
            </div>
            <div class="item">
                <label for="faoCode">Fao code: </label>
                <input id="faoCode" type="text" maxlength="3" style="text-transform: uppercase" v-model="data['faoCode']">
            </div>
            <div class="item">
                <label for="frenchName">French name: </label>
                <input id="frenchName" type="text" v-model="data['frenchName']">
            </div>
            <div class="item">
                <label for="scientificName">Scientific name: </label>
                <input id="scientificName" type="text" v-model="data['scientificName']">
            </div>

            <span @click="showAll" v-if="!show">Show more ...</span>

            <span @click="showAll" v-if="show">Show less ...</span>

            <div class="item" v-if="show">
                <label for="family">Family: </label>
                <input id="family" type="text" v-model="data['family']">
            </div>
            <div class="item" v-if="show">
                <label for="order">Order: </label>
                <input id="order" type="text" v-model="data['order']">
            </div>
            <div class="item" v-if="show">
                <label for="englishName">English name: </label>
                <input id="englishName" type="text" v-model="data['englishName']">
            </div>
            <div class="item" v-if="show">
                <label for="spanishName">Spanish name: </label>
                <input id="spanishName" type="text" v-model="data['spanishName']">
            </div>

            <button @click="submitForm()">Add</button>
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        name: 'AddItems',
        data() {
            return {
                show: false,
                popup: false,
                data: { 'faoCode': '', 'frenchName': '', 'scientificName': '' },
            }
        },
        methods: {
            ...mapActions(['createNewData']),

            change() {
                this.popup = !this.popup;
            },
            showAll() {
                this.show = !this.show;
            },
            submitForm() {
                this.data.faoCode = this.data.faoCode.toUpperCase();
                if(this.data.faoCode !== '' && this.data.frenchName !== '' && this.data.scientificName !== ''){
                    this.createNewData(this.data);
                    this.change();
                }
            }
        },
    }
</script>

<style lang="css" scoped>
    .addListForm {
        padding: 20px;
        position: fixed;
        top: 33%;
        left: 35%;
        display: grid;
        grid-gap: 10px;
        background: var(--main-white-color);
        border-radius: 10px;
        box-shadow: inset 0 -1px 0 rgb(0 0 0 / 10%), 0 2px 5px rgb(51 51 51 / 20%);
    }

    .addListForm button {
        width: 140px;
        margin: 10px auto 0;
        padding: 5px 20px;
        color: var(--main-white-color);
        background: var(--main-button-color);
        border: 2px solid var(--main-button-color);
        border-radius: 10px;
        box-shadow: inset 0 -1px 0 0 rgb(0 0 0 / 10%), 0 2px 5px 0 rgb(51 51 51 / 20%);
        font-size: 17px;
        font-weight: bold;
        transition: 0.4s;
        cursor: pointer;
    }

    .addListForm button:hover {
        color: var(--main-button-color);
        background: var(--main-white-color);
        border: 2px solid var(--main-white-color);
    }

    .addListForm span {
        margin: 5px auto;
        color: var(--dark-grey-color);
        font-style: italic;
        cursor: pointer;
    }

    .addListForm span:hover {
        color: var(--main-red-color);
    }

    .addListForm .item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 10px;
        font-size: 18px;
    }

    .addListForm .item h3 {
        margin: 0 auto 10px;
        text-transform: uppercase;
        font-size: 22px;
    }

    .addListForm .item i {
        padding: 7px 10px;;
        border-radius: 50%;
        color: var(--main-red-color);
        box-shadow: inset 0 -1px 0 rgb(0 0 0 / 10%), 0 2px 5px rgb(51 51 51 / 20%);
        transition: 0.4s;
        cursor: pointer;
    }

    .addListForm .item i:hover {
        color: var(--main-white-color);
        background: var(--main-red-color);
    }

    .addListForm .item input {
        padding: 5px 10px;
        color: var(--dark-grey-color);
        background: var(--body-grey-color);
        border: 2px solid var(--body-grey-color);
        border-radius: 10px;
        font-size: 18px;
        font-weight: bold;
        transition: 0.4s;
    }

    .addListForm .item input:focus {
        border: 2px solid var(--main-button-color);
    }

    .addList {
        padding: 10px 20px;;
        position: fixed;
        right: 5%;
        bottom: 5%;
        color: var(--main-button-color);
        background: var(--main-white-color);
        border: 2px solid var(--main-white-color);
        box-shadow: inset 0 -1px 0 rgb(0 0 0 / 10%), 0 2px 5px rgb(51 51 51 / 20%);
        border-radius: 50%;
        font-size: 40px;
        transition: 0.4s;
        cursor: pointer;
    }

    .addList:hover {
        color: var(--main-white-color);
        background: var(--main-button-color);
        border: 2px solid var(--main-button-color);
    }

    @media (max-width: 900px){
        .addListForm {
            left: 25%;
        }
    }

    @media (max-width: 700px){
        .addListForm {
            left: 2%;
        }
    }

    @media (max-width: 475px){
        .addListForm .item input {
            width: 200px;
        }
    }
</style>
