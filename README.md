# NativeScript Paint

![apple](https://cdn3.iconfinder.com/data/icons/picons-social/57/16-apple-32.png) ![android](https://cdn4.iconfinder.com/data/icons/logos-3/228/android-32.png)

[![npm version](https://badge.fury.io/js/nativescript-paint.svg)](http://badge.fury.io/js/nativescript-paint)

[![NPM](https://nodei.co/npm/nativescript-paint.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/nativescript-paint/)

This plugin allows the artist to create paintings in an app using opacity and width settings cross platform. On iOS, an Airbrush as well as a Paintbrush is available. With the Airbrush, you can control Airbrush Flow to make the paint effect change. This plugin would be useful to folks who need a more art-friendly type plugin. Use with the [Color Picker plugin](https://market.nativescript.org/plugins/nativescript-color-picker) to enable color changes.

![demo](demo.gif)

## Installation

```javascript
tns plugin add nativescript-paint
```

### Requiring the plugin

```js
import { PaintPad } from 'nativescript-paint';
```

### Using the PaintPad

#### JavaScript

1. Add the plugin to your xml

```bash
<Page xmlns="http://schemas.nativescript.org/tns.xsd"
    xmlns:paint="nativescript-paint">
```

2. Create a PaintPad area

```bash
<paint:PaintPad canvasColor="#fff" id="paintPad" margin="10" width="280" height="280" drawColor="{{ drawColor }}" drawWidth="{{ drawWidth }}" airBrushFlow="{{ airBrushFlow }}" drawOpacity="{{ drawOpacity }}" />
```

#### Angular

1. Register the plugin in a module

```js
import { registerElement } from 'nativescript-angular/element-registry';
registerElement('PaintPad', () => require('nativescript-paint').PaintPad);
```

2. Add it to your markup

```bash
<PaintPad
    canvasColor="#fff"
    id="paintPad"
	[drawColor]="drawColor"
	[drawWidth]="drawWidth"
	[airBrushFlow]="airBrushFlow"
	[drawOpacity]="drawOpacity"
></PaintPad>
```

3. Reference the PaintPad by id to manipulate it

```js
this.myPaintPad = this.mainPage.getViewById('paintPad') as PaintPad;
```

#### Vue

1. In `main.js`, register the element:

```js
Vue.registerElement('PaintPad', () => require('nativescript-paint').PaintPad);
```

2. Use it in your app:

```bash
<PaintPad
    canvasColor="#fff"
    ref="paintPad"
    :drawColor="drawColor"
    :drawWidth="drawWidth"
    :airBrushFlow="airBrushFlow"
    :drawOpacity="drawOpacity"
/>
```

3. Reference the PaintPad by ref to manipulate it

```js
selectAirBrush() {
    this.$refs.paintPad.nativeView.setToolType(1);
}
```

## Demos

In `/src`, you can use npm scripts to run demos in vanilla JS, Angular and Vue. Run:

`npm run demo.ios` or `npm run demo-ng.ios` or `npm run demo-vue.ios`. Reset the demos similarly, running `npm run demo(-ng or -vue).reset`.

## Usage

Describe any usage specifics for your plugin. Give examples for Android, iOS, Angular if needed. See [nativescript-drop-down](https://www.npmjs.com/package/nativescript-drop-down) for example.
`javascript Usage code snippets here`)

| iOS                                                     | Android                                                    |
| ------------------------------------------------------- | ---------------------------------------------------------- |
| [DAScratchPad](https://github.com/dblapps/DAScratchPad) | [FreeDrawView](https://android-arsenal.com/details/1/4931) |

## API

Describe your plugin methods and properties here. See [nativescript-feedback](https://github.com/EddyVerbruggen/nativescript-feedback) for example.

| Property        | Default                  | Description                                                |
| --------------- | ------------------------ | ---------------------------------------------------------- |
| `drawWidth`     | 5                        | width of the brush                                         |
| `drawColor`     | #3489db                  | a hex code for color                                       |
| `drawOpacity`   | 1 (iOS) or 255 (Android) | on iOS, set this to between 0-1. On Android, between 0-255 |
| `airBrushFlow`  | 0.7                      | iOS only - how heavy the Airbrush paints                   |
| `getPainting`   |                          | save an image of your painting                             |
| `clearPainting` |                          | clear the paint area                                       |
| `setToolType`   | 0                        | iOS only - set 0 for Paintbrush, 1 for Airbrush            |

## Credits

With gratitude to Brad Martin, author of the first drawing plugin [NativeScript-Drawingpad](https://market.nativescript.org/plugins/nativescript-drawingpad), on which this plugin is heavily based, and to the help of Nathan Walker and Osei Fortune. ❤️

## License

Apache License Version 2.0, January 2004

```

```
