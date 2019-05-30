export class Language {

  private static instance: Language = null;               // 唯一实例
  private static STORAGE_NAME: string = 'LANGUAGE';       // 储存字段名

  private lan: Object;            // 语言翻译数据
  private thisLan: string;        // 当前语言
  private isLoad: boolean = false;

  private constructor(base?: any) {
    base._get('assets/language/language.json')
        .then(res => {
            this.lan = res;
            this.isLoad = true;
        }).then (
        )
        .catch(err => {
            console.log(err);
        });

    this.thisLan = window.localStorage.getItem(Language.STORAGE_NAME) || 'en';
  }

  /**
   * 获取语言类实例
   */
  public static getLanguage(base?: any) {
    if (Language.instance == null) {
      Language.instance = new Language(base);
    }
    return Language.instance;
  }

  /**
   * 设置当前语言
   * @param lan 
   */
  public setLan(lan: string) {
    this.thisLan = lan;
    window.localStorage.setItem(Language.STORAGE_NAME, lan);
  }

  /**
   * 获取当前语言
   */
  public getLan() {
    return this.thisLan;
  }

  /**
   * 获取当前语言的翻译
   * @param value 
   */
    public getTrans(value: string) {
        if (!this.isLoad) {
            return value;
        }
        
        if (!this.lan.hasOwnProperty(value)) {
            return value;
        }

        if (!this.lan[value].hasOwnProperty(this.thisLan)) {
            // 没有当前语言翻译
            if (this.lan[value].hasOwnProperty('en')) {
            return this.lan[value]['en'];
            }

            if (this.lan[value].hasOwnProperty('cn')) {
            return this.lan[value]['cn'];
            }
            return value;
        }

        return this.lan[value][this.thisLan];
    }
} 