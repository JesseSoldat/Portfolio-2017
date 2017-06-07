import { Component } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('focusPanel', [
        state('inactive', style({
            transform: 'scale(0)',
            backgroundColor: '#eee'
        })),
        state('active', style({
            transform: 'scale(1.1)',
            backgroundColor: '#cfd8dc',
            borderRadius: '5px',
            border: '1px solid black',
            boxShadow: '10px 10px 15px black'
        })),
        transition('inactive => active', animate('1000ms ease-in')),
        transition('active => inactive', animate('1000ms ease-out'))
    ]),
    trigger('myAwesomeAnimation', [
        state('small', style({
            transform: 'scale(1)',
        })),
        state('large', style({
            transform: 'scale(1.9)',
        })),
        // transition('small <=> large', animate('1000ms ease-in')),
    //     transition('small <=> large', animate('1500ms linear', style({
    //       transform: 'translateY(200px)'
    //     }))),
    // 
      transition('small <=> large', animate('1500ms linear', keyframes([
        style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
        style({opacity: 1, transform: 'translateY(35px)',  offset: 0.5}),
        style({opacity: 1, transform: 'translateY(0)',     offset: 1.0})
      ]))),
    ]),
   ]
})
export class AppComponent {
	contactType: string = '';

  // state: string = 'inactive';
  state: string = 'small';


  contact(contact: string) {
  	this.contactType = contact;
  }

  closeContact(event) {
  	this.contactType = '';
  }

  toggleMove() {
    // this.state = (this.state === 'inactive' ? 'active' : 'inactive');
  }

  animateMe() {
    this.state = (this.state === 'small' ? 'large' : 'small');
  }
}
