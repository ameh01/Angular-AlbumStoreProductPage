import { release } from 'os';
import { Track } from './track';

export interface Album {

  typeof name === 'string';
  typeof releaseDate === 'string';
  typeof coverImage === 'string';
  typeof tracks === Track[];
}

