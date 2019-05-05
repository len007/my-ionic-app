import { Component, OnInit, HostListener, } from '@angular/core';
import { ymkjData } from '../../models/data';

@Component({
  selector: 'app-broadside',
  templateUrl: './broadside.component.html',
  styleUrls: ['./broadside.component.scss']
})
export class BroadsideComponent implements OnInit {
  public ymkjData = ymkjData;

  public tipVisible1 = false;
  public tipVisible2 = false;
  public tipVisible3 = false;
  public tipVisible4 = false;
  public inputType = '';

  constructor() { }
  ngOnInit() { }
}
