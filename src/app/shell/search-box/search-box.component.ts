import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { XboxAPI } from '@app/injectables/api/xbox.api';
import { AppCacheService } from '@app/injectables/services/app-cache.service';
import { LoadingState } from 'typings/enum';

@Component({
	selector: 'x-search-box',
	templateUrl: './search-box.component.html',
	styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent {

	/**
	 * An event emitted when the search for a gamertag completes
	 * @event
	 */
	@Output() public lookupComplete = new EventEmitter<GamertagLookup>();

	/**
	 * The gamertag search text the user inputs
	 * @template
	 */
	public gamertag = '';

	/**
	 * A flag indicating whether an async call is currently in progress
	 * @template
	 */
	public state: LoadingState = LoadingState.Ready;

	/**
	 * Exposing the LoadingState enum for the template to use
	 * @template
	 */
	public LoadingState = LoadingState;

	/**
	 * Initialises an instance of the searchbox component
	 * @param xboxAPI The XboxAPI REST service wrapper
	 * @param appCache The application cache to be used throughout the app
	 */
	public constructor(private xboxAPI: XboxAPI, private appCache: AppCacheService) { }

	/**
	 * Find the given gamertag to get it's associated XUID
	 */
	public lookupGamertag(): void {
		this.state = LoadingState.Busy;

		this.xboxAPI.GetXUID(this.gamertag).subscribe(
			response => this.handleGetXUIDSuccess(response),
			error => this.handleGetXUIDError(error));
	}

	/**
	 * Handles the Xbox API call to get the XUID completing successfully
	 * @param response The message containing XUID sent back from the server
	 * @fires lookupComplete
	 */
	private handleGetXUIDSuccess(response: XUIDResponse): void {
		let lookup = { gamertag: this.gamertag, xuid: response.xuid };
		this.appCache.gamertags.push(lookup);
		this.lookupComplete.emit(lookup);

		this.state = LoadingState.Complete;
	}

	/**
	 * Handles the Xbox API call to get the XUID failing
	 * @param error The Http error message
	 */
	private handleGetXUIDError(error: HttpErrorResponse): void {
		this.state = LoadingState.Error;
		this.gamertag = '';
	}
}
