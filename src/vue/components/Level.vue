<template>

    <main class="level">
        <h1 v-track="'ship'">{{ levelData.meta.name }}</h1>

        <h2
            v-for="(poi, i) in levelData.game.pois"
            v-track="`poi${i}`"
            v-html="poi.name"/>
    </main>

</template>

<script>
export default {
    data() {
        return {
            levelData: null
        }
    },
    async mounted() {
        // load level json
        const json = await fetch(
            `/static/levels/${this.$route.params.slug}.json`
        ).then(res => res.json())
        this.levelData = json

        // set up level
        this.$root.setupLevel({
            model: this.levelData.assets.model,
            pois: this.levelData.game.pois
        })
    }
}
</script>

<style lang="scss">
</style>
