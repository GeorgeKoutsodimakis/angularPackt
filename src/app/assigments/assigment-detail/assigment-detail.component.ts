import { Assignment } from './../../model/Assigment.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-assigment-detail',
  templateUrl: './assigment-detail.component.html',
  styleUrls: ['./assigment-detail.component.css']
})
export class AssigmentDetailComponent implements OnInit {
  @Input() passedAssignment: Assignment;

  constructor() {}

  ngOnInit() {}

  onAssigmentSubmitted() {
    this.passedAssignment.submitted = true;
  }
}
