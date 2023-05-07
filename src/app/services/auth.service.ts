import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedSubject$ = new BehaviorSubject<boolean>(false);

  isLoggedSignal = signal<boolean>(false);

  login(): void {
    this.isLoggedSubject$.next(true);
    this.isLoggedSignal.set(true);
  }

  logout(): void {
    this.isLoggedSubject$.next(false);
    this.isLoggedSignal.set(false);
  }
}
