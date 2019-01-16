import { Injectable, InjectionToken, Inject } from '@angular/core';


export class User {
  public login: string;
  public password: string;
}

export const USER = new InjectionToken<Partial<User>>('user');
@Injectable({
  providedIn: 'root'
})
export class TestLibService {

  constructor(
    @Inject(USER) private user: Partial<User>
  ) { }
}
