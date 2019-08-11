import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { XboxAPI } from '../api/xbox.api';

@Component({
    selector: "x-clips",
    templateUrl: "./clips.component.html",
    styleUrls: ["./clips.component.scss"]
})
export class ClipsComponent implements OnInit {

    public clips: GameClip[] = [];

    public constructor(	private activatedRoute: ActivatedRoute, private xboxAPI: XboxAPI) { }

    /**
	 * Angular OnInit implementation
	 * @external
	 */
	ngOnInit(): void {
		this.activatedRoute.paramMap.subscribe(paramMap => {
			let gamertag = paramMap.get('gamertag');

            console.log("loading");
            console.log("gamertag: " + gamertag);

			if (gamertag) {
				this.getGameClips(gamertag);
			}
		});
    }
    
    private getGameClips(gamertag: string): void {
        this.xboxAPI.getClips(gamertag).subscribe(clipResponse => { 
            this.clips = clipResponse.gameClips;
        });
	}
}