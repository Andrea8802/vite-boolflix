<script>

export default {
    name: "Loading",

}
</script>

<template>
    <div>
        <h1>
            BoolFlix
        </h1>
        <img src="../assets/img/loader.svg" alt="">
    </div>
</template>

<style lang="scss" scoped>
div {
    background-color: black;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 80px;

    h1 {
        font-size: 60px;
        color: red;
    }
}
</style>