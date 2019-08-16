import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { XboxAPI } from '../api/xbox.api';
import { StorageService } from '../api/storage.service';

@Component({
    selector: "x-clips",
    templateUrl: "./clips.component.html",
    styleUrls: ["./clips.component.scss"]
})
export class ClipsComponent implements OnInit {

    public clips: GameClip[] = [];

    public shortUrl = "";
    public showShareLink = false;

    public constructor( private activatedRoute: ActivatedRoute, 
                        private xboxAPI: XboxAPI,
                        private storageService: StorageService) { }

    /**
	 * Angular OnInit implementation
	 * @external
	 */
	ngOnInit(): void {
		this.activatedRoute.paramMap.subscribe(paramMap => {
			let gamertag = paramMap.get('gamertag');

			if (gamertag) {
				this.getGameClips(gamertag);
			}
		});
    }

    public getThumbnail(clip: GameClip): string {
        let thumbnail = clip.thumbnails.find(image => image.thumbnailType == "Large");
        return thumbnail.uri;
    }

    public getShortUrl(clip: GameClip): void {
        this.showShareLink = true;

        this.xboxAPI.getShortUrl(clip.gameClipUris[0].uri).subscribe(url => {
            this.shortUrl = url;
        });        
    }

    public copyToClipboard(input: HTMLInputElement, event: MouseEvent): void {
        console.log(input);
        
        event.stopPropagation();

        input.select();
        document.execCommand('copy');
        input.setSelectionRange(0, 0);
    }
    
    private getGameClips(gamertag: string): void {
        this.xboxAPI.getClips(gamertag).subscribe(clipResponse => { 
            this.clips = clipResponse.gameClips;

            if (this.clips.length > 0) {
                this.storageService.recordSearch(gamertag);
            }
        });
	}
}