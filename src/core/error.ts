import { Language } from './language';

export class ErrorMaster {

  private static ErrorNo: Object = {
    0: { cn: '网络异常', en: 'Network anomaly', mmr: 'Network anomaly' },
    100000: { cn: '服务器异常，请稍后再试', en: 'Server exception, please try again later', mmr: 'Server exception, please try again later' },
    // 100001: { cn: '缺少请求参数', en: '', mmr: '' },
    // 100002: { cn: '账户或密码有误', en: 'The account or password is incorrect', mmr: 'The account or password is incorrect' },
    100003: { cn: '账户或密码不正确', en: 'The account or password is incorrect', mmr: 'The account or password is incorrect' },
  };

  private constructor() {}

  /**
   * 根据错误码返回相应给用户提示的语句
   * @param error 
   */
  public static handleError(error: any): string {
    let lan = Language.getLanguage();
    let thisLan = lan.getLan();
    if (!error.hasOwnProperty('errno')) {
        if (error.hasOwnProperty('errstr')) {
            return error.errstr;
        }

        return ErrorMaster.ErrorNo[0][thisLan];
    }else{
       if (error.hasOwnProperty('data')) {
          return error.data;
      }
    }

    if (!ErrorMaster.ErrorNo.hasOwnProperty(error.errno)) {
        return error.errstr;
    }

    return ErrorMaster.ErrorNo[error.errno][thisLan];
  }
}