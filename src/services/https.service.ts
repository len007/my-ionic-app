import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { retry, map, catchError } from "rxjs/operators";
import { USER_INFO_API, ROOT_URL, MOCK_URL } from '../values/api';
import { NavController } from '@ionic/angular';
/*
  Generated class for the BaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class HttpsService {

  protected token: string;
  public loginToken;
  protected overdueTime: number;
  // identity: Identity;
  protected uuid: string = "";
  public lan;
  public install_id;
  public os;

  constructor(
    public http: HttpClient,
    public nav: NavController
  ) { }

  /**
   * 错误处理
   *
   * @private
   * @param {HttpErrorResponse} error
   * @returns
   * @memberof myhttpClientService
   */
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // 客户端或者网络错误.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

  public get(apiUri: string, params?: HttpParams): Observable<any> {
    let header: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded', 'Access-Control-Allow-Origin': '*' });
    
    let token = window.localStorage.getItem('token'); // 获取登录态
    params['api_token'] = token;

    return this.http.get(ROOT_URL + apiUri, { headers: header, params: params }).pipe(
      retry(2),
      map((res: Response) => { return res }),
      catchError(this.handleError));
  }

  public post(apiUri: string, params?: Object): Observable<any> {
    let header: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded', 'Access-Control-Allow-Origin': '*' });
    
    let token = window.localStorage.getItem('token'); // 获取登录态
    params['api_token'] = token;

    return this.http.post(ROOT_URL + apiUri, { headers: header, params: params }).pipe(
      retry(0),
      map((res: Response) => { return res }),
      catchError(this.handleError));
  }

  public authGet(apiUri: string, params?: HttpParams): Observable<any> {
    let header: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded', 'Access-Control-Allow-Origin': '*' });
    let token = window.localStorage.getItem('token'); // 获取登录态
    if (token) {
      return this.http.get(ROOT_URL + apiUri, { headers: header, params: params }).pipe(
        retry(2),
        map((res: Response) => { return res }),
        catchError(this.handleError));
    } else {  // 未登录
      this.nav.navigateRoot('/login');
    }
  }

  public authPost(apiUri: string, params?: Object): Observable<any> {
    let header: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded', 'Access-Control-Allow-Origin': '*' });
    let token = window.localStorage.getItem('token'); // 获取登录态
    if (token) {
      return this.http.post(ROOT_URL + apiUri, { headers: header, params: params }).pipe(
        retry(0),
        map((res: Response) => { return res }),
        catchError(this.handleError));
    } else {  // 未登录
      this.nav.navigateRoot('/login');
    }
  }
}