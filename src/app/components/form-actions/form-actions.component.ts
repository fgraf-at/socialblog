import { Component, Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "app-form-actions",
  templateUrl: "./form-actions.component.html",
  styleUrls: ["./form-actions.component.scss"],
})
export class FormActionsComponent implements OnInit {
  @Input()
  formGroup: FormGroup;

  @Input()
  accept: string;
  @Input()
  reject: string;

  constructor() {}

  ngOnInit() {}
}
