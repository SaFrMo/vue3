import * as THREE from 'three'
import OBJLoader from 'three-obj-loader'
OBJLoader(THREE)

export default function(url, onProgress) {
    return new Promise((resolve, reject) => {
        return new THREE.OBJLoader().load(url, resolve, onProgress, reject)
    })
}
