import GOManager from '../../gomanager/GOManager.js';
import GetCamera from '../../../camera/GetCamera';

const SetCamera = GOManager.prototype.setCamera;
export default {
    setCamera(layerName, cameraName) {
        // Add a new camera if target camera is not existing
        var camera = GetCamera(this.scene, cameraName);
        if (!camera) {
            camera = this.scene.cameras.add(undefined, undefined, undefined, undefined, false, cameraName);
        }
        SetCamera.call(this, layerName, camera);
        return this;
    },
}