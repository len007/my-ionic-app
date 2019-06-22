import { Injectable } from '@angular/core';
import { USER_INFO_API, ROOT_URL, MOCK_URL } from '../values/api';

/*
  Generated class for the BaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class BaseService {

  protected token: string;
  public loginToken;
  protected overdueTime: number;
  // identity: Identity;
  protected uuid: string = "";
  public lan;
  public install_id;
  public os;

  constructor( ) { }
}
