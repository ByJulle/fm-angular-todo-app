import {
  ApplicationConfig,
  provideZoneChangeDetection,
  isDevMode,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { tasksReducer } from './state/task/task.reducer';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { themeReducer } from './state/theme/theme.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore({ tasks: tasksReducer, theme: themeReducer }),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode(), trace: true }),
  ],
};
