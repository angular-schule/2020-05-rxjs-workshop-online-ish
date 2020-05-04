import { Component, OnInit } from '@angular/core';
import { timer, Observable } from 'rxjs';
import { tap, scan } from 'rxjs/operators';

@Component({
  selector: 'rxw-fromevent',
  templateUrl: './asyncpipe.component.html',
  styleUrls: ['./asyncpipe.component.scss']
})
export class AsyncpipeComponent implements OnInit {

  result: number;

  ngOnInit() {
    timer(0, 700).pipe(
      scan((acc, item) => acc + item, 0),
      tap({
        next: e => console.log(e),
        complete: () => console.log('Complete')
      })
    ).subscribe(e => this.result = e);
  }

}
