import { Component, OnInit } from "@angular/core";
import { Router, RouterEvent } from "@angular/router";
import { XboxAPI } from "../api/xbox.api";
import { LoadingState } from '../api/enums';
import { StorageService } from '../api/storage.service';

@Component({
    selector: "x-shell",
    templateUrl: "./shell.component.html",
    styleUrls: ["./shell.component.scss"]
})
export class ShellComponent implements OnInit {
    public gamertag = "";
    public searchTerm = "";
    public showFullScreenSearch = true;
    public LoadingState = LoadingState;
    public state: LoadingState = LoadingState.Ready;

    public get searches(): string[] {
        return this.storageService.searches;
    }

    /**
     * Creates a new instance of the shell component
     * @param xboxAPI
     * @param router
     */
    public constructor( private xboxAPI: XboxAPI, 
                        private router: Router,
                        private storageService: StorageService) {}

    /**
     * Angular OnInit implementation
     * @external
     */
    ngOnInit(): void {
        // When the address changes, we should decide whether to show the search
        this.router.events.subscribe((event: RouterEvent) => {
            if (event.url) {
                if (event.url !== "/") {
                    this.showFullScreenSearch = false;
                }
                else {
                    this.showFullScreenSearch = true;
                }
            }
        });
    }

    public navigateToGamertag(gamertag = null): void {

        let search = gamertag ? gamertag : this.gamertag;

        // When we're redirecting we can hide the full screen overlay
        this.showFullScreenSearch = false;

        // Redirect to the given gamertag's profile page
        this.router.navigate([`clips/${search}`]);
    }

    public navigateToHome(): void {
        
        // When we redirecting back to home, we should display the screen overlay
        this.showFullScreenSearch = true;

        // Redirect back to the root
        this.router.navigate([""]);
    }
}
