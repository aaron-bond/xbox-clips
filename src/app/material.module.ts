import { NgModule } from '@angular/core';
import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatToolbarModule } from '@angular/material';

@NgModule({
	imports: [
		MatButtonModule,
		MatToolbarModule,
		MatIconModule,
		MatFormFieldModule,
		MatInputModule
	],
	exports: [
		MatButtonModule,
		MatToolbarModule,
		MatIconModule,
		MatFormFieldModule,
		MatInputModule
	]
})
export class MaterialModule { }
