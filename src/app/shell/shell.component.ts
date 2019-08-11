import { Component, OnInit } from "@angular/core";
import { Router, RouterEvent } from "@angular/router";
import { XboxAPI } from "../api/xbox.api";
import { LoadingState } from '../api/enums';

@Component({
    selector: "x-shell",
    templateUrl: "./shell.component.html",
    styleUrls: ["./shell.component.scss"]
})
export class ShellComponent implements OnInit {
    public gamertag = "";
    public showFullScreenSearch = true;
    public LoadingState = LoadingState;
    public state: LoadingState = LoadingState.Ready;

    /**
     * Creates a new instance of the shell component
     * @param xboxAPI
     * @param router
     */
    public constructor(private xboxAPI: XboxAPI, private router: Router) {}

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

    public navigateToGamertag(): void {

        // When we're redirecting we can hide the full screen overlay
        this.showFullScreenSearch = false;

        // Redirect to the given gamertag's profile page
        this.router.navigate([`clips/${this.gamertag}`]);
    }
}
