import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../animations/slide-in.animation';


@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css'],
  animations: [routerTransition()],
 	host: { '[@routerTransition]': '' }
})
export class WorkComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
