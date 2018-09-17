import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class XboxAPI {
	private url = 'https://xboxapi.com/v2/';
	private authKey = '4f34fda373226f2c99943cf0adf82adf84fadcf0';

	public constructor(private http: HttpClient) { }

	public GetXUID(gamertag: string): Observable<XUIDResponse> {
		return this.request(`xuid/${gamertag}`);
	}

	public GetClips(xuid: string): Observable<GameClipInfo[]> {
		return this.request(`${xuid}/alternative-game-clips`);
	}

	private request<T>(endpoint: string): Observable<T> {
		let headers: HttpHeaders = new HttpHeaders({
			'X-Auth': this.authKey
		});

		return this.http.get(this.url + endpoint, { headers: headers }) as Observable<T>;
	}
}
