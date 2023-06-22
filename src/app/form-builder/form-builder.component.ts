import {Component, OnInit} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NewQuestionComponent} from "../modal/new-question/new-question.component";
import {Question, QuestionAnswerService, TYPE_QUESTION} from "../services/question-answer.service";
import {Observable} from "rxjs";
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent implements OnInit {
  TYPE_QUESTION = TYPE_QUESTION;
  listQuestion: Observable<Question[]> = new Observable<Question[]>();
  formGroup: FormGroup = this.fb.group({
    formArray: this.fb.array([])
  })
  questionList: FormArray = new FormArray<any>([]);

  constructor(private modalService: NgbModal,
              private fb: FormBuilder,
              private router: Router,
              private questionAnswerService: QuestionAnswerService) {
  }

  ngOnInit() {
    this.questionList = this.formGroup.get('formArray') as FormArray;
    this.questionAnswerService.listQuestionsSubject.subscribe(question => {
      this.addQuestionToForm(question);
    });
  }

  openModalNewQuestion() {
    const modalRef = this.modalService.open(NewQuestionComponent);
  }

  createQuestionForm(question: Question): FormGroup {
    return this.fb.group({
      type: question.typeQuestions,
      label: question.questions,
      required: question.required,
      value: ['', question.required ? Validators.required : null],
      answers: [question.answers],
      checkRequired: false
    });
  }

  addQuestionToForm(question: Question) {
    this.questionList.push(this.createQuestionForm(question));
  }

  get answersFormGroup() {
    return this.formGroup.get('formArray') as FormArray;
  }

  // get the formgroup under contacts form array
  getFormGroup(index: number): FormGroup {
    return this.questionList.controls[index] as FormGroup;
  }

  log(e: any) {
    // console.log(e)
  }


  review() {
    this.questionAnswerService.listASubject.next(this.formGroup.value);
    void this.router.navigate(['/form/answer']);
  }
}
