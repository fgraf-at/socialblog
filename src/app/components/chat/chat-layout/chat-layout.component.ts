import {
    Component,
    EventEmitter,
    OnInit,
    Output,
    ViewChild,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ExtendedFormControl } from '../../../model/ExtendedFormControl';
import { SocketioService } from '../../../public/services/socketio.service';

@Component({
    selector: 'app-chat-layout',
    templateUrl: './chat-layout.component.html',
    styleUrls: ['./chat-layout.component.scss'],
})
export class ChatLayoutComponent implements OnInit {
    @Output()
    submitted = new EventEmitter<string>();

    formGroup: FormGroup;
    constructor(private socketioService: SocketioService) {}

    ngOnInit() {
        this.formGroup = new FormGroup({
            chatInput: new ExtendedFormControl(null, 'Message...'),
        });
        this.socketioService.listen('message').subscribe((data) => {
            console.log(data);
        });
    }

    getChatInput(): ExtendedFormControl {
        return <ExtendedFormControl>this.formGroup.get('chatInput');
    }
    onSubmit() {
        this.submitted.emit(this.getChatInput().value);
    }
}
