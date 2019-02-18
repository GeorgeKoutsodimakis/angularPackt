import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Assignment } from 'src/app/model/Assigment.model';

@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.css']
})
export class AddAssignmentComponent implements OnInit {
  enabled = false;
  name: string;
  dueDate: Date;

  @Output() newAssignment = new EventEmitter();

  onSubmit() {
    const assignment = new Assignment();
    assignment.name = this.name;
    assignment.dueDate = this.dueDate;
    assignment.submitted = false;
    this.newAssignment.emit(assignment);

  }



  constructor() {}

  ngOnInit() {}
}
