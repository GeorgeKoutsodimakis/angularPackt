import { LoggingService } from "./logging.service";
import { Injectable } from "@angular/core";
import { Assignment } from "../model/Assigment.model";
import { Observable, of, from } from "rxjs";
import { HttpClient } from "@angular/common/http"
import { map } from "rxjs/internal/operators"

@Injectable({
  providedIn: "root"
})
export class AssigmentsService {
  assigments : Assignment[] = [
    {
      id: 1,
      name: "One",
      dueDate: new Date("2018-01-01"),
      submitted: true
    },
    {
      id: 2,
      name: "Two",
      dueDate: new Date("2019-01-01"),
      submitted: false
    }
  ];
  url = 'http://localhost:8010/api/assignments';
  urlOne = 'http://localhost:8010/api/assignment';
  constructor(private loggingService: LoggingService, private httpClient: HttpClient) {}

  getAssigments(): Observable<Assignment[]> {
    // return of(this.assigments);
    return this.httpClient.get<Assignment[]>(this.url);
  }

  addAssigments(assignment: Assignment): Observable<any> {
    // assignment.id = this.assigments.length + 1;
    // this.assigments.push(assignment);
    // this.loggingService.log(assignment.name, "added");
    // return of("assigment added");
    return this.httpClient.post<Assignment>(this.urlOne, assignment);
  }

  updateAssigments(assigment: Assignment): Observable<any> {
    // this.assigments.forEach((assigment, i) => {
    //   if (assigment === assigment) {
    //     this.assigments[i] = assigment;
    //   }
    // });
    // this.loggingService.log(assigment.name, "updated");
    // return of("assigment updated");
    return this.httpClient.put<Assignment>(this.urlOne, assigment);
  }

  deleteAssigment(deletedAssigment: Assignment): Observable<any> {
    // this.assigments.forEach((assigment, i) => {
    //   if (assigment === deletedAssigment) {
    //     this.assigments.splice(i, 1);
    //   }
    // });
    // this.loggingService.log(deletedAssigment.name, "deleted");
    // return of("successfully deleted");
    const newUrl = this.urlOne + '/' + deletedAssigment._id;
    return this.httpClient.delete(newUrl);
  }

  getAssigmentById(id: number): Observable<any> {
    // return of(this.assigments.find(x => x.id === id));
    return this.httpClient.get<Assignment>(this.urlOne + '/' + id).pipe(map(res=>res.name + '[packt pub]'));
  }
}
