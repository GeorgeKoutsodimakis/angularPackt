import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AssigmentsComponent } from './assigments/assigments.component';
import { SubmittedDirective } from './shared/submitted.directive';
import { UnsubmittedDirective } from './shared/unsubmitted.directive';

// tslint:disable-next-line:max-line-length
import {
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatListModule,
  MatCardModule,
  MatCheckboxModule
} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AssigmentDetailComponent } from './assigments/assigment-detail/assigment-detail.component';
import { AddAssignmentComponent } from './assigments/add-assignment/add-assignment.component';

import { AssigmentsService } from './shared/assigments.service';

@NgModule({
  declarations: [
    AppComponent,
    AssigmentsComponent,
    SubmittedDirective,
    UnsubmittedDirective,
    AssigmentDetailComponent,
    AddAssignmentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatListModule,
    MatCardModule,
    MatCheckboxModule
  ],
  providers: [AssigmentsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
