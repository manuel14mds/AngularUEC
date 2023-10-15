import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type Student } from 'src/app/intefaces/student';

@Component({
  selector: 'app-students-table',
  templateUrl: './students-table.component.html',
  styles: [
  ]
})
export class StudentsTableComponent {
  @Input()
  dataSource: Student[] = [];

  displayedColumns = ['id', 'firstName', 'lastName', 'email', 'active', 'actions'];
}
