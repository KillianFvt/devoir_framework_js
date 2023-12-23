export class Question {
  public question: string;
  public answerId: number;
  public answers: string[];

  constructor(rawQuestion: any) {
    this.question = rawQuestion.question;
    this.answerId = rawQuestion.answerId;
    this.answers = rawQuestion.answers;
  }
}
