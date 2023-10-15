import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './students.component';
import { MatCardModule } from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import { StudentsTableComponent } from './students-table/students-table.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    StudentsComponent,
    StudentsTableComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
    SharedModule,
  ],
  exports: [
    StudentsComponent,
  ]
})
export class StudentsModule { }
