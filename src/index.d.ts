import { View } from '@nativescript/core/ui/core/view';
import { Color } from '@nativescript/core/color';

export declare class PaintPad extends View {
	android: any;
	ios: any;

	drawColor: Color;
	drawWidth: number;
	drawOpacity: number;

	getPainting(): Promise<any>;
	clearPainting(): void;
	setToolType(num): void;
}
