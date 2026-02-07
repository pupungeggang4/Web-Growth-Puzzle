class Game {
    constructor() {
        this.canvas = document.getElementById('screen')
        this.ctx = this.cavnas.getContext('2d')

        window.addEventListener('mouseup', (event) => this.mouseUp(event), false)
        window.addEventListener('keydown', (event) => this.keyDown(event), false)
        window.addEventListener('keyup', (evnet) => this.keyUp(event), false)
    }

    run() {
        this.gameLoop = requestAnimationFrame(() => this.loop())
    }

    loop() {
        this.gameLoop = requestAnimationFrame(() => this.loop())
    }

    mouseUp(event) {

    }

    keyDown(event) {

    }

    keyUp(event) {

    }
}
