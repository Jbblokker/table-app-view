import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TablePresentationComponent } from './table-presentation/table-presentation.component';
import { TableContainerComponent } from './table-container/table-container.component';

@NgModule({
  declarations: [
    AppComponent,
    TablePresentationComponent,
    TableContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
