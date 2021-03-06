var customCamera = {
    getPicture: function(filename, success, failure, options) {
        options = options || {};
        var quality = options.quality || 100;
        var targetWidth = options.targetWidth || -1;
        var targetHeight = options.targetHeight || -1;
        var topText = options.topText || "";
        var bottomText = options.bottomText || "";
        cordova.exec(success, failure, "CustomCamera", "takePicture", [filename, quality, targetWidth, targetHeight, topText, bottomText]);
    }
};

module.exports = customCamera;
