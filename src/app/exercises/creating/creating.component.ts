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

     

     /*****************************/
  }

  private log(msg: string | number) {
    this.logStream$.next(msg);
  }

}
