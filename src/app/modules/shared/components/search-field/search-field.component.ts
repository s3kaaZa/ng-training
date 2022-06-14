import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.scss']
})
export class SearchFieldComponent implements OnInit {
  @Output() updateUserList = new EventEmitter<string>();
  
  public searchFieldControl = new FormControl("");

  constructor() { }

  ngOnInit(): void {
    this.searchFieldControl.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged()
    ).subscribe((value:string) => { 
        this.updateUserList.emit(value.toLowerCase());
      })
  }
}
