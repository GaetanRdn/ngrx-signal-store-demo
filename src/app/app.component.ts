import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToolbarComponent } from './toolbar.component';
import { NavigationComponent } from './navigation.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ToolbarComponent, NavigationComponent],
  template: `
  <header>
  <app-toolbar/>

  <app-navigation />
  </header>

  <main class="main-content">
    <router-outlet/>
  </main>
  `,
})
export class AppComponent {}
