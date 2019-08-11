import { NgModule } from '@angular/core';
import {
	MatButtonModule,
	MatCardModule,
	MatFormFieldModule,
	MatIconModule,
	MatInputModule,
	MatToolbarModule,
	MatProgressSpinnerModule
} from '@angular/material';

@NgModule({
	imports: [
		MatButtonModule,
		MatToolbarModule,
		MatIconModule,
		MatFormFieldModule,
		MatInputModule,
		MatCardModule,
		MatProgressSpinnerModule
	],
	exports: [
		MatButtonModule,
		MatToolbarModule,
		MatIconModule,
		MatFormFieldModule,
		MatInputModule,
		MatCardModule,
		MatProgressSpinnerModule
	]
})
export class MaterialModule { }
