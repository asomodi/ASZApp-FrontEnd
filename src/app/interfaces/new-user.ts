export interface NewUser {

  username: string;
  email: string;
  password: string;
  confirmPassword?: string;
  spotify?: string;
  lastfm?: string;
  hasNewsLetter: boolean;

}
