var html2canvas = require('html2canvas');
var utils = require('./lib/utils.js');

/**
 * html2img, convert dom to img
 * @param  {object}   dom     dom object
 * @param  {object}   options options of img
 * @param  {Function} cb      callback
 */
function html2img(dom, options, cb) {
    var imgUrl = '';
    var startX = options.startX || 0;
    var startY = options.startY || 0;
    var domW = dom.offsetWidth;
    var domH = dom.scrollHeight || dom.offsetHeight;
    var canvasW = options.canvasW || domW;
    var canvasH = options.canvasH || domH;
    var canvas2imgOptions = options.imageType ? {
        imageType: options.imageType,
        imageQuality: options.imageQuality
    } : null;

    html2canvas(dom, {
        background: options.background || '#fff',
    }).then(function(canvas) {
        var img = utils.canvas2img(canvas, canvas2imgOptions);

        img.onload = function() {
            img.onload = null;
            var newCanvas = utils.img2canvas(
                img, startX, startY, domW, domH, 0, 0, canvasW, canvasH);
            imgUrl = utils.canvas2img(newCanvas, canvas2imgOptions).src;

            cb && cb(imgUrl);
        };
    });
};

module.exports = html2img;
