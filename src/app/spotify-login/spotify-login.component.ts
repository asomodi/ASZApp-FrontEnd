import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpotifyService } from '../_services/spotify.service';

@Component({
  selector: 'app-spotify-login',
  templateUrl: './spotify-login.component.html',
  styleUrls: ['./spotify-login.component.scss']
})
export class SpotifyLoginComponent implements OnInit {

  constructor(private spotifyService: SpotifyService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const code = this.route.snapshot.queryParamMap.get('code');
    this.spotifyService.sendSpotifyCode(code).subscribe(success=>{
        this.router.navigate(['/home']);
    });

  }

}
