<template lang="html">
    <div id="filter-tool">
        <h3>Recherche</h3>
        <input v-model="filter" @input="$emit('update:filter', filter)">
        <button :class="{active: focus_fao}" @click="$emit('update:selected', 'faoCode'); switchBtn('fao');">Fao Code</button>
        <button :class="{active: focus_fra}" @click="$emit('update:selected', 'frenchName'); switchBtn('fra');">French Name</button>
    </div>
</template>

<script>
    export default {
        name: 'FilterTool',
        emits: ['update:filter', 'update:selected'],
        data() {
            return {
                filter: '',
                focus_fao: false,
                focus_fra: true,
            }
        },
        methods: {
            switchBtn(elem) {
                if(elem === 'fao'){
                    this.focus_fao = false;
                    this.focus_fra = true;
                }
                else {
                    this.focus_fao = true;
                    this.focus_fra = false;
                }
            }
        }
    }
</script>

<style lang="css" scoped>
    #filter-tool {
        width: 70%;
        top: 17%;
        left: 0%;
        margin: 20px 15%;
        padding: 20px 20px;
        position: absolute;
        display: grid;
        grid-template-columns: 1fr 3fr 1fr 1fr;
        grid-gap: 10px;
        align-items: center;
        justify-items: center;
        background: #FFF;
        border-radius: 10px;
        box-shadow: inset 0 -1px 0 0 rgb(0 0 0 / 10%), 0 2px 5px 0 rgb(51 51 51 / 20%);
    }

    h3 {
        font-size: 20px;
    }

    input {
        width: 100%;
        padding: 5px 10px;
        color: #333;
        background: #F1F2F6;
        border: 2px solid #F1F2F6;
        border-radius: 10px;
        font-size: 20px;
        font-weight: bold;
        transition: 0.4s;
    }

    input:focus {
        border: 2px solid #41B883;
    }

    button {
        padding: 5px 20px;
        color: #FFF;
        background: #41B883;
        border: 2px solid #41B883;
        border-radius: 10px;
        box-shadow: inset 0 -1px 0 0 rgb(0 0 0 / 10%), 0 2px 5px 0 rgb(51 51 51 / 20%);
        font-size: 17px;
        font-weight: bold;
        transition: 0.4s;
        cursor: pointer;
    }

    .active {
        color: #41B883;
        background: #FFF;
        border: 2px solid #FFF;
    }
</style>
