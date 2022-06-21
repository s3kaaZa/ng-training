import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

const baseApi = 'https://randomuser.me/api/';
const includingFields = ['login','name','email','gender','dob','picture','location'];
const seed = 'dfjgh3vgh34bh';
const noInfo = true;
//?page=${page + 1}&results=${results}&seed=qwer&inc=login,name,email,gender,dob,picture,location&noinfo
//?id=341f-c7e6-45b7-bab0-af6de5a4582d&seed=qwer&inc=login,name,email,gender,dob,picture,location&noinfo

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient,
  ) { }

  private getFullUrl(page: number | null, results: number | null, id: string | null): string {
    const endPath = `&seed=${seed}&inc=${includingFields.join(',')}${noInfo ? '&noinfo' : ''}`;
    let path;

    if (Number.isInteger(page) && Number.isInteger(results)) {
      path = `?page=${page ? page + 1 : ''}&results=${results}${endPath}`;
    } else {
      path = `?id=${id}${endPath}`;
    }

    return baseApi + path
  }

  get(page: number | null, results: number | null, id: string | null) {
    const fullPath = this.getFullUrl(page, results, id)
    
    return this.http.get(fullPath).pipe(
      map((response: any) => {
        return response.results;
      })
    )
  }
}
