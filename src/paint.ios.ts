import { Color } from 'tns-core-modules/color';
import { PaintPadBase, drawColorProperty, drawWidthProperty, drawOpacityProperty, canvasColorProperty, airBrushFlowProperty } from './paint.common';
import { fromNativeSource } from 'tns-core-modules/image-source';

export class PaintPad extends PaintPadBase {
  public nativeView: DAScratchPadView;
  private _canvasColor: string;

  createNativeView() {
    const scratchPad = DAScratchPadView.alloc().initWithFrame(CGRectMake(0, 0, 100, 100));
    // console.log('scratchPad:', scratchPad);
    // scratchPad.drawColor = new Color('#3489db').ios;
    // scratchPad.drawWidth = 3;
    // scratchPad.drawOpacity = 1;
    return scratchPad;
  }

  [canvasColorProperty.setNative](value: string) {
    // console.log('canvasColorProperty:', value);
    this._canvasColor = value;
    this.nativeView.clearToColor(new Color(value).ios);
  }

  [drawWidthProperty.getDefault](): number {
    return this.nativeView.drawWidth;
  }

  [drawWidthProperty.setNative](value: number) {
    // console.log('drawWidthProperty value:', value);
    // console.log('this.nativeView:', this.nativeView);
    this.nativeView.drawWidth = value;
  }
  
  [drawColorProperty.setNative](value: string) {
    // console.log('drawColorProperty value:', value);
    // console.log('this.nativeView:', this.nativeView);
    this.nativeView.drawColor = new Color(value).ios;
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

  [airBrushFlowProperty.setNative](value: number) {
    if (value < 0 || value > 1) {
      throw new Error('value range can only be 0 - 1');
    }
    this.nativeView.airBrushFlow = value;
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
