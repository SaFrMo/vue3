<template>

    <section class="ship-plans">

        <h1 class="title">Planning Board</h1>

        <!-- Blueprint section -->
        <h2>Blueprint</h2>
        <ul class="design-wrap">
            <li
                v-for="(poi, i) in pois"
                :key="poi.id"
                class="poi">

                <h2>{{ poi.name }}</h2>

                <button
                    :aria-label="`Mark ${ poi.name } for demolition.`"
                    @click="$store.commit('ADD_SECTION_TO_SEQUENCE', poi.id)">
                    Add to Sequence
                </button>

            </li>
        </ul>

        <!-- Sequence section -->
        <h2>Sequence</h2>
        <ul class="goal-wrap">

            <li v-if="!$store.state.planningBoard.sequence.length">
                <p>Build out your demo plan here!</p>
                <p>Decide which section has the least risk and mark it for demolition. </p>
                <p>Continue through the blueprint until the entire ship is accounted for.</p>
            </li>

        </ul>

    </section>

</template>

<script>
import _get from 'lodash/get'

export default {
    data() {
        return {
            currentStep: 0
        }
    },
    props: {
        levelData: {
            type: Object,
            default: () => {}
        }
    },
    computed: {
        pois() {
            return _get(this.levelData, 'game.pois', [])
        }
    }
}
</script>

<style lang="scss">
@import 'src/vue/styles/vars';

.ship-plans {
    color: white;
    position: absolute;
    top: $border;
    right: $border;
    bottom: $border;
    left: $border;
    background-color: $off-white;
    color: $print-black;
    padding: $border;
    text-align: left;

    & > *:first-child {
        margin-top: 0;
    }
    .design-wrap {
        display: flex;
        padding: 0;
        list-style: none;

        .poi {
            border: 2px solid $print-black;
            box-sizing: border-box;
            margin: 5px;
            padding: 5px;
            flex: 1;
        }
    }
}
</style>
