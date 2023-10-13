import { Component, signal } from '@angular/core';
import { questions } from './questions';
import { MainService } from './main.service';

export interface IQuestion {
  title: string;
  result: string;
  explanation: string;
  response: boolean;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  totalQuestions: number = questions.length;
  question: IQuestion = questions[0];
  index: number = 0;

  showAnswer = false;
  score: number = this.getScore();

  constructor(private _mainService: MainService) {}

  getScore(): number {
    return this._mainService.getScore();
  }

  next(): void {
    this.showAnswer = false;
    this.question = questions[++this.index % questions.length];

    this._mainService.setIndex(this.index);
  }

  reset(): void {
    this.showAnswer = false;

    this._mainService.setScore(0);
    this._mainService.setIndex(0);

    this.question = questions[0];
    this.index = 0;
    this.score = 0;
  }

  sendAnswer(response: boolean): void {
    if (response === this.question.response) {
      this._mainService.setScore(this._mainService.getScore() + 1);
    }

    this.score = this.getScore();
    this.showAnswer = true;
  }
}
