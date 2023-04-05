let container = document.createElement('div')
container.style.display = 'flex'
container.style.flexWrap = 'wrap'
container.style.width = '800px'
container.style.height = '800px'
container.style.backgroundColor = 'red'

for (let i = 1; i <= 64; i++) {
    const tile = document.createElement('div')
    tile.style.width = '12.5%'
    tile.style.height = '12.5%'
    if (Math.floor((i - 1) / 8) % 2 === 0) {
        if (i % 2 === 1) {
            tile.style.backgroundColor = 'black'
        } else {
            tile.style.backgroundColor = 'red'
        }
    } else {
        if (i % 2 === 1) {
            tile.style.backgroundColor = 'red'
        } else {
            tile.style.backgroundColor = 'black'
        }
    }

    container.append(tile)
}
document.body.append(container)
