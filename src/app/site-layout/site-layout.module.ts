import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule}from '@angular/router'
import {MaterialModule}from '../material/material.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component'


@NgModule({
  declarations: [ FooterComponent, HeaderComponent, HomeComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    RouterModule
  ]
})
export class SiteLayoutModule { }
