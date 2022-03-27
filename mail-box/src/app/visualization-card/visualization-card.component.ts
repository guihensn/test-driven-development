import { Component, Input, OnInit } from '@angular/core';
import { Note } from './note';

@Component({
  selector: 'app-visualization-card',
  templateUrl: './visualization-card.component.html',
  styleUrls: ['./visualization-card.component.css']
})
export class VisualizationCardComponent implements OnInit {
  @Input() note?:Note;

  constructor() { }

  ngOnInit(): void {
  }

}
