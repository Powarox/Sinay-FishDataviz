<template lang="html">
    <div id="filter-tool">
        <h3>Recherche</h3>
        <input type="text" name="" value="">
        <button type="button" name="button">Search</button>
        <button type="button" name="button">Search</button>
        <button type="button" name="button">Search</button>
    </div>
</template>

<script>
    export default {
        name: 'FilterTool',
    }
</script>

<style lang="css" scoped>
    #filter-tool {
        width: 80%;
        top: 17%;
        left: 0%;
        margin: 20px 10%;
        padding: 30px 20px;
        position: absolute;
        display: grid;
        grid-template-columns: 1fr 2fr 1fr 1fr 1fr;
        grid-gap: 10px;
        background: #FFF;
        border-radius: 10px;
        box-shadow: inset 0 -1px 0 0 rgb(0 0 0 / 10%), 0 2px 5px 0 rgb(51 51 51 / 20%);
    }
</style>
