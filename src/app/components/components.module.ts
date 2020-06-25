import {NgModule} from '@angular/core';

import {ChatLayoutComponent} from './chat/chat-layout/chat-layout.component';
import {InputFormComponent} from './form/input-form/input-form.component';
import {FormActionsComponent} from './form/form-actions/form-actions.component';
import {FormTextAreaComponent} from './form/form-text-area/form-text-area.component';
import {FormComponent} from './form/form.component';
import {MaterialModule} from '../public/material.module';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SidebarComponent} from './sidebar/sidebar.component';
import {RouterModule} from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';
import {SearchComponent} from './search/search.component';
import {MatAutocompleteModule} from '@angular/material';

@NgModule({
    declarations: [
        ChatLayoutComponent,
        InputFormComponent,
        FormActionsComponent,
        FormTextAreaComponent,
        FormComponent,
        SidebarComponent,
        SearchComponent,
    ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatAutocompleteModule,
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
        SearchComponent,
    ],
})
export class ComponentsModule {}
