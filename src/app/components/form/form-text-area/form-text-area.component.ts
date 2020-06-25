import {Component, Input, OnInit} from '@angular/core';
import {ExtendedFormControl} from '../../../model/ExtendedFormControl';

@Component({
    selector: 'app-form-text-area',
    templateUrl: './form-text-area.component.html',
    styleUrls: ['./form-text-area.component.scss'],
})
export class FormTextAreaComponent implements OnInit {
    @Input()
    label: string;
    @Input()
    rows: number;
    @Input()
    minLength: number;
    @Input()
    errorMessage: string;
    @Input()
    control: ExtendedFormControl;
    @Input()
    placeholder: string;

    constructor() {}

    ngOnInit() {}
}
