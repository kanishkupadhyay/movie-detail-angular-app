import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import {MaterialModule}from '../material/material.module'
import {MatIconModule} from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule}from '@angular/forms';
import { ExactMovieComponent } from './exact-movie/exact-movie.component'
import {RouterModule}from '@angular/router'
@NgModule({
  declarations: [MovieDetailsComponent, ExactMovieComponent],
  imports: [
    FormsModule,
    CommonModule,
    MaterialModule, 
    MatIconModule,
    BrowserModule,
    RouterModule,
    FormsModule
  ],
  exports:[
    MovieDetailsComponent,
    ExactMovieComponent,
    FormsModule,
    CommonModule,
    MaterialModule, 
    MatIconModule,
    BrowserModule,
    RouterModule,
    FormsModule
  ]
})
export class MovieModule { }
