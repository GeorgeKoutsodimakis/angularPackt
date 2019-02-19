import { AuthService } from "./../../shared/auth.service";
import { ActivatedRoute, Router } from "@angular/router";
import { AssigmentsService } from "./../../shared/assigments.service";
import { Assignment } from "./../../model/Assigment.model";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-assigment-detail",
  templateUrl: "./assigment-detail.component.html",
  styleUrls: ["./assigment-detail.component.css"]
})
export class AssigmentDetailComponent implements OnInit {
  passedAssignment: Assignment;

  constructor(
    private authService: AuthService,
    private assigmentsService: AssigmentsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.getAssigmentById();
  }

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
    // this.passedAssignment = null;
    this.router.navigate(["/home"]);
  }

  getAssigmentById() {
    const id = +this.route.snapshot.params.id;
    this.assigmentsService
      .getAssigmentById(id)
      .subscribe(assigment => (this.passedAssignment = assigment));
  }

  onClickEdit() {
    this.router.navigate(['/assignment', this.passedAssignment.id, 'edit'],
      {queryParams: {name: this.passedAssignment.name}, fragment: 'editing'});
  }

  isAdmin(): boolean {
    return this.authService.loggedIn;
  }
}
