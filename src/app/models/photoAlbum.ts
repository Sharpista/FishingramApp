import { EntityBase } from "./entity-base";
import { Photo } from "./photo";
import { Profile } from "./profile";

export class PhotoAlbums extends EntityBase {
  description:string | undefined;
  creationDate: Date | undefined;
  profile!: Profile
  photos!:Photo[]
}
