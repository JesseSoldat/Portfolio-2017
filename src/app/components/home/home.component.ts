import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	toggleImg: string = 'jessePic';
	toggleMsg: string = 'Show Code';

  constructor() { }

  ngOnInit() {
  }
  onToggleImg() {
  	this.toggleImg = this.toggleImg === 'jesseCode' ? 'jessePic' : 'jesseCode';
  	this.toggleMsg = this.toggleMsg === 'Show Code' ? 'show Picture' : 'Show Code';
  }

}
