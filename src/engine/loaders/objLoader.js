import * as THREE from 'three'
import OBJLoader from 'three-obj-loader'
import mtlLoader from './mtlLoader'
OBJLoader(THREE)

export default async function(url, opts = {}) {
    let mtl = null
    if (opts.material) {
        mtl = await mtlLoader(opts.material)
    }

    const loader = new THREE.OBJLoader()

    if (mtl) {
        loader.setMaterials(mtl)
    }

    return new Promise((resolve, reject) => {
        return loader.load(url, resolve, opts.onProgress, reject)
    })
}
