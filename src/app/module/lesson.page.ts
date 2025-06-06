import { Component, computed, inject, signal } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { Lesson, Module } from './module';
import { moduleStore } from './module.store';

@Component({
  selector: 'app-lesson-page',
  imports: [JsonPipe],
  template: `
  @if (module(); as module) {
  <section class="lesson-page">
  <header class="module-header">
    <h2>{{ module.name }} <span class="version">({{ module.version }})</span></h2>
    <p class="module-description">{{ module.description }}</p>
  </header>

  @if (lesson(); as lesson) {
  <article class="lesson-content">
    <h1 class="lesson-title">{{ lesson.title }}</h1>

    <ul class="lesson-details">
      @if (lesson.video){
      <li>🎥 Vidéo disponible</li>
      }
      @if (lesson.solution){
      <li>🧩 Solution incluse</li>
      }
      @if (!lesson.video && !lesson.solution){
      <li>ℹ️ Pas de contenu associé</li>
      }
    </ul>
  </article>
  }
</section>
} @else {
  <p>Pas de données</p>
}
  `,
})
export class LessonPage {
  protected readonly moduleStore = inject(moduleStore);
  protected readonly current = this.moduleStore.current;
  protected readonly module = computed(() => this.current().module);
  protected readonly lesson = computed(() => this.current().lesson);
}
