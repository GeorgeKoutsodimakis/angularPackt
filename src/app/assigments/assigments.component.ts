import { AssigmentsService } from "./../shared/assigments.service";
import { AssigmentDetailComponent } from "./assigment-detail/assigment-detail.component";
import { MatDatepickerModule } from "@angular/material";
import { Component, OnInit } from "@angular/core";
import { Assignment } from "../model/Assigment.model";

@Component({
  selector: "app-assigments",
  templateUrl: "./assigments.component.html",
  styleUrls: ["./assigments.component.css"]
})
export class AssigmentsComponent implements OnInit {
  title = "assigment works";

  formVisible = false;

  name: string;
  dueDate: Date;
  selectedAssignment: Assignment;
  assigments: Assignment[];

  constructor(private assigmentsService: AssigmentsService) {}

  ngOnInit() {
    // this.assigments = this.assigmentsService.getAssigments();
    this.getAssigments();
  }

  getAssigments() {
    this.assigmentsService
      .getAssigments()
      .subscribe(assigments => (this.assigments = assigments));
  }
  setSelected(assignment: Assignment) {
    this.selectedAssignment = assignment;
  }

  onAddBtnClick() {
    this.formVisible = true;
    this.selectedAssignment = null;
  }

  onNewAssigment(event: Assignment) {
    this.assigmentsService
      .addAssigments(event)
      .subscribe(success => console.log(success));
    this.formVisible = false;
    console.log(this.assigments);
  }
}
