import { Color } from 'tns-core-modules/color';
import {
	PaintPadBase,
	drawColorProperty,
	drawWidthProperty,
	drawOpacityProperty,
	canvasColorProperty,
	airBrushFlowProperty,
} from './paint.common';
import { fromNativeSource } from 'tns-core-modules/image-source';

export class PaintPad extends PaintPadBase {
	public nativeView: DAScratchPadView;
	public toolType: DAScratchPadToolType;
	private _canvasColor: string;

	createNativeView() {
		const scratchPad = DAScratchPadView.alloc().initWithFrame(CGRectMake(0, 0, 100, 100));
		return scratchPad;
	}

	//get defaults

	[drawWidthProperty.getDefault](): number {
		return this.nativeView.drawWidth;
	}

	[drawColorProperty.getDefault](): UIColor {
		return this.nativeView.drawColor;
	}

	[drawOpacityProperty.getDefault](): number {
		return this.nativeView.drawOpacity;
	}

	[airBrushFlowProperty.getDefault](): number {
		return this.nativeView.airBrushFlow;
	}

	//set native values

	[canvasColorProperty.setNative](value: string) {
		// console.log('canvasColorProperty:', value);
		this._canvasColor = value;
		this.nativeView.clearToColor(new Color(value).ios);
	}

	[drawWidthProperty.setNative](value: number) {
		this.nativeView.drawWidth = value;
	}

	[drawOpacityProperty.setNative](value: number) {
		this.nativeView.drawOpacity = value;
	}

	[drawColorProperty.setNative](value: string) {
		this.nativeView.drawColor = new Color(value).ios;
	}

	[airBrushFlowProperty.setNative](value: number) {
		this.nativeView.airBrushFlow = value;
	}

	//methods

	public setToolType(num): void {
		this.nativeView.toolType = num;
	}

	public getPainting(): Promise<any> {
		return new Promise((resolve, reject) => {
			try {
				const data = this.nativeView.getSketch();
				if (data) {
					resolve(fromNativeSource(data));
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
			let color;
			if (this._canvasColor) {
				color = new Color(this._canvasColor).ios;
			} else {
				// default to white
				color = new Color('#fff').ios;
			}
			this.nativeView.clearToColor(color);
		} catch (err) {
			console.log('Error clearing the paint pad: ' + err);
		}
	}
}
