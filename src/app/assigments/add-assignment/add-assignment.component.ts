import { Router } from "@angular/router";
import { AssigmentsService } from "./../../shared/assigments.service";
import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Assignment } from "src/app/model/Assigment.model";

@Component({
  selector: "app-add-assignment",
  templateUrl: "./add-assignment.component.html",
  styleUrls: ["./add-assignment.component.css"]
})
export class AddAssignmentComponent implements OnInit {
  constructor(
    private assigmentService: AssigmentsService,
    private router: Router
  ) {}

  enabled = false;
  name: string;
  dueDate: Date;

  // @Output() newAssignment = new EventEmitter();

  onSubmit() {
    const assignment = new Assignment();
    assignment.id = Math.floor(Math.random() * 100);
    assignment.name = this.name;
    assignment.dueDate = this.dueDate;
    assignment.submitted = false;
    // this.newAssignment.emit(assignment);

    this.assigmentService
      .addAssigments(assignment)
      .subscribe(res => this.router.navigate(["/home"]));
  }

  ngOnInit() {}
}
