import { Component } from '@angular/core';
import { type Student } from 'src/app/intefaces/student';

const studentlist: Student[] = [
  { id: 1, firstName: 'Carla', lastName: 'Montani', email: 'carla@mail.com', classes: [], active: true },
  { id: 2, firstName: 'Manuel', lastName: 'Florez', email: 'manuel@mail.com', classes: [], active: false },
];

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})

export class StudentsComponent {
  dataSource = studentlist.reverse();
  displayedColumns: string[] = ['id', 'fistName', 'lastName', 'email', 'active', 'actions'];
}
