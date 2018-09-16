import { Component } from '@angular/core';
import { XboxAPI } from '@app/api/xbox.api';

@Component({
	selector: 'x-shell',
	templateUrl: './shell.component.html',
	styleUrls: ['./shell.component.scss']
})
export class ShellComponent {

	public xuid = '';
	public gamertag = '';
	public showFullScreenSearch = true;

	public constructor(private xboxAPI: XboxAPI) { }

	public findXUID(): void {
		this.xboxAPI.GetXUID(this.gamertag).subscribe(response => this.xuid = response.xuid);

		// reset the search text
		this.gamertag = '';
	}
}
