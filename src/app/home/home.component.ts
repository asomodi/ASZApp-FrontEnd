import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { RecommendationService } from '../_services/recommendation.service';
import { Recommendation } from '../interfaces/recommendation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  recommendations: Recommendation[];

  constructor(private spinner: NgxSpinnerService,
    private recommendataionService: RecommendationService) {
    this.recommendations = []
  }

  ngOnInit() {
    /** spinner starts on init */
    this.spinner.show();

    this.recommendataionService.getRecommendations().subscribe(recs => {
      this.recommendations = recs;
      this.spinner.hide();
  }, error=>{
      this.spinner.hide();
  })

  }

}
