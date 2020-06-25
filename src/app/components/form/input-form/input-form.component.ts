import {Component, Input, OnInit} from '@angular/core';
import {ExtendedFormControl} from '../../../model/ExtendedFormControl';

@Component({
    selector: 'app-input-form',
    templateUrl: './input-form.component.html',
    styleUrls: ['./input-form.component.scss'],
})
export class InputFormComponent implements OnInit {
    @Input()
    label: string;
    @Input()
    type = 'text';
    @Input()
    errorMessage: string;
    @Input()
    minLength: number;
    @Input()
    control: ExtendedFormControl;
    @Input()
    placeholder: string;

    constructor() {}

    ngOnInit() {}
}
