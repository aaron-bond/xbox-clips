interface GamertagLookup {
	gamertag: string;
	xuid: string;
}

interface XUIDResponse {
	xuid: string;
}

interface GameClipInfo {
	clipId: string;
	clipThumbnail: string;
	downloadUri: string;
	clipName: string;
	clipCaption: string;
	clipScid: string;
	dateRecorded: string;
	viewCount: number;
	gameMediaContentLocators: GameMediaContentLocator[];
	contentImageUri: string;
	bingId: string;
	contentTitle: string;
	vuiDisplayName: string;
	platform: string;
	titleId: number;
	description: string;
	date: string;
	hasUgc: boolean;
	activityItemType: string;
	contentType: string;
	shortDescription: string;
	itemText: string;
	itemImage: string;
	shareRoot: string;
	feedItemId: string;
	itemRoot: string;
	hasLiked: boolean;
	authorInfo: AuthorInfo;
	userXuid: number;
	sourceId: string;
  }
  
  interface AuthorInfo {
	name: string;
	secondName: string;
	imageUrl: string;
	color: Color;
	showAsAvatar: number;
	authorType: string;
	id: number;
  }
  
  interface Color {
	primaryColor: string;
	secondaryColor: string;
	tertiaryColor: string;
  }
  
  interface GameMediaContentLocator {
	Expiration: string;
	FileSize: number;
	LocatorType: string;
	Uri: string;
  }