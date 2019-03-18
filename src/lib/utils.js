module.exports = {
    /**
     * canvas2img, convert canvas to img
     * @param  {object} canvas canvas
     * @return {object}        image
     */
    canvas2img: function(canvas, options) {
        var image = new Image();
        var imageType = 'png';
        var imageQuality = 1.0;
        var dataURL = '';

        if (options && options.imageType === 'jpeg') {
            imageType = options.imageType;
            imageQuality = options.imageQuality || 1.0;
        }

        dataURL = canvas.toDataURL('image/' + imageType, imageQuality);
        image.src = dataURL;

        return image;
    },

    /**
     * [img2canvas description]
     * @param  {[type]} image        [description]
     * @param  {[type]} domStartX    [description]
     * @param  {[type]} domStartY    [description]
     * @param  {[type]} domW         [description]
     * @param  {[type]} domH         [description]
     * @param  {[type]} canvasStartX [description]
     * @param  {[type]} canvasStartY [description]
     * @param  {[type]} canvasW      [description]
     * @param  {[type]} canvasH      [description]
     * @return {[type]}              [description]
     */
    img2canvas: function(image, domStartX, domStartY, domW, domH, canvasStartX, canvasStartY, canvasW, canvasH) {
        var canvas = document.createElement('canvas');
        canvas.width = canvasW;
        canvas.height = canvasH;
        canvas.getContext('2d').drawImage(image, domStartX, domStartY, domW, domH, 0, 0, canvasW, canvasH);

        return canvas;
    }
};
