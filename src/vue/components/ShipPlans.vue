<template>

    <section class="ship-plans">

        <h1 class="title">Planning Board</h1>

        <!-- Blueprint section -->
        <h2>Blueprint</h2>
        <ul class="design-wrap">
            <li
                v-for="(poi, i) in pois"
                :key="poi.id"
                :class="['poi', { strike: $store.state.planningBoard.sequence.includes(poi.id) }]">

                <h2 class="name">{{ poi.name }}</h2>

                <div class="chart">
                    <div class="row">
                        <h3>⚠️ Base danger</h3>
                        <span>{{ poi.risk }}</span>
                    </div>
                    <div
                        :class="['row', { strike: $store.state.planningBoard.sequence.includes(f.id) }]"
                        v-for="(f, i) in poi.foundation">
                        <h3>🛑 {{ getName(f.id) }}</h3>
                        <span>+{{ f.risk }}</span>
                    </div>
                </div>

                <button
                    :aria-label="`Mark ${ poi.name } for demolition.`"
                    @click="$store.commit('ADD_SECTION_TO_SEQUENCE', poi.id)"
                    v-if="!$store.state.planningBoard.sequence.includes(poi.id)">
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

            <li
                v-for="(step, i) in $store.state.planningBoard.sequence"
                :key="i">

                <p>{{ getName(step) }}</p>

                <p>Calculated danger: {{ calcDanger(i, step) }}</p>

                <button @click="$store.commit('SLICE_SEQUENCE_AT', i)">Remove</button>

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
    },
    methods: {
        getName(id) {
            const result = this.getSection(id)
            return result ? result.name : ''
        },
        getSection(id) {
            return this.pois.find(x => x.id == id)
        },
        calcDanger(sequenceIndex, sectionId) {
            const section = this.getSection(sectionId)

            if (!section) return ''

            let danger = section.risk

            if (!section.foundation) return danger

            section.foundation.map(x => {
                // if foundation id doesn't exist before this sequenceIndex, add danger
                const slice = this.$store.state.planningBoard.sequence.slice(
                    0,
                    sequenceIndex
                )
                if (!slice.includes(x.id)) {
                    danger += x.risk
                }
            })

            return danger
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
            padding: 15px 10px;
            flex: 1;
            position: relative;

            .name {
                margin-top: 0;
            }
            .overlay {
                @include fill;
                background-color: rgba($off-white, 0.8);
            }
        }
        .chart {
            margin-bottom: 20px;

            .row {
                display: flex;
                align-items: flex-end;
                justify-content: space-between;

                h3 {
                    margin: 0;
                    font-weight: 400;
                }
                span {
                    font-size: 24px;
                    font-weight: 700;
                }
            }
        }
    }

    .strike {
        opacity: 0.2;

        .strike {
            opacity: 1;
        }
    }
}
</style>
