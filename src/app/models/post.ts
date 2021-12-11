import { EntityBase } from "./entity-base";
import { Photo } from "./photo";

export class Post extends EntityBase{
  publishDateTime: Date | undefined;
  photo: Photo | undefined;
  title:string | undefined;
  description:string | undefined;
}
