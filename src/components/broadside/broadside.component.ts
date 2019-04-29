import { Component, OnInit, HostListener, } from '@angular/core';

@Component({
  selector: 'app-broadside',
  templateUrl: './broadside.component.html',
  styleUrls: ['./broadside.component.scss']
})
export class BroadsideComponent implements OnInit {
  public inputType = 'null';
  public isShowMask = false;

  constructor() { }
  ngOnInit() { }
  showTooltip(tmp) {  // hover事件
    if (!this.isShowMask) {
      this.inputType = tmp;
    }
  }
  hideTooltip() {     // leave事件
    if (!this.isShowMask) {
      this.inputType = 'null';
    }
  }
  showMask(t) {  // 点击打开
    if (t === this.inputType && this.isShowMask) {
      this.isShowMask = false;
      this.inputType = 'null';
    } else if (t === this.inputType) {
      this.inputType = t;
      this.isShowMask = true;
    } else {
      this.inputType = t;
    }
  }
  hideMask() {    // 点击关闭
    this.isShowMask = false;
    this.inputType = 'null';
  }
}
