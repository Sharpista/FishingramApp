import { EntityBase } from "./entity-base";

export class Photo extends EntityBase {

  fileName!:string;
  binaryContent!:File;
  contentType!:string;
}
