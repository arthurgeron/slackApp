export type ResponseData = {
  users: Array<UserData>;
}

export interface UserData extends Record<string, string | number> {
  id: string;
  name: string;
  deleted: number;
  real_name: string;
  TZ: string;
  STATUS_TEXT: string;
  STATUS_EMOJI: string;
  IMAGE_512: string;
}