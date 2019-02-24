#ifdef __OBJC__
#import <UIKit/UIKit.h>
#else
#ifndef FOUNDATION_EXPORT
#if defined(__cplusplus)
#define FOUNDATION_EXPORT extern "C"
#else
#define FOUNDATION_EXPORT extern
#endif
#endif
#endif

#import "MSColorComponentView.h"
#import "MSColorPicker.h"
#import "MSColorSelectionView.h"
#import "MSColorSelectionViewController.h"
#import "MSColorUtils.h"
#import "MSColorView.h"
#import "MSColorWheelView.h"
#import "MSHSBView.h"
#import "MSRGBView.h"
#import "MSSliderView.h"
#import "MSThumbView.h"
#import "UIControl+HitTestEdgeInsets.h"

FOUNDATION_EXPORT double MSColorPickerVersionNumber;
FOUNDATION_EXPORT const unsigned char MSColorPickerVersionString[];

