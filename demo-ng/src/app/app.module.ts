import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "@nativescript/angular";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeModule } from "./home/home.module";
import { PaintPad } from "nativescript-paint";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        HomeModule
    ],
    declarations: [
        AppComponent,
    ],
    providers: [
        PaintPad
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
