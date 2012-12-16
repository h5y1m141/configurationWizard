/**
* Appcelerator Titanium Mobile
* This is generated code. Do not modify. Your changes *will* be lost.
* Generated code is Copyright (c) 2009-2011 by Appcelerator, Inc.
* All Rights Reserved.
*/
#import <Foundation/Foundation.h>
#import "TiUtils.h"
#import "ApplicationDefaults.h"
 
@implementation ApplicationDefaults
  
+ (NSMutableDictionary*) copyDefaults
{
    NSMutableDictionary * _property = [[NSMutableDictionary alloc] init];

    [_property setObject:[TiUtils stringValue:@"lpd3NHFEFNuz2yvPgZpyRQvVeZaFjgm9"] forKey:@"acs-oauth-secret-production"];
    [_property setObject:[TiUtils stringValue:@"2tbsWMO1w6HxdV9662XDhUNnBpOUshFa"] forKey:@"acs-oauth-key-production"];
    [_property setObject:[TiUtils stringValue:@"Ut9mInhQSo7Ij6dQ2jvQKESJaRZsXGkU"] forKey:@"acs-api-key-production"];
    [_property setObject:[TiUtils stringValue:@"9N2iQzL239oem7IAowmvBA1eQYCWA8Ds"] forKey:@"acs-oauth-secret-development"];
    [_property setObject:[TiUtils stringValue:@"4FIdGrO7ZZFMD7sNo2D7FT1U0SF06QmA"] forKey:@"acs-oauth-key-development"];
    [_property setObject:[TiUtils stringValue:@"JyNkRLnYgMTTrVosVeGurkNQfPhfETH7"] forKey:@"acs-api-key-development"];
    [_property setObject:[TiUtils stringValue:@"system"] forKey:@"ti.ui.defaultunit"];

    return _property;
}
@end
