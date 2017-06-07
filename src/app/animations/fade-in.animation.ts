import {trigger, state, animate, style, transition} from '@angular/animations';


export const fadeInAnimation = 
	trigger('fadeInAnimation', [
			transition(':enter', [
					style({opacity: 0}),
					animate('.9s', style({opacity: 1}))
				]),
		]);




