import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { concatMap, exhaustMap, mergeMap, Subject, switchMap, tap } from 'rxjs';
import { IUser } from '../../interfaces/IUser';
import { UsersService } from '../../services/users.service';
import { RequestService } from 'src/app/modules/shared/services/request.service';

@Component({
  selector: 'app-users-shell',
  templateUrl: './users-shell.component.html',
  styleUrls: ['./users-shell.component.scss']
})
export class UsersShellComponent implements OnInit {
  @Input() users!: IUser[];

  public favoriteUsers!: IUser[];
  public isLike: boolean = false;
  public editedUser!: any;
  private exportCounterSubject$ = new Subject();
  private saveCounterSubject$ = new Subject();
  private sendOnlyFirstSubject$ = new Subject();

  constructor(
    private usersService: UsersService,
    private router: Router,
    private requestService: RequestService,
  ) { }

  ngOnInit(): void {
    this.exportUser();
    this.saveUser();
    this.onlyFirstRequest();
  }

  private toggleLike(user: IUser): void {
    this.usersService.toggleLike(user.id);
    this.usersService.getFavoriteUsers().subscribe((users: IUser[]) => {
      this.favoriteUsers = users;
    });
  }

  private editUser(user: IUser): void {  
    const url: string = '/user/edit/' + user.id;
    this.router.navigateByUrl(url);  
  }

  private refreshExportCounter(): void {
    this.requestService.increaseAndGetExportCounter().subscribe(
      ordinalNumber => this.exportCounterSubject$.next(ordinalNumber)
    );
  }

  private refreshSaveCounter(): void {
    this.requestService.increaseAndGetSaveCounter().subscribe(
      ordinalNumber => this.saveCounterSubject$.next(ordinalNumber)
    );
  }

  private refreshOnlyFirstCounter(): void {
    this.requestService.increaseAndGetOnlyFirstCounter().subscribe(
      ordinalNumber => this.sendOnlyFirstSubject$.next(ordinalNumber)
    );
  }

  private exportUser(): void {
    this.exportCounterSubject$.pipe(
      mergeMap(
        (ordinalNumber: number) => this.requestService.exportUser(ordinalNumber)
      )
    ).subscribe(
      ordinalNumber => this.log('exportUserCounter = ', ordinalNumber)
    )
  }

  private saveUser(): void {
    this.saveCounterSubject$.pipe(
      concatMap(
        (ordinalNumber: number) => this.requestService.saveUser(ordinalNumber)
      )
    ).subscribe(
      ordinalNumber => this.log('saveUserCounter = ', ordinalNumber)
    )
  }

  private onlyFirstRequest(): void {
    this.sendOnlyFirstSubject$.pipe(
      exhaustMap(
        (ordinalNumber: number) => this.requestService.sendFirst(ordinalNumber)
      )
    ).subscribe(
      ordinalNumber => this.log('onlyFirstRequestCounter = ', ordinalNumber)
    )
  }

  private log(counterName: string, value: number): void {
    return console.log(counterName, value);
  }
}
