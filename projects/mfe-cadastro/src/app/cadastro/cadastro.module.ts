import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './cadastro.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    CadastroComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    CommonModule,
    BrowserModule,
    RouterModule.forChild([
      {
        path: '',
        component: CadastroComponent
      }
    ])
  ]
})
export class CadastroModule { }
