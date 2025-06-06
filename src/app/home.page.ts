import { Component } from '@angular/core';

@Component({
  host: { class: 'home-page' },
  template: `
    <h1 class="title">Bienvenue sur EasyAngularKit</h1>

    <p class="description">
      La plateforme qui te permet d'apprendre Angular en toute autonomie – à ton rythme – sans installation, ni configuration.
    </p>
  `,
})
export class HomePage {}
