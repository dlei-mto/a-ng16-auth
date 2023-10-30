import { Injectable } from '@angular/core';
import { User } from '@aaa/model/user';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http
      .get<User[]>('https://dummyjson.com/users')
      .pipe(map((x: any) => x.users));
  }
}
