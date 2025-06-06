import { computed } from '@angular/core';
import { Lesson, Module } from './module';
import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';

export type ModuleState = {
  modules: ReadonlyArray<Module>;
  lessonId: Lesson['id'];
};

export const initialState: ModuleState = {
  modules: [],
  lessonId: '1-1',
};

export const moduleStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withComputed(({ modules, lessonId }) => ({
    current: computed(() => {
      const moduleId = lessonId().split('-')[0];
      const currentModule = modules().find((module) => module.id === moduleId);
      const currentLesson = currentModule?.lessons.find(
        (lesson) => lesson.id === lessonId()
      );

      return {
        module: currentModule,
        lesson: currentLesson,
      };
    }),
  })),
  withMethods((store) => ({
    loadModules(modules: ReadonlyArray<Module>) {
      patchState(store, (state) => ({
        ...state,
        modules,
      }));
    },
    updateLessonId(lessonId: Lesson['id']) {
      patchState(store, (state) => ({
        ...state,
        lessonId,
      }));
    },
  }))
);
