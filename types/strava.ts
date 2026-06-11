export interface StravaMember {
  id: number;
  firstname: string;
  lastname: string;
  profile_medium: string;
  profile: string;
  city: string;
  country: string;
  sex: "M" | "F";
  premium: boolean;
  admin?: boolean;
  owner?: boolean;
}

export interface StravaActivity {
  id: number;
  name: string;
  distance: number;
  moving_time: number;
  elapsed_time: number;
  total_elevation_gain: number;
  type: string;
  sport_type: string;
  start_date: string;
  start_date_local: string;
  average_speed: number;
  max_speed: number;
  average_heartrate?: number;
  kudos_count: number;
  athlete: { id: number; firstname: string; lastname: string };
}

export interface StravaClub {
  id: number;
  name: string;
  sport_type: string;
  member_count: number;
  description: string;
  city: string;
  country: string;
  profile_medium: string;
}

export interface ApiResponse<T> {
  status: "success" | "error";
  message: string;
  data: T | null;
}
