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

        if (options && options.imageType === 'jpeg') {
            imageType = options.imageType;
            imageQuality = options.imageQuality || 1.0;
        }

        image.src = canvas.toDataURL('image/' + imageType, imageQuality);

        return image;
    },

    /**
     * img2canvas, convert img to canvas
     * @param  {object} image  image
     * @param  {number} startX startX of screenshot
     * @param  {number} startY startY of screenshot
     * @param  {number} width  width of screenshot
     * @param  {number} height height of screenshot
     * @return {object}        canvas
     */
    img2canvas: function(image, startX, startY, width, height) {
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        canvas.getContext('2d').drawImage(image, startX, startY, width, height, 0, 0, width, height);

        return canvas;
    }
};
