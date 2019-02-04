import { Observable } from 'tns-core-modules/data/observable';
import { Page } from 'tns-core-modules/ui/page';
import { Slider } from 'tns-core-modules/ui/slider';
import { fromNativeSource } from 'tns-core-modules/image-source/image-source';
//import { ColorPicker } from 'nativescript-color-picker';
import { PaintPad } from 'nativescript-paint';

export class HelloWorldModel extends Observable {
	private _myPaintPad: PaintPad;
	private _widthSlider: Slider;
	//private _penInput: any;
	//private _colorPicker: ColorPicker;

	public drawWidth = 5;
	public drawColor = '#3489db';
	public drawOpacity = 1;

	constructor(mainPage: Page) {
		super();
		this._myPaintPad = mainPage.getViewById('paintPad') as PaintPad;
		//this._colorPicker = new ColorPicker();
	}

	public getMyPainting() {
		this._myPaintPad.getPainting().then(res => {
			console.log(res);
			// convert native image data (bitmap on android) to imageSource for NS
			var image = fromNativeSource(res);
			console.log('trying to set image');
			this.set('paintingImage', image);
		});
	}

	public clearMyPainting() {
		this._myPaintPad.clearPainting();
		this.set('paintingImage', null);
	}

	/*public changePenColor() {
		this.set('penColor', '#ff4801');
	}

	public openColorPicker() {
		this._colorPicker
			.show('#3489db', 'HEX')
			.then(result => {
				this.set('penColor', result);
			})
			.catch(err => {
				console.log(err);
			});
	}*/
}
