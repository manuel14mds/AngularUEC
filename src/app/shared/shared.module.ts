import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { ActivePipe } from './pipes/active.pipe';
import { FullnamePipe } from './pipes/fullname.pipe';
import { ErrorsPipe } from './pipes/errors.pipe';
import { MainTitleDirective } from './directives/main-title.directive';


@NgModule({
  declarations: [
    ActivePipe,
    FullnamePipe,
    ErrorsPipe,
    MainTitleDirective
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    ActivePipe,
    FullnamePipe,
    ErrorsPipe,
    MainTitleDirective,
  ]
})
export class SharedModule { }
