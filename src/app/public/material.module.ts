import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatExpansionModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSidenavModule,
  MatToolbarModule,
} from '@angular/material';
import {NgModule} from '@angular/core';

@NgModule({
    imports: [
        MatInputModule,
        MatCardModule,
        MatButtonModule,
        MatToolbarModule,
        MatExpansionModule,
        MatProgressSpinnerModule,
        MatSidenavModule,
        MatPaginatorModule,
        MatListModule,
        MatIconModule,
        MatDialogModule,
    ],
    exports: [
        MatInputModule,
        MatCardModule,
        MatButtonModule,
        MatToolbarModule,
        MatExpansionModule,
        MatProgressSpinnerModule,
        MatSidenavModule,
        MatPaginatorModule,
        MatListModule,
        MatIconModule,
        MatDialogModule,
    ],
})
export class MaterialModule {}
