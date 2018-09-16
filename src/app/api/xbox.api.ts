import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class XboxAPI {
	private url = 'https://xboxapi.com/v2/';
	private authKey = '2222906f26fadff162d6491c02d5369e480ae777';

	public constructor(private http: HttpClient) { }

	public GetXUID(gamertag: string): Observable<XUIDResponse> {
		return this.request(`xuid/${gamertag}`);
	}

	// this.request('2533274793074481/game-clips/saved');

	private request<T>(endpoint: string): Observable<T> {
		let headers: HttpHeaders = new HttpHeaders({
			'X-Auth': this.authKey
		});

		return this.http.get(this.url + endpoint, { headers: headers }) as Observable<T>;
	}
}
