import { EventData, Page } from '@nativescript/core';
import { HelloWorldModel } from './main-view-model';
import { isAndroid, Device } from '@nativescript/core/platform';
import { Color } from '@nativescript/core/color';
import { android } from '@nativescript/core/application';

// Event handler for Page "loaded" event attached in main-page.xml
export function pageLoaded(args: EventData) {
	// Get the event sender
	var page = <Page>args.object;
	page.bindingContext = new HelloWorldModel(page);

	if (isAndroid && Device.sdkVersion >= '21') {
		let window = android.startActivity.getWindow();
		window.setStatusBarColor(new Color('#336699').android);
	}
}
