import { EntityBase } from "./entity-base";

export class Login extends EntityBase{
  email:string | undefined;
  password: string | undefined;
}
