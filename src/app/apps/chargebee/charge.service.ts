import { Injectable } from "@angular/core";
import { ChargeBeeService } from "./chargebee.service";
import { Observable, Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Charge } from "./chargebee";

@Injectable()
export class ChargeService {
  charges: Subject<any>;

  // Our constructor calls our wsService connect method
  constructor(private cbService: ChargeBeeService, private http: HttpClient) {
    this.charges = <Subject<any>>(
      cbService.connect().map((response: any): any => {
        return response;
      })
    );
  }

  getChgs(): Observable<Charge[]> {
    return this.http.get<Charge[]>("https://api.oursmapp.com:8080/charges");
  }
}
