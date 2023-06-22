import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {QuestionAnswerService, TYPE_QUESTION} from "../../services/question-answer.service";

@Component({
  selector: 'app-new-question',
  templateUrl: './new-question.component.html',
  styleUrls: ['./new-question.component.scss']
})
export class NewQuestionComponent implements OnInit {
  // @ts-ignore
  answerForm: FormGroup;
  // @ts-ignore
  answerList: FormArray;
  @Output() dataToFormBuilder = new EventEmitter();
  TYPE_QUESTION = TYPE_QUESTION;

  constructor(private fb: FormBuilder, private questionAnswerService: QuestionAnswerService,public modal: NgbActiveModal) {
  }

  ngOnInit(): void {
    this.answerForm = this.fb.group({
      questions: this.fb.control(''),
      typeQuestions: this.fb.control('checkbox-list'),
      answers: this.fb.array([this.createAnswer()]),
      required: this.fb.control(false),
      other: this.fb.control(false)
    })
    this.answerList = this.answerForm.get('answers') as FormArray;

  }

  // contact formgroup
  createAnswer(): FormGroup {
    return this.fb.group({
      name: this.fb.control('', Validators.required),
      value: false
    });
  }

  addAnswer() {
    this.answerList.push(this.createAnswer());
  }

  get answersFormGroup() {
    return this.answerForm.get('answers') as FormArray;
  }

  summit() {
    this.questionAnswerService.addQuestion(this.answerForm.value);
    this.modal.close();
  }
}
