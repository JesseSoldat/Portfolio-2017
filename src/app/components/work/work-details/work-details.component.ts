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
  			"description": "Five Words is an app for finding friends based on your most import words."
  		},
  		"around-world": {
  			"title": "Around the World",
  			"img": "aroundworld.jpg",
  			"url": "http://lonely-opinion.surge.sh",
        "github": "https://github.com/JesseSoldat/Around-The-World-NG2-Firebase",
  			"description": "Around the world lets you map the places you lived or traveled to and find new friends by searching for others that share these special places."
  		},
  		"movie-buddy": {
  			"title": "Movie Buddy",
  			"img": "fivewords.JPG",
  			"url": "http://five-words.surge.sh",
        "github": "https://github.com/JesseSoldat/Movie-Buddy-NG4---Firebase",
  			"description": "Have you ever had a hard time finding a good movie? Movie Buddy is an app that lets you build a list of your favorite movies and explore other user's lists of movies and easily select"
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

