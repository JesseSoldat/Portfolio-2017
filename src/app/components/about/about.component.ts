import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../animations/slide-in.animation';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [routerTransition()],
 	host: { '[@routerTransition]': '' }

})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
