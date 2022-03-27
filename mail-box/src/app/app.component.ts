import { Component } from '@angular/core';
import { Note } from './visualization-card/note';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  note = new Note("Guilherme","Projeto de texte", "Lorem ipsum")
}
