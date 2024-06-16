import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  public $refreshToken = new Subject<boolean>();
  public $refreshTokenReceived = new Subject<boolean>();

  constructor(private http: HttpClient) {
    this.$refreshToken.subscribe(() => {
      this.getRefreshToken();
    })
   }

  onLogin(ueserObj: User): Observable<any> {
    return this.http.post('https://freeapi.gerasim.in/api/JWT/login', ueserObj)
  }

  getRefreshToken(): any {
    debugger;
    let localUserData: any = {};
    let localData = typeof window !== 'undefined' ? localStorage.getItem('user') : null;
    if(localData != null) {
      localUserData = JSON.parse(localData);
    }
    const obj = {
      "emailId": typeof window !== 'undefined' ? localStorage.getItem('userEmail') : '',
      "token": '',
      "refreshToken": localUserData?.refreshToken || '',
    }
    this.http.post('https://freeapi.gerasim.in/api/JWT/refresh', obj).subscribe((res: any) => {
      localStorage.setItem('user', JSON.stringify(res.data));
      this.$refreshTokenReceived.next(true);
    })
  }

  getUserData(): Observable<any> {
    return this.http.get('https://freeapi.gerasim.in/api/JWT/GetAllUsers');
  }
}
