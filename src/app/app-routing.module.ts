import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormBuilderComponent} from "./form-builder/form-builder.component";
import {ReviewAnswerComponent} from "./review-answer/review-answer.component";
import {AppComponent} from "./app.component";

const routes: Routes = [
  {path: '', redirectTo: 'form/builder', pathMatch: 'full'},
  { path: 'form', component: AppComponent,
    children: [
      {path: 'answer', component: ReviewAnswerComponent},
      {path: 'builder', component: FormBuilderComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
