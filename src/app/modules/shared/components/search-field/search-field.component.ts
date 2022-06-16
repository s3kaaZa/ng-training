import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.scss']
})
export class SearchFieldComponent implements OnInit, OnDestroy {
  @Output() inputChanged = new EventEmitter<string>();

  private _notifier = new Subject();
  public searchFieldControl = new FormControl("");

  constructor() { }

  ngOnInit(): void {
    this.searchFieldControl.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        takeUntil(this._notifier)
      ).subscribe((value: string) => {
        this.inputChanged.emit(value.toLowerCase());
      })
  }

  ngOnDestroy(): void {
    this._notifier.next(null);
    this._notifier.complete();
  }
}
