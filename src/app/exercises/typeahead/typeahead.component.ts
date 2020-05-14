import { Component, OnInit } from '@angular/core';
import { TypeaheadService } from './typeahead.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, tap, filter, delay } from 'rxjs/operators';
import { Book } from './book';

@Component({
  selector: 'rxw-typeahead',
  templateUrl: './typeahead.component.html',
})
export class TypeaheadComponent implements OnInit {

  searchControl: FormControl;
  results: Book[];
  loading = false;

  constructor(private ts: TypeaheadService) { }

  ngOnInit() {
    this.searchControl = new FormControl('');
    const searchInput$ = this.searchControl.valueChanges;

    /******************************/

    /*
    - Suchbegriff mindestens 3 Zeichen lang
    - erst suchen, wenn für bestimmte Zeit "Ruhe war"
    - niemals zwei gleiche Suchbegriffe nacheinander
    - Suchbegriff zum Server schicken (this.ts.search)
    - Ergebnisse in this.results speichern
    - Extra: Ladeindikator (this.loading)
    - Extra: AsyncPipe
    */

    searchInput$.pipe(
      filter(term => term.length >= 3 || term.length === 0),
      debounceTime(1000),
      distinctUntilChanged(),
      tap(() => this.loading = true),
      switchMap(term => this.ts.search(term).pipe(delay(1000))),
      tap(() => this.loading = false),
    ).subscribe(books => this.results = books);

    /******************************/
  }

  formatAuthors(authors: string[]) {
    return Array.isArray(authors) ? authors.join(', ') : '';
  }

}
