import { Pipe, PipeTransform } from '@angular/core';
import { Student } from 'src/app/intefaces/student';

@Pipe({
  name: 'fullname',
  pure: false
})
export class FullnamePipe implements PipeTransform {

  transform(value: Student, ...args: unknown[]): unknown {

    return `${value.firstName} ${value.lastName}`;
  }

}
