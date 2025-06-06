import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe(AppComponent, () => {
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      imports: [AppComponent],
    }).createComponent(AppComponent);
    fixture.detectChanges();
  });

  it('doit afficher Hello world in v19 ✌🏼', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Hello world in v19 ✌🏼');
  });
});
