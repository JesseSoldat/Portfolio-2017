import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../animations/slide-in.animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  // animations: [routerTransition()],
 	// host: { '[@routerTransition]': '' }
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
