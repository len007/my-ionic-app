import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  public flag = 'home'
  constructor() {}
  change(event){
    this.flag = event.detail.tab;
    console.log(this.flag);
  }

}
