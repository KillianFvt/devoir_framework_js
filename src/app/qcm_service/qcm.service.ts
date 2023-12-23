import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {map, Observable} from 'rxjs';
import {Question} from "../models/question.model";
import {QCM} from "../models/qcm.model";

@Injectable({
  providedIn: 'root'
})
export class QcmService {

  constructor(private httpClient: HttpClient) {}

  public getQcmList(): any[] {

    let QcmList: any[] = [];

    let response: Observable<Object> = this.httpClient.get('http://localhost:3000/qcms/');

    response.subscribe((data: any) => {
      for (let i = 0; i < data.length; i++) {
        let newQuestionList: Question[] = [];

        data[i].questionList.map((question: any) => {
          let newQuestion = new Question(question);
          newQuestionList.push(newQuestion);
        });

        data[i].questionList = newQuestionList;

        let newQcm = new QCM(data[i]);
        QcmList.push(newQcm);
      }
    });

    return QcmList;
  }

  public getQcmById(id: string): Observable<QCM> {

    return this.httpClient.get('http://localhost:3000/qcms/get/' + id).pipe(
      map((data: any) => {
        let newQuestionList: Question[] = [];


        data.questionList.map((question: any) => {
          let newQuestion = new Question(question);
          newQuestionList.push(newQuestion);
        });

        data.questionList = newQuestionList;

        return new QCM(data);
      })
    );
  }

}

