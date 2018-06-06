export default function(count = 10) {
    for (let i = 0; i < count; i++) {
        const blocks = this.game.getDictionary('blocks')
        const startingPos = blocks ? blocks.children.length + 1 : 1

        this.game.add({
            group: 'blocks',
            position: [startingPos * this.$store.state.BLOCK_DISTANCE, -1, 0],
            color: this.colors[Math.floor(Math.random() * this.colors.length)]
        })
    }
}
