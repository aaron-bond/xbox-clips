import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class StorageService {
    public searches: string[] = [];

    public constructor() {
        this.getPreviousSearches();
    }

    public recordSearch(search: string): void {
        if (this.searches.indexOf(search) < 0) {
            this.searches.push(search);
        }

        this.saveSearches();
    }

    public clearSearches(): void {
        this.searches.length = 0;
        localStorage.clear();
    }

    private saveSearches(): void {
        localStorage.setItem("x-clips-searches", JSON.stringify(this.searches));
    }

    private getPreviousSearches(): void {
        let searches = JSON.parse(localStorage.getItem("x-clips-searches"));

        if (searches) {
            this.searches = searches;
        }
    }
}
