/// <reference path="./node_modules/tns-platform-declarations/ios.d.ts" />
/// <reference path="./typings/DAScratchPad.d.ts" />

import { Color } from 'tns-core-modules/color';
import { PaintPadBase, drawColorProperty, drawWidthProperty, drawOpacityProperty } from './paint.common';

export class PaintPad extends PaintPadBase {
	public nativeView: DAScratchPadView;
	constructor() {
		super();
		this.nativeView = DAScratchPadView.alloc().initWithFrame(CGRectMake(0, 0, 100, 100));
		this.nativeView.clipsToBounds = true;
	}

	get ios(): DAScratchPadView {
		return this.nativeView;
	}

	[drawWidthProperty.getDefault](): number {
		return this.nativeView.drawWidth;
	}

	[drawColorProperty.getDefault](): UIColor {
		return this.nativeView.drawColor;
	}

	[drawOpacityProperty.getDefault](): number {
		return this.nativeView.drawOpacity;
	}

	public onLoaded() {
		if (this.width) {
			this.nativeView.frame.size.width = 300;
		}
		if (this.height) {
			this.nativeView.frame.size.height = 300;
		}
		super.onLoaded();
	}

	public getPainting(): Promise<any> {
		return new Promise((resolve, reject) => {
			try {
				const data = this.nativeView.getSketch();
				if (data) {
					resolve(data);
				} else {
					reject('Pad is empty.');
				}
			} catch (err) {
				reject(err);
			}
		});
	}

	public clearPainting(): void {
		try {
			if (this.backgroundColor) {
				let color = this.backgroundColor.toString;
				if (color.constructor == Color) {
					color = (color as any).ios;
				} else if (color.constructor == String) {
					color = new Color(<any>color).ios;
				}
				this.nativeView.clearToColor(color as any);
			} else {
				//this.nativeView.clearToColor(Color);
			}
		} catch (err) {
			console.log('Error clearing the paint pad: ' + err);
		}
	}
}
