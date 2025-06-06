import { Module } from './module';

export default [
  {
    id: '1',
    name: 'Les fondamentaux d’Angular',
    description:
      'Découvre les bases essentielles pour démarrer avec Angular : composants, templates, bindings.',
    version: 'v19',
    lessons: [
      {
        id: '1-1',
        title: 'Créer son premier composant',
        video: 'https://www.youtube.com/watch?v=abcd1234',
        solution: 'https://stackblitz.com/edit/angular-lesson1-solution',
      },
      {
        id: '1-2',
        title: 'Comprendre le data binding',
        video: 'https://www.youtube.com/watch?v=efgh5678',
        solution: null,
      },
    ],
  },
  {
    id: '2',
    name: 'Angular : Maîtriser les formulaires',
    description:
      'Approfondis ta compréhension des formulaires avec Reactive Forms et Template Forms.',
    version: 'v19',
    lessons: [
      {
        id: '2-1',
        title: 'Créer un formulaire avec ReactiveForms',
        video: null,
        solution: 'https://stackblitz.com/edit/angular-reactiveform-solution',
      },
    ],
  },
] satisfies ReadonlyArray<Module>;
