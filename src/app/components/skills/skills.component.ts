import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../animations/slide-in.animation';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  animations: [routerTransition()],
 	host: { '[@routerTransition]': '' }
})
export class SkillsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
