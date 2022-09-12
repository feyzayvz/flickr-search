import { Component, OnInit } from '@angular/core';
import { FlickrService } from '../services/flickr.service';

@Component({
  selector: 'app-images-search',
  templateUrl: './images-search.component.html',
  styleUrls: ['./images-search.component.scss']
})
export class ImagesSearchComponent implements OnInit {
  images: any = [];
  keyword: string = "";
  showFlag: boolean = false;
  selectedImageIndex: number = -1;

  constructor(private flickrService: FlickrService) { }

  ngOnInit(): void { }

  search(event: any) {
    this.keyword = event.target.value.toLowerCase();
    if (this.keyword && this.keyword.length > 0) {
      this.flickrService.searchKeyword(this.keyword)
        .subscribe(res => {
          this.images = res;
        });
    } else if (this.keyword.length == 0) {
      this.images = [];
    }
  }

  onScroll() {
    if (this.keyword && this.keyword.length > 0) {
      this.flickrService.searchKeyword(this.keyword)
        .subscribe(res => {
          this.images = this.images.concat(res);
        });
    }
  }

  showLightbox(index: any) {
    this.selectedImageIndex = index;
    this.showFlag = true;
  }

  closeEventHandler() {
    this.showFlag = false;
    this.selectedImageIndex = -1;
  }

}
