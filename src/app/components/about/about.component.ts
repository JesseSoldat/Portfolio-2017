import { Component, OnInit } from '@angular/core';

declare let jQuery: any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
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
