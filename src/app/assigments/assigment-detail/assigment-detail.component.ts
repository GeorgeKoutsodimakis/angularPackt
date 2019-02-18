import { AssigmentsService } from './../../shared/assigments.service';
import { Assignment } from './../../model/Assigment.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-assigment-detail',
  templateUrl: './assigment-detail.component.html',
  styleUrls: ['./assigment-detail.component.css']
})
export class AssigmentDetailComponent implements OnInit {
  @Input() passedAssignment: Assignment;

  constructor(private assigmentsService: AssigmentsService) {}

  ngOnInit() {}

  onAssigmentSubmitted() {
    this.passedAssignment.submitted = true;
    this.assigmentsService
      .updateAssigments(this.passedAssignment)
      .subscribe(res => console.log(res));
  }

  onDelete() {
    this.assigmentsService
      .deleteAssigment(this.passedAssignment)
      .subscribe(res => console.log(res));
    this.passedAssignment = null;
  }
}
