import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page';
import { PaintPad } from 'nativescript-paint';
import { ColorPicker } from 'nativescript-color-picker';
import * as platformModule from 'tns-core-modules/platform';
import { Slider } from "ui/slider";

@Component({
	selector: 'home',
	moduleId: module.id,
	templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
	myPaintPad: PaintPad;
	colorPicker: ColorPicker;
	mainPage: Page;
	drawWidth: number = 5;
	drawColor: string = '#3489db';
	drawOpacity: number = 0;
	maxOpacity: number = 0;
	airBrushFlow: number = 0.7;
	paintingImage: {};
	@ViewChild('PaintPad') PaintPad: ElementRef;

	ngOnInit(): void {
		if (platformModule.isIOS) {
			this.drawOpacity = 1;
			this.maxOpacity = 1;
		} else {
			this.drawOpacity = 255;
			this.maxOpacity = 255;
		}
		this.myPaintPad = this.PaintPad.nativeElement;
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

	widthChange(event){
		let slider = <Slider>event.object;
    	this.drawWidth = slider.value;
	}

	opacityChange(event){
		let slider = <Slider>event.object;
    	this.drawOpacity = slider.value;
	}

	airbrushFlowChange(event){
		let slider = <Slider>event.object;
    	this.airBrushFlow = slider.value;
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
