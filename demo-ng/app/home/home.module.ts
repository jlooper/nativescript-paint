import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { HomeComponent } from './home.component';

import { registerElement } from 'nativescript-angular/element-registry';
registerElement('PaintPad', () => require('nativescript-paint').PaintPad);

@NgModule({
	imports: [NativeScriptCommonModule],
	declarations: [HomeComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class HomeModule {}
