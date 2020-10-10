import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular';
import { HomeComponent } from './home.component';

import { registerElement } from '@nativescript/angular';
registerElement('PaintPad', () => require('nativescript-paint').PaintPad);

@NgModule({
	imports: [
		NativeScriptCommonModule
	],
	declarations: [
		HomeComponent
	],
	schemas: [NO_ERRORS_SCHEMA],
})
export class HomeModule {}
