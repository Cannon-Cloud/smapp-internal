import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { LocalstorageService } from "./localstorage.service";
import { User } from "./user";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  apiURLUsers = environment.webApiUrl + "users";

  constructor(
    private http: HttpClient,
    private tokenService: LocalstorageService,
    private router: Router
  ) {}

  login(email: string, password: string): Observable<User> {
    return this.http.post<User>(`${this.apiURLUsers}/login`, {
      email: email,
      password: password,
    });
  }

  logout() {
    this.tokenService.removeToken();
    this.router.navigate(["/login"]);
  }
}
