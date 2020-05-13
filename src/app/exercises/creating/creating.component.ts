import { Component, OnInit } from '@angular/core';
import { Observable, of, from, timer, interval, ReplaySubject } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'rxw-creating',
  templateUrl: './creating.component.html',
})
export class CreatingComponent implements OnInit {

  logStream$ = new ReplaySubject<number | string>();

  ngOnInit() {
    /**
     * Erstelle ein Observable und abonniere den Datenstrom.
     * Probiere dazu die verschiedenen Creation Functions aus: of, from, timer, interval
     * Implementiere außerdem ein Observable manuell, indem du den Konstruktor new Observabe() nutzt.
     * Zum Abonnieren kannst du einen (partiellen) Observer oder ein einzelnes next-Callback verwenden.
     * Du kannst die Methode this.log() verwenden, um eine Ausgabe in der schwarzen Box im Browser zu erzeugen.
     */


     function producer(obs) {
      obs.next(4);
      obs.next('A');
      obs.next('B');
      obs.next('C');
      setTimeout(() => obs.next(1), 2000);
      setTimeout(() => obs.complete(), 3100);
     }

    const observer = {
      next: e => this.log('HALLO' + e),
      error: err => console.error(err),
      complete: () => console.log('Complete')
    };

     // producer(observer);
     // producer(observer);

     const myObs$ = new Observable(producer);
     /*myObs$.subscribe(observer);
     myObs$.subscribe(e => console.log('COOL', e));*/

     const timer$ = interval(1000);

     timer$.pipe(
       map(e => e * 3),
       filter(e => e % 2 === 0)
     ).subscribe({
      next: e => this.log(e),
      error: e => this.log('ERR' + e),
      complete: () => this.log('Complete'),
     });

     /*setTimeout(() => {
      timer$.subscribe({
        next: e => this.log(e),
        error: e => this.log('ERR' + e),
        complete: () => this.log('Complete'),
       });
     }, 3000);*/


     /*****************************/
  }

  private log(msg: string | number) {
    this.logStream$.next(msg);
  }

}
