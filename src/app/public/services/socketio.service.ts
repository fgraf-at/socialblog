import {Injectable} from '@angular/core';
import * as io from 'socket.io-client';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class SocketioService {
    socket: any;
    readonly uri: string = environment.SOCKET_ENDPOINT;

    constructor() {
        this.socket = io(this.uri);
    }
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
