import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	contactType: string = '';

  contact(contact: string) {
  	this.contactType = contact;
  }

  closeContact(event) {
  	this.contactType = '';
  }
}
