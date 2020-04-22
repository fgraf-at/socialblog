import { Injectable, OnInit } from "@angular/core";
import * as io from "socket.io-client";
import { environment } from "../environments/environment";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class SocketioService {
  constructor() {
    this.socket = io(this.uri);
  }
  socket: any;
  readonly uri: string = environment.SOCKET_ENDPOINT;
  listen(eventName: string) {
    return new Observable((subscriber) => {
      this.socket.on(eventName, (data) => {
        subscriber.next(data);
      });
    });
  }
  emit(eventName: string, data: any) {
    this.socket.emit(eventName, data);
  }
}
