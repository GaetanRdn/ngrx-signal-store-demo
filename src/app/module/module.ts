export type Lesson = {
  id: `${number}-${number}`;
  title: string;
  video: string | null;
  solution: string | null;
};

export type Module = {
  id: string;
  name: string;
  description: string;
  version: 'v18' | 'v19';
  lessons: ReadonlyArray<Lesson>;
};
