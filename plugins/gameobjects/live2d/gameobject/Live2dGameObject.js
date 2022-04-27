import Render from './render/Render.js';
import LAppModel from './lappmodel/LAppModel.js';

const Extern = Phaser.GameObjects.Extern;

class Live2dGameObject extends Extern {
    constructor(scene, x, y, key) {
        super(scene, 'rexLive2d');

        this.model = new LAppModel(this);

        this.setKey(key);

        this.setSize(this.model._modelWidth, this.model._modelHeight);
    }

    setKey(key) {
        this.key = key;
        var data = this.scene.cache.custom.live2d.get(key);
        if (!data || !data.model) {
            console.error(`Live2d: can't load ${key}'s assets`);
            return;
        }

        this.model.setup(data);

        return this;
    }

    preUpdate(time, delta) {
        this.model.update(time, delta);
    }

    preDestroy() {
        this.model.release();
        this.model = undefined;
    }
}

Object.assign(
    Live2dGameObject.prototype,
    Render
)

export default Live2dGameObject;