import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './students.component';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { SharedModule } from 'src/app/shared/shared.module';
import { StudentsFormComponent } from './studentComponents/students-form/students-form.component';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { StudentsDialogComponent } from './studentComponents/students-dialog/students-dialog.component';
import { MatDialogModule } from '@angular/material/dialog'; 
import { StudentsTableComponent } from './studentComponents/students-table/students-table.component';



@NgModule({
  declarations: [
    StudentsComponent,
    StudentsTableComponent,
    StudentsFormComponent,
    StudentsDialogComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
    SharedModule,
    MatSelectModule,
    MatInputModule,
    MatDialogModule,
  ],
  exports: [
    StudentsComponent,
  ]
})
export class StudentsModule { }
