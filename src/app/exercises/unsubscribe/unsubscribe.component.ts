import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, ReplaySubject, timer, Subscription } from 'rxjs';
import { takeWhile, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'rxw-unsubscribe',
  templateUrl: './unsubscribe.component.html',
})
export class UnsubscribeComponent implements OnInit, OnDestroy {

  logStream$ = new ReplaySubject<string | number>();

  ngOnInit() {
    const interval$ = timer(0, 1000);

    interval$.subscribe({
      next: msg => this.log(msg),
      error: err => this.log('ERROR: ' + err),
      complete: () => this.log('COMPLETED')
    });
  }

  ngOnDestroy() {

    this.logStream$.next('DESTROY');
  }


  log(msg: string | number) {
    console.log(msg);
    this.logStream$.next(msg);
  }
}
