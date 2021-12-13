import { EntityBase } from './entity-base';
import { Photo } from './photo';

export class Profile extends EntityBase {

  email:string | undefined;
  password : string | undefined;
  name: string | undefined;
  birthDate: string | undefined;
  profilePicture: Photo | undefined;
  zipCode: string | undefined;
  street: string | undefined;
  number: string | undefined;
  complement:string | undefined;
  city: string | undefined;
  state: string | undefined;

}
