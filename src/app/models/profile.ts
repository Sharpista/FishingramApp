import { EntityBase } from './entity-base';
import { Login } from './login';
import { Photo } from './photo';
import { PhotoAlbums } from './photoAlbum';
import { Post } from './post';

export class Profile extends EntityBase {

  Login!:Login;
  Name!: string;
  Email!: string;
  Password!: string;
  BirthDate!: string;
  ProfilePicture!: Photo;
  ZipCode!: string;
  Street!: string;
  Number!: string | undefined;
  Complement:string | undefined;
  City!: string;
  State!: string;
  Posts!: Post[] | undefined;
  PhotoAlbums!: PhotoAlbums[] | undefined;
  Follows!:Profile[] | undefined;
  Followings!:Profile[] | undefined;
}
