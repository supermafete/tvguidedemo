import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import {
  PanelModule,
  ButtonModule,
  InputTextModule,
  DataTableModule,
  SharedModule,
  DropdownModule
 } from 'primeng/primeng'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    NoopAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    PanelModule,
    ButtonModule,
    InputTextModule,
    DataTableModule,
    SharedModule,
    DropdownModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
