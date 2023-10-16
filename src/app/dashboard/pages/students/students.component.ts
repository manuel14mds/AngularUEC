import { Component } from '@angular/core';
import { type Student } from 'src/app/intefaces/student';
import { MatDialog } from '@angular/material/dialog';
import { StudentsDialogComponent } from './studentComponents/students-dialog/students-dialog.component';


function updateValues(student: { [key: string]:any}, newData: { [key: string]: any }): object {
    for (const key in newData) {
        if (newData.hasOwnProperty(key) && key !== 'id') {
            const newValue = newData[key];
            if (newValue !== null && newValue !== undefined && student[key] !== newValue) {
                student[key] = newValue;
            }
        }
    }
    return student
}


@Component({
    selector: 'app-students',
    templateUrl: './students.component.html',
    styleUrls: ['./students.component.scss']
})

export class StudentsComponent {
    dataSource: Student[] = [
        { id: 1, firstName: 'Carla', lastName: 'Montani', email: 'carla@mail.com', classes: [], active: true },
        { id: 2, firstName: 'Manuel', lastName: 'Florez', email: 'manuel@mail.com', classes: [], active: false },
    ].reverse();
    displayedColumns: string[] = ['id', 'fistName', 'lastName', 'email', 'active', 'actions'];

    constructor(private matDialog: MatDialog) {
    }
    openStudentDialog(): void {
        this.matDialog.open(StudentsDialogComponent)
            .afterClosed()
            .subscribe({
                next: (value) => {
                    if (!!value) {
                        this.dataSource = [
                            {
                                firstName: value.firstName,
                                lastName: value.lastName,
                                active: false,
                                email: value.email,
                                id: (this.dataSource[length].id) + 1
                            },
                            ...this.dataSource,
                        ]
                    }
                }
            }
            )
    }

    onEditStudent(student: Student): void {
        this.matDialog.open(StudentsDialogComponent, {
            data: student
        })
            .afterClosed()
            .subscribe({
                next: (value) => {
                    if (!!value) {

                        if (confirm('Está seguro que quiere editar los datos del estudiante?')) {
                            const newData = this.dataSource.map((item) => {
                                if(item.id===student.id){
                                    value = updateValues(student, value)
                                    item = {...value} 
                                }
                            })
                        }

                    }
                },
            });
    }
    
    switchStudentStatus(studentId: number): void {
        if (confirm('Quiere cambiar el estado del estudiante?')) {
            this.dataSource.forEach((element) => {
                if (element.id === studentId) {
                    element.active = !element.active
                }
            })
        }
    }
}
