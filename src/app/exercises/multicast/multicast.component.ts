import { Component, OnInit } from '@angular/core';
import { Subject, BehaviorSubject, ReplaySubject, Observable, ConnectableObservable } from 'rxjs';
import { share, publish, refCount } from 'rxjs/operators';

import { MeasureValuesService } from './measure-values.service';
import { ExerciseService } from '../exercise.service';
import { Statement } from '@angular/compiler';

@Component({
  selector: 'rxw-multicast',
  templateUrl: './multicast.component.html',
})
export class MulticastComponent implements OnInit {

  listeners = [];
  logStream$ = new ReplaySubject();

  measureValues$: Subject<number>;

  constructor(private mvs: MeasureValuesService, private es: ExerciseService) { }

  ngOnInit() {
    /*******************************/


    this.measureValues$ = new ReplaySubject<number>(5);
    this.mvs.getValues().subscribe(this.measureValues$);

    /*setTimeout(() => this.measureValues$.next(5), 3000);
    setTimeout(() => this.measureValues$.next(6), 4000);*/


    // this.measureValues$ = this.mvs.getValues().pipe(share());

    // share() in Einzelteilen
    /*this.measureValues$ = this.mvs.getValues().pipe(
      publish(),
      refCount()
    );*/

    // setTimeout(() => this.measureValues$.connect(), 3000);



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
