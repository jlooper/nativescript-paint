declare const enum DAScratchPadToolType {
	Paint = 0,

	AirBrush = 1,
}

declare var DAScratchPadVersionNumber: number;

declare var DAScratchPadVersionString: interop.Reference<number>;

declare class DAScratchPadView extends UIControl {
	static alloc(): DAScratchPadView; // inherited from NSObject

	static appearance(): DAScratchPadView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): DAScratchPadView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(
		trait: UITraitCollection,
		ContainerClass: typeof NSObject
	): DAScratchPadView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(
		trait: UITraitCollection,
		containerTypes: NSArray<typeof NSObject> | typeof NSObject[]
	): DAScratchPadView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): DAScratchPadView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(
		containerTypes: NSArray<typeof NSObject> | typeof NSObject[]
	): DAScratchPadView; // inherited from UIAppearance

	static new(): DAScratchPadView; // inherited from NSObject

	airBrushFlow: number;

	drawColor: UIColor;

	drawOpacity: number;

	drawWidth: number;

	toolType: DAScratchPadToolType;

	clearToColor(color: UIColor): void;

	getSketch(): UIImage;

	setSketch(sketch: UIImage): void;
}
