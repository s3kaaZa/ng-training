import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  refreshPageCounter: number = 0;
  exportCounter: number = 0;
  saveCounter: number = 0;
  onlyFirstCounter: number = 0;

  constructor() { }

  getDelay(): number {
    const max: number = 6000;
    const min: number = 1000;

    console.log('delay = ', Math.floor(Math.random() * (max - min) + min));
    
    return Math.floor(Math.random() * (max - min) + min);
  }

  increaseAndGetRefreshPageCounter(): Observable<number> {
    this.refreshPageCounter++;

    return of(this.refreshPageCounter);
  }

  increaseAndGetExportCounter(): Observable<number> {
    this.exportCounter++;

    return of(this.exportCounter);
  }

  increaseAndGetSaveCounter(): Observable<number> {
    this.saveCounter++;

    return of(this.saveCounter);
  }

  increaseAndGetOnlyFirstCounter(): Observable<number> {
    this.onlyFirstCounter++;

    return of(this.onlyFirstCounter);
  }

  returnCounterAfterDelay(counter: number) {
    return of(counter).pipe(
      delay(this.getDelay())
    )
  }
}
