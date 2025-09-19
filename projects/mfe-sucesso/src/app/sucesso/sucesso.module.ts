import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SucessoComponent } from './sucesso.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    SucessoComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
     RouterModule.forChild([
       {
         path: '',
         component: SucessoComponent
       }
     ])
   ]
})
export class SucessoModule { }
