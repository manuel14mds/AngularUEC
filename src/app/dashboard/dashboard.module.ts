import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { StudentsModule } from './pages/students/students.module';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    SharedModule,
    MatIconModule,
    MatButtonModule,
    StudentsModule,
  ],
  exports: [
    DashboardComponent,
  ]
})
export class DashboardModule { }
