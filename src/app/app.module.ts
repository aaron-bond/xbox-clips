import { HttpClientModule } from '@angular/common/http';
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { XboxAPI } from './api/xbox.api';
import { ClipsComponent } from './clips/clips.component';
import { MaterialModule } from './material.module';
import { ShellComponent } from './shell/shell.component';
import { StorageService } from './api/storage.service';

const routes: Routes = [
	{ path: ':gamertag', redirectTo: 'clips/:gamertag', pathMatch: 'full' },
	{ path: 'clips/:gamertag', component: ClipsComponent }
];

@NgModule({
    declarations: [
        ShellComponent,
        ClipsComponent
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
    providers: [XboxAPI, StorageService],
    bootstrap: [ShellComponent]
})
export class AppModule {}
