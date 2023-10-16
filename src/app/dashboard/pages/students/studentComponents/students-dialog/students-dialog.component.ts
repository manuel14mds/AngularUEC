import { Component, Inject, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Student } from 'src/app/intefaces/student';

@Component({
  selector: 'app-students-dialog',
  templateUrl: './students-dialog.component.html',
  styles: [
  ]
})
export class StudentsDialogComponent {
  studentForm: FormGroup

  constructor(private fb: FormBuilder, 
    private matDialogRef: MatDialogRef<StudentsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public student?: Student,) {
    this.studentForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', ],
      email: ['', [Validators.required, Validators.email]],
      course: [],
      active: [],
    })

    if(this.student){
      this.studentForm.patchValue(this.student)
    }
  }
  
  public get dataForm(){
    return this.studentForm.value
  }

  onSubmit():void{
    if(this.studentForm.invalid){
      this.studentForm.markAllAsTouched()
    }else{
      this.matDialogRef.close(this.studentForm.value)
    }
  }

  activateSubmitBtn(): boolean {
    if (this.studentForm.valid) {
        return false
    }
    return true
  }
}
