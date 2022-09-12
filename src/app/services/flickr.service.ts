import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { FlickrPhoto } from '../interfaces/flickr-photo.interface';

@Injectable({
  providedIn: 'root'
})
export class FlickrService {
  currPage = 1;
  prevKeyword: string = "";

  constructor(private http: HttpClient) { }

  searchKeyword(keyword: string) {
    if (this.prevKeyword === keyword) {
      this.currPage++;
    } else {
      this.currPage = 1;
    }
    this.prevKeyword = keyword;
    const url = 'https://www.flickr.com/services/rest/?method=flickr.photos.search&';
    const params = `api_key=${environment.flickr.key}&text=${keyword}&format=json&nojsoncallback=1&per_page=12&page=${this.currPage}`;

    return this.http.get(url + params).pipe(map((res: any) => {
      const photoArr: Array<FlickrPhoto> = [];
      res.photos.photo.forEach((ph: any) => {
        if (ph.ispublic) {
          const photoObj: FlickrPhoto = {
            image: `https://farm${ph.farm}.staticflickr.com/${ph.server}/${ph.id}_${ph.secret}_b.jpg`,
            thumbImage: `https://farm${ph.farm}.staticflickr.com/${ph.server}/${ph.id}_${ph.secret}_b.jpg`,
            title: ph.title,
            id: ph.id,
            owner: ph.owner
          };
          photoArr.push(photoObj);
        }
      });
      return photoArr;
    }));
  }

}
