import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ExtendedFormControl } from '../../../model/ExtendedFormControl';

@Component({
    selector: 'app-chat-layout',
    templateUrl: './chat-layout.component.html',
    styleUrls: ['./chat-layout.component.scss'],
})
export class ChatLayoutComponent implements OnInit {
    @Output()
    submitted = new EventEmitter<string>();

    formGroup: FormGroup;
    constructor() {}

    ngOnInit() {
        this.formGroup = new FormGroup({
            chatInput: new ExtendedFormControl(null, 'Message...'),
        });
    }

    getChatInput(): ExtendedFormControl {
        return <ExtendedFormControl>this.formGroup.get('chatInput');
    }
    onSubmit() {
        this.submitted.emit(this.getChatInput().value);
  