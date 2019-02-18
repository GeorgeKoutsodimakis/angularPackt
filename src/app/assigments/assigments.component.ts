import { AssigmentDetailComponent } from './assigment-detail/assigment-detail.component';
import { MatDatepickerModule } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { Assignment } from '../model/Assigment.model';

@Component({
  selector: 'app-assigments',
  templateUrl: './assigments.component.html',
  styleUrls: ['./assigments.component.css']
})
export class AssigmentsComponent implements OnInit {
  title = 'assigment works';

  formVisible = false;

  name: string;
  dueDate: Date;
  selectedAssignment: Assignment;

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

  ngOnInit() {}

  setSelected(assignment: Assignment) {
    this.selectedAssignment = assignment;
  }

  onAddBtnClick() {
    this.formVisible = true;
    this.selectedAssignment = null;
  }

  onNewAssigment(event: Assignment) {
    this.assigments.push(event);
    this.formVisible = false;
    console.log(this.assigments);
  }
}
