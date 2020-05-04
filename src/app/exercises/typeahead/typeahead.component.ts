import { Component, OnInit } from '@angular/core';
import { TypeaheadService } from './typeahead.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';
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

    searchInput$.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      tap(() => this.loading = true),
      switchMap(term => this.ts.search(term)),
      tap(() => this.loading = false),
    ).subscribe(results => this.results = results);

    /******************************/
  }

  formatAuthors(authors: string[]) {
    return Array.isArray(authors) ? authors.join(', ') : '';
  }

}
