import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormArray, Validators, ReactiveFormsModule} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {NgForOf} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-qcm',
  templateUrl: './add-qcm.component.html',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgForOf
  ],
  styleUrls: ['./add-qcm.component.css']
})
export class AddQcmComponent implements OnInit {
  qcmForm: FormGroup = this.fb.group({});

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.qcmForm = this.fb.group({
      name: ['', Validators.required],
      theme: ['', Validators.required],
      subject: ['', Validators.required],
      author: ['Moi', Validators.required],
      nbPoints: ['', Validators.required],
      questions: this.fb.array([this.createQuestion()])
    });
  }

  getAnswerControls(questionIndex: number) {
    return ((this.qcmForm.get('questions') as FormArray).at(questionIndex).get('answers') as FormArray).controls;
  }

  get questionControls() {
    return (this.qcmForm.get('questions') as FormArray).controls;
  }

  createQuestion(): FormGroup {
    return this.fb.group({
      question: ['', Validators.required],
      answerId: ['', Validators.required],
      answers: this.fb.array([this.createAnswer()])
    });
  }

  createAnswer(): FormGroup {
    return this.fb.group({
      answer: ['', Validators.required]
    });
  }

  addQuestion(): void {
    // @ts-ignore
    (this.qcmForm.get('questions') as FormArray).push(this.createQuestion());
  }

  addAnswer(questionIndex: number): void {
    // @ts-ignore
    (this.qcmForm.get('questions').get([questionIndex]).get('answers') as FormArray).push(this.createAnswer());
  }

  removeQuestion(questionIndex: number): void {
    // @ts-ignore
    (this.qcmForm.get('questions') as FormArray).removeAt(questionIndex);
  }

  removeAnswer(questionIndex: number, answerIndex: number): void {
    // @ts-ignore
    (this.qcmForm.get('questions').get([questionIndex]).get('answers') as FormArray).removeAt(answerIndex);
  }

  submitForm(): void {
    this.http.post('http://localhost:3000/qcms/post', this.qcmForm.value).subscribe();
    console.log(this.qcmForm.value);
    // redirect to new qcm
    let lastQcmId: number = 0;
    this.http.get('http://localhost:3000/qcms/').subscribe((data: any) => {
      lastQcmId = data[data.length - 1].id;
      console.log(lastQcmId);
      this.router.navigate([`/qcm/`, lastQcmId]).then(r => console.log(r));
    });
  }
}
