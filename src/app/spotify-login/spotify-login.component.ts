import { Component, OnInit } from '@angular/core';
import { RecommendationService } from '../_services/recommendation.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-spotify-login',
  templateUrl: './spotify-login.component.html',
  styleUrls: ['./spotify-login.component.scss']
})
export class SpotifyLoginComponent implements OnInit {

  constructor(private recommendataionService: RecommendationService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const code = this.route.snapshot.queryParamMap.get('code');
    console.log(code);
    this.recommendataionService.sendSpotifyCode(code).subscribe(success=>{
        this.router.navigate(['/home']);
    });

  }

}
