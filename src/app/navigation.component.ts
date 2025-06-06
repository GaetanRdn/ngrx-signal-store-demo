import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navigation',
  imports: [RouterLink],
  template: `
  <nav class="navigation">
    <a routerLink="/1/1">Module 1 - Lesson 1</a>
    <a routerLink="/1/2">Module 1 - Lesson 2</a>
    <a routerLink="/2/1">Module 2 - Lesson 1</a>
  </nav>
  `,
})
export class NavigationComponent {}
