import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { registerElement } from 'nativescript-angular/element-registry';
import { PaintPad } from 'nativescript-paint';
registerElement('PaintPad', () => require('nativescript-paint').PaintPad);

@NgModule({
	bootstrap: [AppComponent],
	imports: [NativeScriptModule, AppRoutingModule],
	declarations: [AppComponent, HomeComponent],
	providers: [PaintPad],
	schemas: [NO_ERRORS_SCHEMA],
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule {}
