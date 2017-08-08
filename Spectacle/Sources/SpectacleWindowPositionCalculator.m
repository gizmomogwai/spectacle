#import "SpectacleWindowPositionCalculator.h"

#import <JavaScriptCore/JavaScriptCore.h>

#import "SpectacleJavaScriptEnvironment.h"
#import "SpectacleWindowPositionCalculationRegistry.h"
#import "SpectacleWindowPositionCalculationResult.h"

@implementation SpectacleWindowPositionCalculator
{
  SpectacleWindowPositionCalculationRegistry *_windowPositionCalculationRegistry;
  SpectacleJavaScriptEnvironment *_javaScriptEnvironment;
}

- (instancetype)initWithErrorHandler:(void(^)(NSString *message))errorHandler
{
  if (self = [super init]) {
    _windowPositionCalculationRegistry = [SpectacleWindowPositionCalculationRegistry new];
    _javaScriptEnvironment = [[SpectacleJavaScriptEnvironment alloc] initWithContextBuilder:^(JSContext *context) {
      context.exceptionHandler = ^(JSContext *context, JSValue *exception) {
        NSString *errorName = [exception[@"name"] toString];
        NSString *errorMessage = [exception[@"message"] toString];
        errorHandler([NSString stringWithFormat:@"%@\n%@", errorName, errorMessage]);
      };
      context[@"windowPositionCalculationRegistry"] = _windowPositionCalculationRegistry;
      context[@"CGRectContainsRect"] = ^BOOL(CGRect rect1, CGRect rect2) {
        return CGRectContainsRect(rect1, rect2);
      };
      context[@"CGRectEqualToRect"] = ^BOOL(CGRect rect1, CGRect rect2) {
        return CGRectEqualToRect(rect1, rect2);
      };
      context[@"CGRectGetMinX"] = ^CGFloat(CGRect rect) {
        return CGRectGetMinX(rect);
      };
      context[@"CGRectGetMinY"] = ^CGFloat(CGRect rect) {
        return CGRectGetMinY(rect);
      };
      context[@"CGRectGetMidX"] = ^CGFloat(CGRect rect) {
        return CGRectGetMidX(rect);
      };
      context[@"CGRectGetMidY"] = ^CGFloat(CGRect rect) {
        return CGRectGetMidY(rect);
      };
      context[@"CGRectGetMaxX"] = ^CGFloat(CGRect rect) {
        return CGRectGetMaxX(rect);
      };
      context[@"CGRectGetMaxY"] = ^CGFloat(CGRect rect) {
        return CGRectGetMaxY(rect);
      };
    }];
  }
  return self;
}

void logRect(NSString* message, CGRect r) {
    NSLog(@"%@: %f,%f %f,%f", message, CGRectGetMinX(r), CGRectGetMinY(r), CGRectGetMaxX(r), CGRectGetMaxY(r));
}

- (SpectacleWindowPositionCalculationResult *)calculateWindowRect:(CGRect)windowRect
                                       visibleFrameOfSourceScreen:(CGRect)visibleFrameOfSourceScreen
                                  visibleFrameOfDestinationScreen:(CGRect)visibleFrameOfDestinationScreen
                                                           action:(SpectacleWindowAction *)action
{
  JSValue *windowPositionCalculation = [_windowPositionCalculationRegistry windowPositionCalculationWithAction:action];
  if (!windowPositionCalculation) {
      NSLog(@"no calc found for %@", action);
    return nil;
  }
  NSLog(@"sending to calculator %@, action %@", windowPositionCalculation, action);
    logRect(@"windowRect", windowRect);
    logRect(@"visibleFrameOfSourceScreen", visibleFrameOfSourceScreen);
    logRect(@"visibleFrameOfDestinationScreen", visibleFrameOfDestinationScreen);
  JSValue *result = [windowPositionCalculation callWithArguments:@[
                                                                   [_javaScriptEnvironment valueWithRect:windowRect],
                                                                   [_javaScriptEnvironment valueWithRect:visibleFrameOfSourceScreen],
                                                                   [_javaScriptEnvironment valueWithRect:visibleFrameOfDestinationScreen],
                                                                   ]];
    logRect(@"result", [result toRect]);
  return [SpectacleWindowPositionCalculationResult resultWithAction:action windowRect:[result toRect]];
}

@end
