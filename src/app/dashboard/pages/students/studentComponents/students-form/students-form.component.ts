import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-students-form',
  templateUrl: './students-form.component.html',
  styles: [
  ]
})
export class StudentsFormComponent {
  studentForm: FormGroup

  constructor(private fb: FormBuilder) {
    this.studentForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', ],
      email: ['', [Validators.required, Validators.email]],
      course: [],
      active: [],
    })


  }
  
  public get dataForm(){
    return this.studentForm.value
  }
  activateSubmitBtn(): boolean {
    if (this.studentForm.valid) {
        return false
    }
    return true
}
}
