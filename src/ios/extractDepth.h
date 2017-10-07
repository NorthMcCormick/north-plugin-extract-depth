#import <Cordova/CDVPlugin.h>

@interface extractDepth : CDVPlugin {
}

// The hooks for our plugin commands
- (void)echo:(CDVInvokedUrlCommand *)command;
- (void)getDate:(CDVInvokedUrlCommand *)command;
- (void)askForImage:(CDVInvokedUrlCommand*)command;

@end
