<template>

    <main class="level" v-keydown.esc="evt => $store.commit('TOGGLE_PLANS')">
        <section class="labels" v-if="levelData && levelData.meta">
            <h1 v-track="'ship'">{{ levelData.meta.name }}</h1>

            <h2
                v-for="(poi, i) in levelData.game.pois"
                v-track="`poi${i}`"
                v-html="poi.name"/>
        </section>

        <ship-plans v-if="$store.state.planOpened" :level-data="levelData"/>
    </main>

</template>

<script>
export default {
    data() {
        return {
            levelData: null
        }
    },
    components: {
        'ship-plans': require('./ShipPlans.vue').default
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
