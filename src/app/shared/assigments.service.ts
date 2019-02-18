import { Injectable } from '@angular/core';
import { Assignment } from '../model/Assigment.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssigmentsService {
  assigments = [
    {
      name: 'One',
      dueDate: new Date('2018-01-01'),
      submitted: true
    },
    {
      name: 'Two',
      dueDate: new Date('2019-01-01'),
      submitted: false
    }
  ];
  constructor() {}

  getAssigments(): Observable<Assignment[]> {
    return of(this.assigments);
  }

  addAssigments(assigment: Assignment): Observable<string> {
    this.assigments.push(assigment);

    return of('assigment added');
  }

  updateAssigments(assigment: Assignment): Observable<string> {
    this.assigments.forEach((assigment, i) => {
      if (assigment === assigment) {
        this.assigments[i] = assigment;
      }
    });
    return of('assigment updated');
  }

  deleteAssigment(deletedAssigment: Assignment): Observable<string> {
    this.assigments.forEach((assigment, i) => {
      if (assigment === deletedAssigment) {
        this.assigments.splice(i, 1);
      }
    });
    return of('successfully deleted');
  }
}
