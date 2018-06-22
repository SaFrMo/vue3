import MTLLoader from 'three-mtl-loader'

export default function(url) {
    const mtl = new MTLLoader()
    return new Promise((resolve, reject) => {
        mtl.load(url, resolve)
    })
}
