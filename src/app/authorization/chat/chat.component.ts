import {Component, OnInit} from '@angular/core';
import {SocketioService} from '../../public/services/socketio.service';
import {AuthService} from '../auth.service';

@Component({
    selector: 'app-chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
    id: string;
    nickname: string;
    chatData: { formData: string; isOwnMessage: boolean }[] = [];

    constructor(
        private socketioService: SocketioService,
        private authService: AuthService,
    ) {}

    ngOnInit() {
        this.authService.getAuthStatusListener().subscribe((x) => {
            this.id = x._id;
        });

        this.socketioService
            .listen('receivedMssage')
            .subscribe((data: { formData: string; userId: string }) => {
                this.chatData.push({
                    formData: data.formData,
                    isOwnMessage: this.id === data.userId,
                });
            });
        this.socketioService
            .listen('message')
            .subscribe((data: { formData: string; userId: string }) => {
                this.chatData.push({
                    formData: data.formData,
                    isOwnMessage: this.id === data.userId,
                });
            });
    }

    onNewMessage(formData: string) {
        const msg = { formData: formData, userId: this.id };
        this.socketioService.emit('emittedMessage', msg);
    }

}
