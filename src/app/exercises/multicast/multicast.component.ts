import { Component, OnInit } from '@angular/core';
import { Subject, BehaviorSubject, ReplaySubject, Observable } from 'rxjs';
import { share } from 'rxjs/operators';

import { MeasureValuesService } from './measure-values.service';
import { ExerciseService } from '../exercise.service';

@Component({
  selector: 'rxw-multicast',
  templateUrl: './multicast.component.html',
})
export class MulticastComponent implements OnInit {

  listeners = [];
  logStream$ = new ReplaySubject();

  measureValues$: Observable<number>; // später: Subject<number>

  constructor(private mvs: MeasureValuesService, private es: ExerciseService) { }

  ngOnInit() {
    /*******************************/

    // 1. unchanged stream
    // this.measureValues$ = this.mvs.getValues();

    // 2. multicasts (shares) the original Observable, uses Subject() internally
    // this.measureValues$ = this.mvs.getValues().pipe(share());

    // 3. please try out:
    // - Subject
    // - BehaviorSubject
    // - ReplaySubject
    // (hint: don't forget line 16)
    // this.measureValues$ = new Subject<number>();
    // this.mvs.getValues().subscribe(this.measureValues$);

    /*******************************/
  }

  addListener() {
    this.listeners.push(this.es.generateRandomString(5));
  }

  addConsoleListener() {
    const randomString = this.es.generateRandomString(5);
    this.measureValues$.subscribe(e => this.logStream$.next(`${randomString} ${e}`));
  }

}
