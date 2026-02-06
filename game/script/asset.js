class Img {
    static loadPair = []
}

class AssetLoader {
    static numAssets = 0
    static numLoaded = 0
    static loadAssets(callback) {
        AssetLoader.numAssets = Img.loadPair.length
        AssetLoader.numLoaded = 0
        if (AssetLoader.numAssets === 0) {
            callback()
        } else {
            for (let i = 0; i < Img.loadPair.length; i++) {
                let pair = Img.loadPair[i]
                let img = new Image()
                Img[pair[0]] = img
                img.onload = () => {AssetLoader.numLoaded++; if (AssetLoader.numLoaded >= AssetLoader.numAssets) callback()}
                img.onerror = () => {AssetLoader.numLoaded++; if (AssetLoader.numLoaded >= AssetLoader.numAssets) callback()}
                img.src = pair[1]
            }
        }
    }
}
