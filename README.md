# html2screenshot
Generate a screenshot of the page with javascript
## Usage
Install:
``` javascript
npm install html2screenshot
```
The html2screenshot library utilizes Promises and expects them to be available in the global context.
``` javascript
// html2screenshot(html, options, cb)
html2screenshot(document.body, {
    startX: 0,
    startY: 0,
    canvasW: 100,
    canvasH: 200,
    background: '#fff',
    imageType: 'png',
    imageQuality: 1.0
}, (imgUrl) => {
    // todo
});
```
## Parameters
### html
`html` element you wanna screenshot.
### options
`options`  of screenshot.
### cb
`callback` function, built-in parameters `imgUrl`.
## Options
### startX
`startX` of the element you wanna screenshot, default 0.
### startY
`startY` of the element you wanna screenshot, default 0.
### canvasW
`canvasW` is the width of screenshot.
### canvasH
`canvasH` is the height of screenshot.
### background
`background` of screenshot, default '#fff'.
### imageType
The type of screenshot, default 'png'.
### imageQuality
The quality of screenshot, default 1.0.
## Examples
