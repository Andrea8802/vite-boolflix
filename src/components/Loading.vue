<script>

export default {
    name: "Loading",
    data() {
        return {
            error: "",
            stato: ""
        }
    },
    mounted() {
        // Controllo per evitare caricamento infinito in caso di qualche errore
        setTimeout(() => {
            this.error = "Errore! Riprova più tardi!";
            this.stato = "none";
        }, 10000)
    }

}
</script>

<template>
    <div>
        <h1>
            BoolFlix
        </h1>
        <h2>
            {{ error }}
        </h2>
        <img src="../assets/img/loader.svg" alt="" :class="stato">
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

    h2 {
        color: white;
    }

    .none {
        display: none;
    }
}
</style>