import { SPRITE } from '../../const/GameObjects.js';
import { GOLayer } from '../../const/Layers.js';
import GenerateDefaultCreateGameObjectCallback from './GenerateDefaultCreateGameObjectCallback.js';
import Cross from './Cross.js';

const GetValue = Phaser.Utils.Objects.GetValue;

var RegisterSpriteType = function (commandExecutor, config) {
    var createGameObjectCallback = GetValue(config, `creators.${SPRITE}`, undefined);
    if (createGameObjectCallback === false) {
        return;
    } else if (createGameObjectCallback === undefined) {
        var style = GetValue(config, `styles.${SPRITE}`);
        createGameObjectCallback = GenerateDefaultCreateGameObjectCallback(style);
    }

    commandExecutor.addGameObjectManager({
        name: SPRITE,
        createGameObject: createGameObjectCallback,
        fade: 0,  // No fade-in when creating/destroying gameobject
        viewportCoordinate: true,
        defaultLayer: GOLayer,

        commands: {
            cross: Cross
        }
    })
}

export default RegisterSpriteType;