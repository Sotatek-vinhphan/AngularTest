import {Injectable} from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";

export interface Question {
  answers: {
    name: string, value: boolean
  },
  other: boolean,
  questions: string,
  required: boolean,
  typeQuestions: string
}
export enum TYPE_QUESTION{
  CHECKBOX =  'checkbox-list',
  TEXTBOX= 'paragraph'
}
@Injectable({
  providedIn: 'root'
})
export class QuestionAnswerService {
  listQuestionsSubject = new Subject<Question>();
  listASubject = new BehaviorSubject<any>(null);
  constructor() {}

  addQuestion(question: Question) {
    this.listQuestionsSubject.next(question);
  }

}
