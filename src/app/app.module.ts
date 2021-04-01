import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import{HttpClientModule}from '@angular/common/http'
import{ReactiveFormsModule}from '@angular/forms'
import{FormsModule}from '@angular/forms';
import{SiteLayoutModule} from './site-layout/site-layout.module';
import { CommonModule } from '@angular/common';
import {MovieModule}from '../app/movie/movie.module'


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    SiteLayoutModule,
    CommonModule,
    MovieModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
