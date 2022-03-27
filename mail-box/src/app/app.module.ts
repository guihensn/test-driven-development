import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VisualizationCardComponent } from './visualization-card/visualization-card.component';
import { CloseDirective } from './directives/close.directive';

@NgModule({
  declarations: [
    AppComponent,
    VisualizationCardComponent,
    CloseDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
