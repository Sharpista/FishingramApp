import { EntityBase } from "./entity-base";
import { Photo } from "./photo";

export class Post extends EntityBase{
  publishDateTime!: Date;
  photo!: Photo;
  title!:string;
  description!:string;
}
