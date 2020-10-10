/// <reference path="./node_modules/@nativescript/types/index.d.ts" />

import { Color } from '@nativescript/core/color';
import {
	PaintPadBase,
	drawColorProperty,
	drawWidthProperty,
	drawOpacityProperty,
	canvasColorProperty,
} from './paint.common';
import { fromNativeSource } from '@nativescript/core/image-source';

declare var com: any;

export class PaintPad extends PaintPadBase {
	//android does not support airbrush
	private _canvasColor: string;

	get android() {
		return this.nativeView;
	}

	public createNativeView() {
		const scratchPad = new com.rm.freedrawview.FreeDrawView(this._context, null);
		return scratchPad;
	}

	//get defaults

	[drawWidthProperty.getDefault](): number {
		return this.nativeView.paintWidth;
	}

	[drawColorProperty.getDefault](): number {
		return this.nativeView.paintColor;
	}

	[drawOpacityProperty.getDefault](): number {
		return this.nativeView.paintAlpha;
	}

	//setters

	[canvasColorProperty.setNative](value: string) {
		// console.log('canvasColorProperty:', value);
		this._canvasColor = value;
		this.nativeView.clearDraw();
	}

	[drawWidthProperty.setNative](value: number) {
		this.nativeView.setPaintWidthPx(value);
	}

	[drawOpacityProperty.setNative](value: number) {
		this.nativeView.setPaintAlpha(value);
	}

	[drawColorProperty.setNative](value: Color | number) {
		const color = value instanceof Color ? value.android : value;
		this.nativeView.setPaintColor(color);
	}

	//methods

	public getPainting(): Promise<any> {
		return new Promise((resolve, reject) => {
			try {
				this.nativeView.getDrawScreenshot(
					new com.rm.freedrawview.FreeDrawView.DrawCreatorListener({
						onDrawCreated: function(drawing) {
							resolve(fromNativeSource(drawing));
						},

						onDrawCreationError: function() {
							reject('Pad is empty.');
						},
					})
				);
			} catch (err) {
				reject(err);
			}
		});
	}

	public clearPainting(): void {
		try {
			this.nativeView.clearDraw();
		} catch (err) {
			console.log('Error in clearDrawing: ' + err);
		}
	}
}
