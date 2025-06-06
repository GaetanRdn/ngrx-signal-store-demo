import {
  ApplicationConfig,
  inject,
  provideZoneChangeDetection,
} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  provideRouter,
  withComponentInputBinding,
} from '@angular/router';
import { LessonPage } from './module/lesson.page';
import { HomePage } from './home.page';
import { moduleStore } from './module/module.store';
import { InMemoryModuleGateway } from './module/in-memory-module.gateway';
import { firstValueFrom } from 'rxjs';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      [
        {
          path: '',
          resolve: {
            _: async () => {
              const moduleGateway = inject(InMemoryModuleGateway);
              const store = inject(moduleStore);
              const modules = await firstValueFrom(moduleGateway.getAll());

              store.loadModules(modules);
              return true;
            },
          },
          children: [
            {
              path: ':module/:lesson',
              resolve: {
                _: (route: ActivatedRouteSnapshot) => {
                  const { module, lesson } = route.params;
                  const store = inject(moduleStore);
                  store.updateLessonId(`${module}-${lesson}`);
                  return true;
                },
              },
              component: LessonPage,
            },
            { path: '', pathMatch: 'full', component: HomePage },
          ],
        },
      ],
      withComponentInputBinding()
    ),
  ],
};
