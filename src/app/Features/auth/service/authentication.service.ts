import { Injectable } from '@angular/core';
import { of } from 'rxjs';
export interface DataList {
  username: string;
  email: string;
  role: string;
  password: string;
}
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private data: DataList[] = [
    {
      username: 'admin',
      email: 'admin@gmail.com',
      role: 'admin',
      password: '123',
    },
    {
      username: 'user',
      email: 'user@gmail.com',
      role: 'user',
      password: '123',
    },
  ];
  admin: string = 'admin@gmail.com';
  user: string = 'user@gmail.com';

  constructor() {}
  isLoggedIn() {
    return !!localStorage.getItem('email');
  }

  login(data: { email: string; password: string }): any {
    return of(
      this.data.find(
        (user: DataList) =>
          user.email === data.email && user.password === data.password
      )
    );
  }
}
