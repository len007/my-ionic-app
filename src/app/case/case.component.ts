import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { caseData } from '../../models/case';
import { Renderer2 } from '@angular/core';

@Component({
  selector: 'app-case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.scss'],
})
export class CaseComponent implements OnInit {
  public caseData = caseData;
  constructor(private title: Title) { }
  figure;
  unit = 160;
  registeredBoxes = [];
  slidePosX = 0;
  slidePosY = 0;
  Box = function (posX, posY, img) {
    this.pos = {};
    this.pos.X = posX;
    this.pos.Y = posY;
    this.img = img;
    this.init();
  };
  ngOnInit() {
    this.title.setTitle('案例');
    this.figure = document.getElementById('multiSlide');
    console.log(this.figure);
    let _this = this;
    this.Box.prototype = {
      init: function () {
        this.DOMElement = document.createElement('div');
        console.log(this.DOMElement);
        this.DOMElement.className = 'box';
        this.DOMElement.style.left = (this.pos.X * this.unit) - this.unit + 'px';
        this.DOMElement.style.top = (this.pos.Y * this.unit) - this.unit + 'px';
        this.DOMElement.setAttribute('data-pos', this.pos.X.toString() + this.pos.Y.toString());

        let img = document.createElement('img');
        img.src = this.img;

        this.DOMElement.appendChild(img);
        _this.figure.appendChild(this.DOMElement);
        console.log(_this.figure);
        _this.registeredBoxes.push(this);
      },
      setPosition: function (axis, val) {
        this.pos[axis] = val;
        if (axis == 'X') {
          this.DOMElement.style.left = (this.pos[axis] * _this.unit) - _this.unit + 'px';
        } else if (axis == 'Y') {
          this.DOMElement.style.top = (this.pos[axis] * _this.unit) - _this.unit + 'px';
        }
        this.DOMElement.setAttribute('data-pos', this.pos.X.toString() + this.pos.Y.toString());
      }
    }
    new this.Box(1, 2, caseData[0].imgs[0]);
    new this.Box(2, 2, caseData[0].imgs[1]);
    new this.Box(3, 2, caseData[0].imgs[2]);
  }
  testtt(hy) {
    if (hy == 'left') {
      if (this.slidePosX > -3) {
        this.slide('X', -1);
      }
    }
    else {
      if (this.slidePosX < 4) {
        this.slide('X', 1);
      }
    }
  }
  slide(axis, dir) {
    console.log(axis, dir);
    let len = this.registeredBoxes.length;
    for (let i = 0; i < len; i++) {
      if (this.registeredBoxes[i].pos['Y'] == '2') {
        this.registeredBoxes[i].setPosition(axis, this.registeredBoxes[i].pos['X'] + (1 * dir));
      }
    }
    this.slidePosX = this.slidePosX + dir;

  }
}
