import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { ClipsListComponent } from '@app/clips-list/clips-list.component';
import { XboxAPI } from '@app/injectables/api/xbox.api';
import { AppCacheService } from '@app/injectables/services/app-cache.service';
import { MaterialModule } from '@app/material.module';
import { SearchBoxComponent } from '@app/shell/search-box/search-box.component';
import { ShellComponent } from '@app/shell/shell.component';

const routes: Routes = [
	{ path: ':gamertag', redirectTo: 'clips/:gamertag', pathMatch: 'full' },
	{ path: 'clips/:gamertag', component: ClipsListComponent }
];

@NgModule({
	declarations: [
		ShellComponent,
		SearchBoxComponent,
		ClipsListComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpClientModule,
		BrowserAnimationsModule,
		RouterModule.forRoot(routes),

		// Angular Material
		MaterialModule
	],
	providers: [
		// Injectables
		AppCacheService,

		// API service wrappers
		XboxAPI
	],
	bootstrap: [ShellComponent]
})
export class AppModule { }
