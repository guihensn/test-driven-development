import { NotExpr } from '@angular/compiler';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Note } from './note';

import { VisualizationCardComponent } from './visualization-card.component';

describe(VisualizationCardComponent.name, () => {
  let component: VisualizationCardComponent;
  let fixture: ComponentFixture<VisualizationCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizationCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('(D) Should show content when (@Input note) is not null', ()=> {
    let note =  new Note('Guilherme', 'Teste', 'Asdasd');

    component.note = note;
    fixture.detectChanges();

    let nameElement:HTMLElement = fixture.nativeElement.querySelector('#name');
    let titleElement:HTMLElement  = fixture.nativeElement.querySelector('#title');
    let contentElement:HTMLElement  = fixture.nativeElement.querySelector('#content');

    expect(nameElement.textContent!.trim()).withContext("Name").toBe(note.name);
    expect(titleElement.textContent!.trim()).withContext("Title").toBe(note.title);
    expect(contentElement.textContent!.trim()).withContext("Content").toBe(note.content);
  })
});
