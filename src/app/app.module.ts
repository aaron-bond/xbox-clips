import { HttpClientModule } from '@angular/common/http';
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';

import { MaterialModule } from './material.module';

import { environment } from '../environments/environment';

import { StorageService } from './api/storage.service';
import { XboxAPI } from './api/xbox.api';

import { ClipsComponent } from './clips/clips.component';
import { ScreenshotsComponent } from './screenshots/screenshots.component';
import { ShellComponent } from './shell/shell.component';

const routes: Routes = [
	{ path: ':gamertag', redirectTo: 'clips/:gamertag', pathMatch: 'full' },
    { path: 'clips/:gamertag', component: ClipsComponent },
    { path:'screenshots/:gamertag', component: ScreenshotsComponent }
];

@NgModule({
    declarations: [
        ShellComponent,
        ClipsComponent,
        ScreenshotsComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(routes),

        // Angular Material
		MaterialModule,

        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
    ],
    providers: [XboxAPI, StorageService],
    bootstrap: [ShellComponent]
})
export class AppModule {}
