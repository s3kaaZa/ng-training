import { Injectable } from '@angular/core';
import { CanDeactivate, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

export interface CanDeactivatePage {
  hasUnsavedData(): boolean | null;
  isFormSubmitted: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class LeaveCreateFormGuard implements CanDeactivate<CanDeactivatePage> {
  canDeactivate(
    component: CanDeactivatePage): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (!component.hasUnsavedData() || component.isFormSubmitted) {
        return true;
      } else {
        return confirm('You have some unsaved changes and it will be lost. Do you want to leave the page?');
      }
  }
}
