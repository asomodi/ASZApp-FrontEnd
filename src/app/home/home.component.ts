import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { RecommendationService } from '../_services/recommendation.service';
import { Recommendation } from '../interfaces/recommendation';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DislikeModalComponent } from '../_modals/dislike-modal/dislike-modal.component';
import { SpotifyService } from '../_services/spotify.service';
import { AlbumModalComponent } from '../_modals/album-modal/album-modal.component';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('itemState', [
      state('visible', style({ 'opacity': '1' })),
      transition('void => *', [
        style({ 'opacity': '0' }),
        animate('0.5s ease-out')
      ]),
      transition('* => void', [
        animate(200, style({ opacity: 0 }))
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {

  recommendations: Recommendation[];
  recommendationsToDisplay: Recommendation[];
  index = 12;
  added = false;
  notFound = false;

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
        for (let i = 0; i < this.recommendations.length; i++) {
          this.recommendations[i].added = false;;
        }
      }, error => {
        this.spinner.hide();
      })
    } else {
      if (this.recommendations.length >= 12) {
        this.recommendationsToDisplay = this.recommendations.slice(0, 12);
      } else {
        this.recommendationsToDisplay = this.recommendations;
      }
      for (let i = 0; i < this.recommendations.length; i++) {
        this.recommendations[i].added = false;;
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
    r.spinner = true;
    this.recommendataionService.likeRecommendation(r.id).subscribe(success => {
      r.spinner = false;
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

  openAlbumModal(r: Recommendation): void {
    const modalRef = this.modalService.open(AlbumModalComponent, { centered: true, size: 'lg' });
    modalRef.componentInstance.recommendation = Object.assign({}, r);
    modalRef.result.then(() => { }).catch(() => {});
  }

  dislike(r: Recommendation): void {

    const modalRef = this.modalService.open(DislikeModalComponent);
    modalRef.result.then(() => {
      r.spinner = true;
      this.recommendataionService.deleteRecommendation(r.id).subscribe(success => {
        r.spinner = false;
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

  addToSpotify(r: Recommendation): void {
    sessionStorage.setItem('currentAlbum', JSON.stringify(r));
    this.spotifyService.addToPlaylist(r.artist, r.name).subscribe(success => {
      r.added = true;
    }, error => {
      if (error.code === 404) {
        this.notFound = true;
        window.scrollTo(0, 0);
        setTimeout(() => {
          this.notFound = false;
        }, 5000);
        return;
      }
      this.spotifyService.getSpotifyAutorizationCode().subscribe(success2 => {
        //this.router.navigate([success2.uri]);
        window.location.href = success2.uri;
      });
    });
  }
}
