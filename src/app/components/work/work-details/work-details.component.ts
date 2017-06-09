import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-work-details',
  templateUrl: './work-details.component.html',
  styleUrls: ['./work-details.component.css']
})
export class WorkDetailsComponent implements OnInit {
	projects: object;
	project;


  constructor(private route: ActivatedRoute) {
  	this.projects = {
  		"five-words": {
  			"title": "Five Words",
  			"img": "fivewords.JPG",
  			"url": "http://five-words.surge.sh",
        "github": "https://github.com/5-Words",
  			"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  		},
  		"around-world": {
  			"title": "Around the World",
  			"img": "aroundworld.jpg",
  			"url": "http://lonely-opinion.surge.sh",
        "github": "https://github.com/JesseSoldat/Around-The-World-NG2-Firebase",
  			"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  		},
  		"movie-buddy": {
  			"title": "Movie Buddy",
  			"img": "fivewords.JPG",
  			"url": "http://five-words.surge.sh",
        "github": "https://github.com/JesseSoldat/Movie-Buddy-NG4---Firebase",
  			"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  		}
  	}

  }

  ngOnInit() {
  	this.route.params.subscribe((params) => {
  		let project = params['id'];
  		this.project = this.projects[project];
  		console.log(this.project);
  	})
  }

}

