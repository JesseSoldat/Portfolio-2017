import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
	contactType: string = '';

  constructor(public router: Router) {}

  ngOnInit() {
     this.router.events.filter(event => event instanceof NavigationEnd).subscribe(() => {
      window.scrollTo(0, 0);
    });
  }

  contact(contact: string) {
  	this.contactType = contact;
  }

  closeContact(event) {
  	this.contactType = '';
  }


}
