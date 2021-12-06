import { EntityBase } from "./entity-base";

export class Photo extends EntityBase {

  fileName!:string;
  binaryContent!:any;
  contentType!:string;
}
