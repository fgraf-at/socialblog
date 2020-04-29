import { NgModule } from '@angular/core';

import { ChatLayoutComponent } from './chat/chat-layout/chat-layout.component';
import { InputFormComponent } from './form/input-form/input-form.component';
import { FormActionsComponent } from './form/form-actions/form-actions.component';
import { FormTextAreaComponent } from './form/form-text-area/form-text-area.component';
import { FormComponent } from './form/form.component';
import { MaterialModule } from '../public/material.module';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    declarations: [
        ChatLayoutComponent,
        InputFormComponent,
        FormActionsComponent,
        FormTextAreaComponent,
        FormComponent,
        SidebarComponent,
    ],
    imports: [
        CommonModule,
        MaterialModule,
        RouterModule,
        ReactiveFormsModule,
        FlexLayoutModule,
    ],
    exports: [
        ChatLayoutComponent,
        InputFormComponent,
        FormActionsComponent,
        FormTextAreaComponent,
        FormComponent,
        SidebarComponent,
        MaterialModule,
        RouterModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        CommonModule,
    ],
})
export class ComponentsModule {}
