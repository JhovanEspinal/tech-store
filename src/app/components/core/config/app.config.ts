import { InjectionToken } from '@angular/core';

export const APP_CONFIG = new InjectionToken<string>('GlobalAppConfig');

export interface AppConfig {
  inventoryBaseUrl: string;
}