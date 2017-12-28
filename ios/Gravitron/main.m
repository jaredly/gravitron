//
//  main.m
//  OCamlTest
//
//  Created by Wojciech Czekalski on 22.01.2017.
//  Copyright © 2017 wokalski. All rights reserved.
//

#import <UIKit/UIKit.h>
#import "AppDelegate.h"
#import "callback.h"

int main(int argc, char * argv[]) {
    @autoreleasepool {
		// Initialize OCaml.
        caml_main(argv);
        return UIApplicationMain(argc, argv, nil, NSStringFromClass([AppDelegate class]));
    }
}
