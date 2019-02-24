import { View, Property } from 'tns-core-modules/ui/core/view';
import { Color } from 'tns-core-modules/color';

export class PaintPadBase extends View {

}

export const drawColorProperty = new Property<PaintPadBase, string>({
  name: 'drawColor'
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

export const airBrushFlowProperty = new Property<PaintPadBase, number>({
  name: 'airBrushFlow',
  defaultValue: .7,
  valueConverter: v => +v,
});
airBrushFlowProperty.register(PaintPadBase);

export const canvasColorProperty = new Property<PaintPadBase, string>({
  name: 'canvasColor'
});
canvasColorProperty.register(PaintPadBase);
