import { Injectable } from '@angular/core';

const INDEX = 'quizIndex';
const SCORE = 'quizScore';

@Injectable({ providedIn: 'root' })
export class MainService {
  getScore(): number {
    const score: string | null = window.localStorage.getItem(SCORE);

    return score ? Number(score) : 0;
  }

  setScore(score: number): void {
    window.localStorage.setItem(SCORE, String(score));
  }

  getIndex(): number {
    const score: string | null = window.localStorage.getItem(INDEX);

    return score ? Number(score) : 0;
  }

  setIndex(score: number): void {
    window.localStorage.setItem(INDEX, String(score));
  }
}
