interface XboxClipsResponse {
  gameClips: GameClip[];
  pagingInfo: PagingInfo;
}

interface XboxScreenshotResponse {
  screenshots: Screenshot[];
  pagingInfo: PagingInfo;
}

interface GameClip {
  gameClipId: string;
  state: string;
  datePublished: string;
  dateRecorded: string;
  lastModified: string;
  userCaption: string;
  type: string;
  durationInSeconds: number;
  scid: string;
  titleId: number;
  rating: number;
  ratingCount: number;
  views: number;
  titleData: string;
  systemProperties: string;
  savedByUser: boolean;
  achievementId: string;
  greatestMomentId: string;
  thumbnails: Thumbnail[];
  gameClipUris: ResourceUris[];
  xuid: string;
  clipName: string;
  titleName: string;
  gameClipLocale: string;
  clipContentAttributes: string;
  deviceType: string;
  commentCount: number;
  likeCount: number;
  shareCount: number;
  partialViews: number;
}

interface Screenshot {
  screenshotId: string;
  resolutionHeight: number;
  resolutionWidth: number;
  state: string;
  datePublished: string;
  dateTaken: string;
  lastModified: string;
  userCaption: string;
  type: string;
  scid: string;
  titleId: number;
  rating: number;
  ratingCount: number;
  views: number;
  titleData: string;
  systemProperties: string;
  savedByUser: boolean;
  achievementId: string;
  greatestMomentId?: any;
  thumbnails: Thumbnail[];
  screenshotUris: ResourceUris[];
  xuid: string;
  screenshotName: string;
  titleName: string;
  screenshotLocale: string;
  screenshotContentAttributes: string;
  deviceType: string;
}

interface ResourceUris {
  uri: string;
  fileSize: number;
  uriType: string;
  expiration: string;
}

interface Thumbnail {
  uri: string;
  fileSize: number;
  thumbnailType: string;
}

interface PagingInfo {
  continuationToken: string;
}
