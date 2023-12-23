import {Question} from "./question.model";

export class QCM {

  public id: number;
  public name: string;
  public theme: string;
  public subject: string;
  public author: string;
  public nbPoints: number;
  public questionList: Question[];

  constructor(rawQCM: any) {
    this.id = rawQCM.id;
    this.name = rawQCM.name;
    this.theme = rawQCM.theme;
    this.subject = rawQCM.subject;
    this.author = rawQCM.author;
    this.nbPoints = rawQCM.nbPoints;
    this.questionList = rawQCM.questionList;
  }

  toString(): string {
    return `QCM:
    ${this.id},
    ${this.name},
    ${this.theme},
    ${this.subject},
    ${this.author},
    ${this.nbPoints},
    ${JSON.stringify(this.questionList)}`;
  }
}
