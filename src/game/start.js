import * as THREE from 'three'
import { CSS3DObject, CSS3DRenderer } from 'three-renderer-css3d'

export default async function() {
    // This function will run once immediately after the Vue3Game is created.
    // You have access to the root Vue instance with `this` and to the
    // main Vue3Game instance with `this.game`.
    //
    // For example, to add a sun-like directional light to the scene:
    //
    const sun = new THREE.DirectionalLight(0xffffff, 1)
    sun.position.set(1, 0.5, 1)
    this.game.scene.add(sun)
    this.game.save('sun', sun)

    // add computer
    const computer = await this.game.loadObj('static/assets/computer.obj', {
        material: 'static/assets/computer.mtl'
    })
    computer.position.set(0, 0, 0)
    this.game.scene.add(computer)
    this.game.save('computer', computer)
    computer.rotation.set(0, this.game.utils.deg2Rad(-90), 0)

    // add screen wireframe
    const screenMat = new THREE.MeshBasicMaterial({ wireframe: true })
    const screenGeo = new THREE.PlaneGeometry()
    const screen = new THREE.Mesh(screenGeo, screenMat)
    screen.rotation.set(0, this.game.utils.deg2Rad(-90), 0)
    this.game.scene.add(screen)

    // add css 3d renderer
    const cssRenderer = new CSS3DRenderer()
    cssRenderer.setSize(window.innerWidth, window.innerHeight)
    cssRenderer.domElement.style.position = 'absolute'
    cssRenderer.domElement.style.top = 0
    cssRenderer.domElement.style.left = 0
    this.game.save('cssRenderer', cssRenderer)
    document.body.append(cssRenderer.domElement)

    // add screen DOM element
    const el = document.createElement('img')
    el.src = 'static/screen.png'
    const cssObj = new CSS3DObject(el)
    cssObj.position.set(screen.position)
    // cssObj.rotation.set(screen.rotation)
    this.game.scene.add(cssObj)

    // position and angle camera
    this.game.camera.position.set(0.5, 0.5, 0.5)
    this.game.camera.lookAt(computer.position)
}
