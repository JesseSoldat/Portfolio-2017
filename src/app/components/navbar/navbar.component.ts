import { Component, OnInit, Output, EventEmitter } from '@angular/core';
declare let jQuery: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
	@Output() contact = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {

   jQuery(function(){ 
     var navMain = jQuery(".navbar-collapse"); // avoid dependency on #id
     // "a:not([data-toggle])" - to avoid issues caused
     // when you have dropdown inside navbar
     navMain.on("click", "a:not([data-toggle])", null, function () {
         navMain.collapse('hide');
     });
   });
  

  }

  onContact(type: string) {
  	if(type === 'email') {
  		this.contact.emit('email');
  	}
  	if(type === 'phone') {
  		this.contact.emit('phone');
  	}
  }

}
