import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../animations/slide-in.animation';

declare let jQuery: any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  // animations: [routerTransition()],
 	// host: { '[@routerTransition]': '' }
})
export class AboutComponent implements OnInit {
	state: string = 'active';
  constructor() { }

  ngOnInit() {
  }

  changeBackground(img: string) {
  	if(img === 'iowa') {
			jQuery('#aboutImgWrapper').css("background-image", "url(../../../assets/iowa.jpg)");  	 
  	}
  	if(img === 'hawaii') {
			jQuery('#aboutImgWrapper').css("background-image", "url(../../../assets/hawaii1.jpg)");
  	}
  	if(img === 'thailand') {
			jQuery('#aboutImgWrapper').css("background-image", "url(../../../assets/thailand.jpg)");  	 
  	}
  	if(img === 'atlanta') {
			jQuery('#aboutImgWrapper').css("background-image", "url(../../../assets/atlanta.jpg)");  	 
  	}
  }




}
