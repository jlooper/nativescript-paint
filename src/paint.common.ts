import { View, Property } from 'tns-core-modules/ui/core/view';
import { Color } from 'tns-core-modules/color';
import { PaintPad as PaintPadDefinition } from '.';

export abstract class PaintPadBase extends View implements PaintPadDefinition {
	public drawColor: Color;
	public drawWidth: number;
	public drawOpacity: number;

	public abstract clearPainting(): void;
	public abstract getPainting(): Promise<any>;
}

export const drawColorProperty = new Property<PaintPadBase, Color>({
	name: 'drawColor',
	valueConverter: v => new Color(v),
	equalityComparer: Color.equals,
});
drawColorProperty.register(PaintPadBase);

export const drawWidthProperty = new Property<PaintPadBase, number>({
	name: 'drawWidth',
	defaultValue: 1,
	valueConverter: v => +v,
});
drawWidthProperty.register(PaintPadBase);

export const drawOpacityProperty = new Property<PaintPadBase, number>({
	name: 'drawOpacity',
	defaultValue: 1,
	valueConverter: v => +v,
});
drawOpacityProperty.register(PaintPadBase);
