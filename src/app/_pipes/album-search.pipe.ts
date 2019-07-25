import { Pipe, PipeTransform } from '@angular/core';
import { Recommendation } from '../interfaces/recommendation';

@Pipe({
  name: 'albumSearch'
})
export class AlbumSearchPipe implements PipeTransform {

  transform(recommendation: Recommendation[], searchTerm: string): Recommendation[] {
    return searchTerm === '' ? recommendation : recommendation.filter(r => r.artist.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()));
  }

}
