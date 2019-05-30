import { Injectable } from '@angular/core';
import { Http, RequestOptionsArgs, Headers } from '@angular/http';
import { ErrorMaster } from '../core/error';
import { Language } from '../core/language';
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

  constructor(public http: Http) {}


  public _get(url: string, params?: Object, options?: RequestOptionsArgs): Promise<any> {
    let paramsStr: string = '';

    if (params != undefined) {
      for (let i in params) {
        paramsStr += i + '=' + params[i];
        paramsStr += '&';
      }

      paramsStr = paramsStr.replace(/&$/, '');
    }

    let fullUrl = paramsStr == '' ? url : url + '?' + paramsStr;

    return this.http.get(fullUrl, options)
      .toPromise()
      .then(response => response.json());
  }

  protected _post(url: string, params?: Object, options?: RequestOptionsArgs): Promise<any> {
    return this.http.post(url, JSON.stringify(params), options)
      .toPromise()
      .then(response => response.json());
  }

  public get(apiUri: string, params?: Object): Promise<any> {
    return new Promise((resolve, reject) => {
      let header: Headers = new Headers({ 'Content-Type': 'application/json' });
      let token = window.localStorage.getItem('token');
      header.append('Authorization', 'Bearer ' + token);
      this._get(ROOT_URL + apiUri, params, { headers: header })
        .then(res => {
          if (res.status == 1) {
            if (res.hasOwnProperty('data')) {
              resolve(res.data);
            } else {
              resolve(res);
            }
          } else {
            // 进行错误处理
            //reject(ErrorMaster.handleError(res));
          }
        })
        .catch(err => {
          // 进行错误处理
          //reject(ErrorMaster.handleError(err));
        });
    });
  }

  public post(apiUri: string, params?: Object): Promise<any> {
    return new Promise((resolve, reject) => {
      let header: Headers = new Headers({ 'Content-Type': 'application/json' });

      this._post(ROOT_URL + apiUri, params, { headers: header })
        .then(res => {
          console.log(" ==========post======== ", res);
          if (res.status == 1) {
            if (res.hasOwnProperty('data')) {
              resolve(res.data);
            } else {
              resolve(res);
            }
          } else {
            // 进行错误处理
            reject(ErrorMaster.handleError(res));
          }
        })
        .catch(err => {
          // 进行错误处理
          reject(ErrorMaster.handleError(err));
        });
    });
  }
}
