import { Injectable } from "@angular/core";
import { Socket } from "ngx-socket-io";
import * as Rx from "rxjs/Rx";
import { Charge } from "./chargebee";
import * as io from "socket.io-client";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ChargeBeeService {
  constructor(private socket: Socket) {}

  connect(): Rx.Subject<MessageEvent> {
    let observable = new Observable((observer) => {
      this.socket.on("charge-added", (data: any) => {
        console.log("Received message from Websocket Server");
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    });

    // We define our Observer which will listen to messages
    // from our other components and send messages back to our
    // socket server whenever the `next()` method is called.
    let observer = {
      next: (data: Object) => {
        this.socket.emit("charge-added", JSON.stringify(data));
      },
    };

    // we return our Rx.Subject which is a combination
    // of both an observer and observable.
    return Rx.Subject.create(observer, observable);
  }

  getCharges(): Observable<any> {
    return new Observable((observer) => {
      this.socket.on("charge-added", (charge: any) => {
        observer.next(charge);
      });
    });
  }
}
