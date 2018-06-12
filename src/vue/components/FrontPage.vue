<template>

    <main class="front-page">

        <h1 class="title">Demolition Roster</h1>

        <h2 v-if="loading">Loading data...</h2>

        <ul class="roster" v-else>
            <li v-for="(level, i) in levelData" :key="i">
                <div class="meta">
                    <h2 class="name">{{ level.meta.name }}</h2>
                    <h3 class="model">{{ level.meta.model }}</h3>
                    <h3 class="owner">Previous Owner: {{ level.meta.owner }}</h3>

                    <div class="description" v-html="level.meta.description"/>
                </div>

                <router-link class="start-link" :to="level.slug">Start</router-link>
            </li>
        </ul>

    </main>

</template>

<script>
import Vue from 'vue'

const levels = ['houndstooth']

export default {
    data() {
        return {
            levelData: [],
            loading: true
        }
    },
    async mounted() {
        levels.map(async level => {
            const json = await fetch(`/static/levels/${level}.json`).then(res =>
                res.json()
            )
            this.levelData.push(json)
        })

        this.loading = false
    }
}
</script>

<style lang="scss">
main.front-page {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    color: white;
    overflow: hidden;
    text-align: left;
    padding: 40px;

    .title {
        margin-top: 0;
        border-bottom: 2px solid white;
        display: inline-block;
    }
    .meta {
        & > * {
            margin: 0;
        }
        .name {
            font-style: italic;
        }
        .description {
            margin: 20px 0;
            max-width: 500px;
        }
    }
    .start-link {
        display: block;
        background-color: lighten(black, 20%);
        padding: 20px;
        text-align: right;
        font-size: 24px;
        text-decoration: none;

        &:hover,
        &:focus {
            background-color: white;
            color: black;
        }
    }

    // & > * {
    //     background-color: rgba(#666, 0.4);
    //     display: inline-block;
    //     padding: 20px;
    //     border-radius: 15px;
    //     position: absolute;
    //     top: 0;
    //     left: 0;
    // }
}
</style>
