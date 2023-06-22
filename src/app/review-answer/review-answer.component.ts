import {Component, OnInit} from '@angular/core';
import {Question, QuestionAnswerService, TYPE_QUESTION} from "../services/question-answer.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-review-answer',
  templateUrl: './review-answer.component.html',
  styleUrls: ['./review-answer.component.scss']
})
export class ReviewAnswerComponent implements OnInit {
  listASubject: any;
  protected readonly TYPE_QUESTION = TYPE_QUESTION;

  constructor(private questionAnswerService: QuestionAnswerService,
              private router: Router,) {
  }

  ngOnInit() {
    this.listASubject = this.questionAnswerService.listASubject.value;
    this.listASubject?.formArray.forEach((e: any) => {
      if (e.type === TYPE_QUESTION.CHECKBOX) {
        e.answers = e.answers.filter((a: any) => a.value).map((a: any) => a.name)
      }
    })
  }

  back() {
    void this.router.navigate(['/form/builder']);
  }


}
