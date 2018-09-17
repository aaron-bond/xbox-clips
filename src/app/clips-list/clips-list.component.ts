import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { XboxAPI } from '@app/injectables/api/xbox.api';
import { AppCacheService } from '@app/injectables/services/app-cache.service';

@Component({
	selector: 'x-clips-list',
	templateUrl: './clips-list.component.html',
	styleUrls: ['./clips-list.component.scss']
})
export class ClipsListComponent implements OnInit {

	public constructor(	private activatedRoute: ActivatedRoute,
						private appCache: AppCacheService,
						private xboxAPI: XboxAPI) { }

	/**
	 * Angular OnInit implementation
	 * @external
	 */
	ngOnInit(): void {
		this.activatedRoute.paramMap.subscribe(paramMap => {
			let gamertag = paramMap.get('gamertag');

			// get xuid from appcache
			let lookup = this.appCache.gamertags.find(tag => tag.gamertag === gamertag);

			if (lookup) {
				this.getGameClips(lookup.xuid);
			}
		});
	}

	private getGameClips(xuid: string): void {
		this.xboxAPI.GetClips(xuid).subscribe(result => console.log(result));
	}
}
