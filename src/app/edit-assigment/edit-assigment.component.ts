import { Assignment } from './../model/Assigment.model';
import { ActivatedRoute, Router } from '@angular/router';
import { AssigmentsService } from './../shared/assigments.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-assigment',
  templateUrl: './edit-assigment.component.html',
  styleUrls: ['./edit-assigment.component.css']
})
export class EditAssigmentComponent implements OnInit {
  assignment: Assignment;
  assignmentName: string;
  dueDate: Date;

  constructor(
    private assigmentsService: AssigmentsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.params.id;
    this.getAssigment(id);

    console.log(this.route.snapshot.params.id);
    console.log(this.route.snapshot.fragment);

    this.route.queryParams.subscribe(params => console.log(params));
    this.route.fragment.subscribe(fragment => console.log(fragment));
  }

  getAssigment(id) {
    this.assigmentsService
      .getAssigmentById(id)
      .subscribe(assignment => (this.assignment = assignment));
  }

  onSaveAssigment() {
    if (this.assignmentName) {
      this.assignment.name = this.assignmentName;
    }
    if (this.dueDate) {
      this.assignment.dueDate = this.dueDate;
    }

    this.assigmentsService
      .updateAssigments(this.assignment)
      .subscribe(assignment =>
        // console.log(this.assignment.name + ' ' + 'has been updated')

      this.router.navigate(['/assignment/' + this.assignment.id]));

    // this.router.navigate(['/home']);
  }
}
