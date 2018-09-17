import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { XboxAPI } from '@app/injectables/api/xbox.api';

@Component({
	selector: 'x-shell',
	templateUrl: './shell.component.html',
	styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {

	public xuid = '';
	public gamertag = '';
	public showFullScreenSearch = true;

	public constructor(private xboxAPI: XboxAPI, private router: Router) { }

	/**
	 * Angular OnInit implementation
	 * @external
	 */
	ngOnInit(): void {

		// When the address changes, we should decide whether to show the search
		this.router.events.subscribe((event: RouterEvent) => {
			if (event.url && event.url !== '/') {
				this.showFullScreenSearch = false;
			}
		});
	}

	public findXUID(): void {
		this.xboxAPI.GetXUID(this.gamertag).subscribe(response => this.xuid = response.xuid);

		// reset the search text
		this.gamertag = '';
	}

	public handleLookupComplete(lookup: GamertagLookup): void {

		// Once the lookup is finished, we can hide the fullscreen mask
		this.showFullScreenSearch = false;

		// Redirect to the given gamertag's profile page
		this.router.navigate([`clips/${lookup.gamertag}`]);
	}
}
