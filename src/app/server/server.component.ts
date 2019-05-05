import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { serverData } from '../../models/server';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent implements OnInit {
  public serverData = serverData;
  constructor(private title: Title) { }

  ngOnInit() {
    this.title.setTitle('服务支持');
    console.log(this.serverData);
  }
}
