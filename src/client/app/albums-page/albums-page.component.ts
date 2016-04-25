import {Component, OnInit} from 'angular2/core';
import {HTTP_PROVIDERS, Http} from 'angular2/http';
import {AlbumCoverComponent} from '../album-cover/index'

@Component({
  moduleId: __moduleName,
  selector: 'albums-page',
  templateUrl: 'albums-page.component.html',
  styleUrls: ['albums-page.component.css'],
  providers: [HTTP_PROVIDERS],
  directives: [AlbumCoverComponent],
})
export class AlbumsPageComponent implements OnInit {
  albums: any;

  constructor(_http: Http) {
    //observable vs promises
    _http.get('api/albums').subscribe(response => {
      this.albums = response.json().albums
    })
  }

  ngOnInit() {
  }

}
