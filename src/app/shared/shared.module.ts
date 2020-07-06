import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule
  ],
  exports: [
    CommonModule, TranslateModule,
    RouterModule
  ]
})
export class SharedModule { }