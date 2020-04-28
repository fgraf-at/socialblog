import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
})
export class FormComponent {
    @Input()
    formGroup: FormGroup;
    @Input()
    wide = false;
    @Output()
    submitted = new EventEmitter<FormGroup>();

    constructor() {}

    onSubmit() {
        this.submitted.emit(this.formGroup);
    }
}
