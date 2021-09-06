import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Donotcall } from "./donotcall";

@Injectable()
export class DonotcallService {
  constructor(private http: HttpClient) {}

  getDonotcall(): Observable<Donotcall[]> {
    return this.http.get<Donotcall[]>("https://api.smapp.ai/dnc/donotcall");
  }
}
