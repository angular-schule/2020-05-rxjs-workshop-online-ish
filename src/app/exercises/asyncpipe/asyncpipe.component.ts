import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { timer, Observable } from 'rxjs';
import { tap, scan, startWith } from 'rxjs/operators';

@Component({
  selector: 'rxw-fromevent',
  templateUrl: './asyncpipe.component.html',
  styleUrls: ['./asyncpipe.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AsyncpipeComponent implements OnInit {

  result$: Observable<any>;

  ngOnInit() {
    this.result$ = timer(5000, 700).pipe(
      scan((acc, item) => acc + item, 0),
      startWith(false), // false wird von ngIf ignoriert
      tap({
        next: e => console.log(e),
        complete: () => console.log('Complete')
      })
    );
  }

}
