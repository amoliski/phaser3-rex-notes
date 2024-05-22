import GetRootRenderGameObject from '../displaylist/GetRootRenderGameObject.js';

var GetFirstRenderCamera = function (scene, gameObject) {
    var cameraFilter = GetRootRenderGameObject(gameObject).cameraFilter;
    var cameras = scene.sys.cameras.cameras;
    var camera, isCameraIgnore;
    for (var i = 0, cnt = cameras.length; i < cnt; i++) {
        camera = cameras[i];

        isCameraIgnore = (cameraFilter & camera.id);
        if (!isCameraIgnore) {
            return camera;
        }
    }

    return null;
}

export default GetFirstRenderCamera;