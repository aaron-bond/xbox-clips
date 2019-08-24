import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { XboxAPI } from "../api/xbox.api";
import { StorageService } from "../api/storage.service";

@Component({
    selector: "x-screenshots",
    templateUrl: "./screenshots.component.html",
    styleUrls: ["./screenshots.component.scss"]
})
export class ScreenshotsComponent implements OnInit {

    public screenshots: Screenshot[] = [];

    private gamertag: string = "";

    public constructor( private activatedRoute: ActivatedRoute,
                        private xboxAPI: XboxAPI,
                        private router: Router) {}

    /**
     * Angular OnInit implementation
     * @external
     */
    ngOnInit(): void {
        this.activatedRoute.paramMap.subscribe(paramMap => {
            this.gamertag = paramMap.get("gamertag");

            if (this.gamertag) {
                this.getScreenshots(this.gamertag);
            }
        });
    }

    public getThumbnail(shot: Screenshot): string {
        let thumbnail = shot.thumbnails.find(image => image.thumbnailType == "Large");
        return thumbnail.uri;
    }

    public navigateToClips(): void {
        this.router.navigate(['clips', this.gamertag]);
    }

    private getScreenshots(gamertag: string): void {
        this.xboxAPI.getScreenshots(gamertag).subscribe(screenshotResponse => { 
            this.screenshots = screenshotResponse.screenshots;
        });
	}
}
