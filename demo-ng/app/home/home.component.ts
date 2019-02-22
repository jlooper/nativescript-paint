import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page';
import { PaintPad } from 'nativescript-paint';
import { ColorPicker } from 'nativescript-color-picker';
import * as platformModule from 'tns-core-modules/platform';

@Component({
	selector: 'home',
	moduleId: module.id,
	templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
	myPaintPad: PaintPad;
	colorPicker: ColorPicker;
	mainPage: Page;
	drawWidth: number;
	drawColor: string;
	drawOpacity: number;
	maxOpacity: number;
	airBrushFlow: number;
	paintingImage: {};

	ngOnInit(): void {
		if (platformModule.isIOS) {
			this.drawOpacity = 1;
			this.maxOpacity = 1;
		} else {
			this.drawOpacity = 255;
			this.maxOpacity = 255;
		}
		this.myPaintPad = this.mainPage.getViewById('paintPad') as PaintPad;
		this.colorPicker = new ColorPicker();
	}

	//methods
	getMyPainting() {
		this.myPaintPad.getPainting().then(img => {
			this.paintingImage = img;
		});
	}

	clearMyPainting() {
		this.myPaintPad.clearPainting();
		this.paintingImage = null;
	}

	selectAirBrush() {
		this.myPaintPad.setToolType(1);
	}

	selectPaintBrush() {
		this.myPaintPad.setToolType(0);
	}

	pickColor() {
		this.colorPicker
			.show('#3489db', 'HEX')
			.then(result => {
				this.drawColor = result.toString();
			})
			.catch(err => {
				console.log(err);
			});
	}
}
