import { OpaqueToken } from "@angular/core";

export * from './config';
export * from './contracts';
export * from './type-guards';
export * from './model';
export * from './default-layout.config';

export const GoldenLayoutContainer = new OpaqueToken('GoldenLayoutContainer');
export const GoldenLayoutComponentState = new OpaqueToken('GoldenLayoutComponentState');