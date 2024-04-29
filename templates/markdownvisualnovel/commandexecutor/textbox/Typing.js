var Typing = function (
    gameObject,
    {
        text,
        displayName,
        icon, iconFrame,
        name, expression,
        speed,
        iconCrossDuration, iconCrossMode = 'crossFade',
        wait = true,
    } = {},
    commandExecutor,
    eventSheetManager, eventSheet
) {

    if (displayName === null) {
        var title = gameObject.getElement('title').setText('');
        gameObject.setChildAlpha(title, 0);
    } else if (displayName) {
        var title = gameObject.getElement('title').setText(displayName);
        gameObject.setChildAlpha(title, 1);
    }

    var iconGameObject = gameObject.getElement('icon');
    if (iconGameObject) {
        if (name || expression) {
            var frameDelimiter = gameObject.frameDelimiter;
            var tokens = gameObject.frame.name.split(frameDelimiter);
            name = name || tokens[0];
            expression = expression || tokens[1];
            iconFrame = name + frameDelimiter + expression;
        }

        if (icon || iconFrame) {
            icon = icon || iconGameObject.texture.key;
            iconFrame = iconFrame || '__BASE';

            // Don't do transition if texture is not changed
            if ((icon !== iconGameObject.texture.key) || (iconFrame !== iconGameObject.frame.name)) {
                if (iconCrossDuration === undefined) {
                    iconCrossDuration = eventSheetManager.getData('$transitionDuration');
                }
                iconGameObject.setDuration(iconCrossDuration);
                iconGameObject.transit(icon, iconFrame, iconCrossMode);
            }

        }

        if (icon === null) {
            gameObject.hide(iconGameObject);
        } else {
            gameObject.show(iconGameObject);
        }
    }

    gameObject.layout();

    if (text) {
        if (speed === undefined) {
            speed = eventSheetManager.getData('$typingSpeed');
        }

        if (wait) {
            // Wait until typing complete
            commandExecutor.waitEvent(gameObject, 'complete2');
        }

        gameObject.start(text, speed);
    }
};

export default Typing;