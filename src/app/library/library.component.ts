import { Component, OnInit } from '@angular/core';
import { Recommendation } from '../interfaces/recommendation';
import { RecommendationService } from '../_services/recommendation.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DislikeModalComponent } from '../_modals/dislike-modal/dislike-modal.component';
import { trigger, state, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss'],
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
export class LibraryComponent implements OnInit {

  recommendations: Recommendation[];
  searchTerm: string;

  constructor(private spinner: NgxSpinnerService,
    private recommendataionService: RecommendationService,
    private modalService: NgbModal) {
    this.recommendations = [];
    this.searchTerm = '';
  }

  ngOnInit() {
    this.spinner.show();

    this.recommendations = JSON.parse(localStorage.getItem('recommendations'));

    if (this.recommendations == null) {
      this.recommendataionService.getRecommendations().subscribe(recs => {
        this.recommendations = recs;
        this.spinner.hide();
      }, error => {
        this.spinner.hide();
      })
    } else {
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
      const index = this.recommendations.indexOf(r);
      this.recommendations.splice(index, 1);
      localStorage.setItem('recommendations', JSON.stringify(this.recommendations));
    });
  }

  dislike(r: Recommendation): void {
    const modalRef = this.modalService.open(DislikeModalComponent);
    modalRef.result.then(() => {
      this.recommendataionService.deleteRecommendation(r.id).subscribe(success => {
        const index = this.recommendations.indexOf(r);
        this.recommendations.splice(index, 1);
        localStorage.setItem('recommendations', JSON.stringify(this.recommendations));
      });
    });
  }

}
