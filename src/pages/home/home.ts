import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ReviewsPage } from '../reviews/reviews';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  search(ev) {
  	
  }

  navigateToReviews() {
  	this.navCtrl.push(ReviewsPage);
  }
}
