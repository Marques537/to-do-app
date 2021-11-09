import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//angular imports
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//my imports
import { SharedModule } from './shared/shared.module';
import { MaterialModule } from './material/material.module';
import { PagesModule } from './pages/pages.module';
//
import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    SharedModule,
    PagesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
