export interface City {
  readonly id: number;
  readonly title: string;
}

export interface UserProfile {
  readonly id: number;
  readonly domain: string;
  readonly bdate?: string;
  readonly city?: City;
  readonly sex: number;
  readonly photo_100: string;
  readonly first_name: string;
  readonly last_name: string;
  readonly can_access_closed: boolean;
  readonly is_closed: boolean;
}

export interface VKApiResponse {
  readonly response: UserProfile[];
}
