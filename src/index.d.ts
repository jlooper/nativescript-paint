import { View } from 'tns-core-modules/ui/core/view';
import { Color } from 'tns-core-modules/color';

export class PaintPad extends View {
	android: any;
	ios: any;

	drawColor: Color;
	drawWidth: number;
	drawOpacity: number;

	getPainting(): Promise<any>;
	clearPainting(): void;
}
