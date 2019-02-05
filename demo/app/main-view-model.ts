import { Observable } from 'tns-core-modules/data/observable';
import { Page } from 'tns-core-modules/ui/page';
import { PaintPad } from 'nativescript-paint';

export class HelloWorldModel extends Observable {
  private _myPaintPad: PaintPad;

  public drawWidth = 5;
  public drawColor = '#3489db';
  public drawOpacity = 1;
  public airBrushFlow = .7;

  constructor(mainPage: Page) {
    super();
    this._myPaintPad = mainPage.getViewById('paintPad') as PaintPad;
  }

  public getMyPainting() {
    this._myPaintPad.getPainting().then(img => {
      this.set('paintingImage', img);
    });
  }

  public clearMyPainting() {
    this._myPaintPad.clearPainting();
    this.set('paintingImage', null);
  }
}
