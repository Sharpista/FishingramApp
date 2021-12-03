import { EntityBase } from './entity-base';
import { PhotoAlbums } from './photoAlbum';
import { Post } from './post';

export class Profile extends EntityBase {

  nome!: string;
  email!: string;
  passwprd!: string;
  birthDate!: string;
  profilePicture!: File;
  posts!: Post[];
  photoAlbums!: PhotoAlbums[];
  follows!:Profile[];
  followings!:Profile[];


}
