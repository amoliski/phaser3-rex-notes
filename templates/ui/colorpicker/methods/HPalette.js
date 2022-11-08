import OverlapSizer from '../../overlapsizer/OverlapSizer.js';
import HPaletteCanvas from './HPaletteCanvas.js';
import RoundRectangle from '../../roundrectangle/RoundRectangle.js';
import { LocalToWorld } from './Transform.js';

class HPalette extends OverlapSizer {
    constructor(scene, width, height) {
        super(scene, {
            width: width,
            height: height
        });

        var orientation = (width != null) ? 1 : 0;
        var paletteCanvas = (new HPaletteCanvas(scene))
            .setOrientation(orientation)
        scene.add.existing(paletteCanvas);

        paletteCanvas
            .setInteractive()
            .on('pointerdown', this.onPaletteCanvasPointerDown, this)
            .on('pointermove', this.onPaletteCanvasPointerDown, this)

        var marker = new RoundRectangle(scene, { strokeColor: 0xffffff, strokeWidth: 2 });
        scene.add.existing(marker);

        this
            .add(
                paletteCanvas,
                { key: 'paletteCanvas', expand: true }
            )
            .add(
                marker,
                { key: 'marker', expand: false, align: 'center' }
            )
    }

    resize(width, height) {
        if ((this.width === width) && (this.height === height)) {
            return this;
        }

        super.resize(width, height);

        var size = Math.min(width, height);
        this.childrenMap.marker.setSize(size, size);

        return this;
    }

    onPaletteCanvasPointerDown(pointer, localX, localY, event) {
        if (!pointer.isDown) {
            return;
        }

        var paletteCanvas = this.childrenMap.paletteCanvas;
        var marker = this.childrenMap.marker;

        if (paletteCanvas.orientation === 0) {
            marker.setPosition(pointer.worldX, this.centerY);
        } else {
            marker.setPosition(this.centerX, pointer.worldY);
        }
        this.resetChildPositionState(marker);

        var hue = paletteCanvas.getHue(localX, localY);
        this.emit('input', hue);
    }

    setColor(color) {
        var paletteCanvas = this.childrenMap.paletteCanvas;
        var marker = this.childrenMap.marker;

        paletteCanvas.setColor(color);

        var localXY = paletteCanvas.colorToLocalPosition(color, true);
        LocalToWorld(paletteCanvas, localXY.x, localXY.y, marker);
        this.resetChildPositionState(marker);

        return this;
    }

    getHue(localX, localY) {
        var paletteCanvas = this.childrenMap.paletteCanvas;
        return paletteCanvas.getHue(localX, localY);
    }
}

export default HPalette;