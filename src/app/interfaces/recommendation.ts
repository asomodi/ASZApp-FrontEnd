import { Artist } from './artist';

export interface Recommendation{
    title: string;
    artist: Artist;
    releaseDate: Date;
}
