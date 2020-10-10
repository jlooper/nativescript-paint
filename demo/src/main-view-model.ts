import { Observable, Page } from "@nativescript/core";
import { PaintPad } from 'nativescript-paint';
import { ColorPicker } from 'nativescript-color-picker';
import * as platformModule from '@nativescript/core/platform';

export class HelloWorldModel extends Observable {
	private _myPaintPad: PaintPad;
	private _colorPicker: ColorPicker;

	public drawWidth = 5;
	public drawColor = "#3489db";
	public drawOpacity = 0;
	public maxOpacity = 0;
	public airBrushFlow = 0.7;

	constructor(mainPage: Page) {
		super();
		//set a default opacity
		if (platformModule.isIOS) {
			this.drawOpacity = 1;
			this.maxOpacity = 1;
		} else {
			this.drawOpacity = 255;
			this.maxOpacity = 255;
		}
		this._myPaintPad = <any> mainPage.getViewById("paintPad");
		this._colorPicker = new ColorPicker();
	}

	public getMyPainting() {
		this._myPaintPad.getPainting().then((img) => {
			this.set("paintingImage", img);
		});
	}

	public clearMyPainting() {
		this._myPaintPad.clearPainting();
		this.set("paintingImage", null);
	}

	public selectAirBrush() {
		this._myPaintPad.setToolType(1);
	}

	public selectPaintBrush() {
		this._myPaintPad.setToolType(0);
	}

	public pickColor() {
		this._colorPicker
			.show("#3489db", "HEX")
			.then((result) => {
				this.set("drawColor", result);
			})
			.catch((err) => {
				console.log(err);
			});
	}
}
