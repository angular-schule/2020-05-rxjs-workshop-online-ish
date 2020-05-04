import { Component, OnInit } from '@angular/core';
import { Subject, ReplaySubject, Observable } from 'rxjs';
import { mergeMap, concatMap, switchMap, exhaustMap } from 'rxjs/operators';

import { ExerciseService } from '../exercise.service';

@Component({
  selector: 'rxw-higherorder',
  templateUrl: './higherorder.component.html',
})
export class HigherorderComponent implements OnInit {

  logStream$ = new ReplaySubject<string>();
  source$ = new Subject<string>();
  result$: Observable<string>;

  constructor(private es: ExerciseService) { }

  ngOnInit() {

    /******************************/
    /**
     * Quelle: this.source$
     * Ziel: this.result$
     */

    this.result$ = this.source$.pipe(
      // please try out:
      // - mergeMap
      // - concatMap
      // - switchMap
      // - exhaustMap
      mergeMap(e => this.es.echo(e))
    );

    /******************************/

    this.source$.subscribe(value => this.logStream$.next(`SOURCE: ${value}`));
    this.result$.subscribe(value => this.logStream$.next(`🚀 ${value}`));
  }

  echoTest() {
    this.es.echo('TEST').subscribe(value => this.logStream$.next(value));
  }

  sendValue(value: string) {
    this.source$.next(value);
  }

}