import { Injectable } from "@angular/core";

const TOKEN = "jwtToken";
const USERNAME = "userName";

@Injectable({
  providedIn: "root",
})
export class LocalstorageService {
  constructor() {}

  setToken(data: string | undefined) {
    if (!data) return;
    localStorage.setItem(TOKEN, data);
  }

  getToken() {
    return localStorage.getItem(TOKEN);
  }

  removeToken() {
    localStorage.removeItem(TOKEN);
  }

  setUserName(data: string | undefined) {
    if (!data) return;
    localStorage.setItem(USERNAME, data);
  }

  getUserName() {
    return localStorage.getItem(USERNAME);
  }
}
