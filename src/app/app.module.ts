import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { XboxAPI } from '@app/api/xbox.api';
import { MaterialModule } from '@app/material.module';
import { ShellComponent } from '@app/shell/shell.component';


@NgModule({
	declarations: [
		ShellComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpClientModule,
		BrowserAnimationsModule,

		// Angular Material
		MaterialModule
	],
	providers: [XboxAPI],
	bootstrap: [ShellComponent]
})
export class AppModule { }
