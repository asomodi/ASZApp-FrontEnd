import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { RecommendationService } from '../_services/recommendation.service';
import { Recommendation } from '../interfaces/recommendation';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DislikeModalComponent } from '../_modals/dislike-modal/dislike-modal.component';
import { SpotifyService } from '../_services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  recommendations: Recommendation[];
  recommendationsToDisplay: Recommendation[];
  index = 12;

  constructor(private spinner: NgxSpinnerService,
    private spotifyService: SpotifyService,
    private recommendataionService: RecommendationService,
    private modalService: NgbModal) {
    this.recommendations = []
    this.recommendationsToDisplay = [];
  }

  ngOnInit() {
    /** spinner starts on init */
    this.spinner.show();

    this.recommendations = JSON.parse(localStorage.getItem('recommendations'));

    if (this.recommendations == null) {
      this.recommendataionService.getRecommendations().subscribe(recs => {
        this.recommendations = recs;
        if (this.recommendations.length >= 12) {
          this.recommendationsToDisplay = this.recommendations.slice(0, 12);
        } else {
          this.recommendationsToDisplay = this.recommendations;
        }
        this.spinner.hide();
      }, error => {
        this.spinner.hide();
      })
    } else {
      if (this.recommendations.length >= 12) {
        this.recommendationsToDisplay = this.recommendations.slice(0, 12);
      } else {
        this.recommendationsToDisplay = this.recommendations;
      }
      this.spinner.hide();
    }


  }


  getImgAfterError(r: Recommendation): void {
    const url = r.img;
    r.img = null;
    r.img = url;
  }

  like(r: Recommendation): void {
    this.recommendataionService.likeRecommendation(r.id).subscribe(success => {
      const index = this.recommendationsToDisplay.indexOf(r);
      this.recommendationsToDisplay.splice(index, 1);
      if (this.index < this.recommendations.length) {
        this.recommendationsToDisplay.push(this.recommendations[this.index++]);
      }
      const indexToDelete = this.recommendations.indexOf(r);
      this.recommendations.splice(indexToDelete, 1);
      localStorage.setItem('recommendations', JSON.stringify(this.recommendations));
    });
  }

  dislike(r: Recommendation): void {
    const modalRef = this.modalService.open(DislikeModalComponent);
    modalRef.result.then(() => {
      this.recommendataionService.deleteRecommendation(r.id).subscribe(success => {
        const index = this.recommendationsToDisplay.indexOf(r);
        this.recommendationsToDisplay.splice(index, 1);
        if (this.index < this.recommendations.length) {
          this.recommendationsToDisplay.push(this.recommendations[this.index++]);
        }
        const indexToDelete = this.recommendations.indexOf(r);
        this.recommendations.splice(indexToDelete, 1);
        localStorage.setItem('recommendations', JSON.stringify(this.recommendations));
      });
    });
  }

  getTracks(): void {
    this.spotifyService.getSpotifyTracks().subscribe(succes => {
      console.log(succes);
    }, error => {
      this.spotifyService.getSpotifyAutorizationCode().subscribe(success2 => {
        //this.router.navigate([success2.uri]);
        window.location.href = success2.uri;
      });
    });
  }
}
