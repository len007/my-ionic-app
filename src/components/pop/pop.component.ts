import { Component, OnInit, Input, HostListener } from '@angular/core';
import { markParentViewsForCheck } from '@angular/core/src/view/util';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { ymkjData } from '../../models/data';

@Component({
  selector: 'app-pop',
  templateUrl: './pop.component.html',
  styleUrls: ['./pop.component.scss'],
  animations: [
    trigger('tip', [
      state('start', style({
        right: '-14rem',
      })),
      state('end', style({
        right: '8vw',
      })),
      transition('start=>end', animate('500ms ease-in')),
      transition('end=>start', animate('500ms ease-out'))
    ])
  ]
})
export class PopComponent implements OnInit {
  public _inputType = '';
  public ymkjData = ymkjData;
  constructor() {
    console.log(ymkjData);
  }
  @Input()
  set inputType(inputType: string) {
    this._inputType = inputType; //(inputType && inputType.trim()) || '<no name set>';
  }
  get inputType(): string { return this._inputType; }

  @Input() isShowMask: Input;
  ngOnInit() {
    console.log(this.inputType);
  }

}
