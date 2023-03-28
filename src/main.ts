import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { APP_CONFIG } from './app/components/core/config/app.config';


fetch('/assets/env/env.json')
  .then((response) => response.json())
  .then((config) => {
    
    return platformBrowserDynamic([
      {
        provide: APP_CONFIG,
        useValue: config,
      },
    ]).bootstrapModule(AppModule);
  })
  .catch((err) => console.error(err));