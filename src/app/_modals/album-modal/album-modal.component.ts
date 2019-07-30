import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Recommendation } from 'src/app/interfaces/recommendation';
import { SpotifyService } from 'src/app/_services/spotify.service';
import { Track } from 'src/app/interfaces/track';

@Component({
  selector: 'app-album-modal',
  templateUrl: './album-modal.component.html',
  styleUrls: ['./album-modal.component.scss']
})
export class AlbumModalComponent implements OnInit {

  @Input()
  recommendation: Recommendation;

  tracks: Track[];
  noTracks = false;
  loaded = false;

  constructor(public activeModal: NgbActiveModal, private spotifyService: SpotifyService) { }

  ngOnInit() {
    this.spotifyService.getAlbumTracks(this.recommendation.artist, this.recommendation.name).subscribe(
      success => {
        this.loaded = true;
        this.tracks = success;
      },
      error => {
        this.loaded = true;
        if (error.code === 404) {
          this.noTracks = true;
          return;
        }
        this.spotifyService.getSpotifyAutorizationCode().subscribe(success2 => {
          window.location.href = success2.uri;
        });
      }

    );
  }

}
