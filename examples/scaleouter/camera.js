import 'phaser';
import ScaleOuterPlugin from '../../plugins/scaleouter-plugin.js';

class Demo extends Phaser.Scene {
    constructor() {
        super({
            key: 'examples'
        })
    }

    preload() {
        this.load.image('classroom', 'assets/images/backgrounds/classroom.png');
    }

    create() {
        this.add.image(400, 300, 'classroom');

        this.print = this.add.text(0, 0, '', { fontSize: 24 });
    }

    update() {
        var camera = this.cameras.main;

        this.print.text = `\
ScrollX = ${camera.scrollX}
ScrollY = ${camera.scrollY}
ZoomX = ${camera.zoomX}
ZoomY = ${camera.zoomY}
\
`
    }
}

var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    backgroundColor: 0x333333,
    scale: {
        mode: Phaser.Scale.RESIZE,
        autoCenter: Phaser.Scale.NONE,
    },
    scene: Demo,
    plugins: {
        scene: [{
            key: 'rexScaleOuter',
            plugin: ScaleOuterPlugin,
            mapping: 'rexScaleOuter'
        }]
    }
};

var game = new Phaser.Game(config);