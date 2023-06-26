export default {
    se2({ volume = 1 } = {}, manager) {
        var soundManager = this.sys.soundManager;
        if (!soundManager) {
            return;
        }
        soundManager.setSoundEffect2Volume(volume);
    },

    'se2.play'({ key, volume, detune, rate, fadeIn = 0, wait = false } = {}, manager) {
        var soundManager = this.sys.soundManager;
        if (!soundManager) {
            return;
        }
        if (!key) {
            return;
        }

        soundManager.playSoundEffect2(key);

        if (volume !== undefined) {
            soundManager.setSoundEffect2Volume(volume, true);
        }

        if (detune !== undefined) {
            soundManager.setSoundEffect2Detune(detune, true);
        }

        if (rate !== undefined) {
            soundManager.setSoundEffect2Rate(rate, true);
        }

        if (fadeIn > 0) {
            soundManager.fadeInSoundEffect2(fadeIn);
        }

        if (wait) {
            return this.wait({ se: true }, manager);
        }
    },

    'se2.stop'(config, manager) {
        var soundManager = this.sys.soundManager;
        if (!soundManager) {
            return;
        }
        soundManager.stopAllSoundEffects2();
    },

    'se2.fadeOut'({ duration = 500, stop = true, wait = false }, manager) {
        var soundManager = this.sys.soundManager;
        if (!soundManager) {
            return;
        }
        soundManager.fadeOutSoundEffect2(duration, stop);

        if (wait) {
            return this.wait({ bgm: true }, manager);
        }
    },

    'se2.mute'(config, manager) {
        var soundManager = this.sys.soundManager;
        if (!soundManager) {
            return;
        }

        soundManager.setSoundEffect2Mute(true);
    },

    'se2.unmute'(config, manager) {
        var soundManager = this.sys.soundManager;
        if (!soundManager) {
            return;
        }

        soundManager.setSoundEffect2Mute(false);
    },
}