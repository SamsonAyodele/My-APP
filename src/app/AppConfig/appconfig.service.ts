import { environment } from './../../environments/environment';
import { AppConfig } from './appconfig.interface';
import { InjectionToken }  from '@angular/core'

export const API_SERVICE_CONFIG = new InjectionToken<AppConfig>('app.config');

export const APP_CONFIG: AppConfig = {
  apiEndpoint:environment.apiEndpoint
};
