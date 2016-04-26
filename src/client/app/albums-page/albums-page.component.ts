import {Component, OnInit} from 'angular2/core';
import {HTTP_PROVIDERS, Http} from 'angular2/http';
import {AlbumCoverComponent} from '../album-cover/index'
import {AlbumsService} from '../albums-service.service'

@Component({
  moduleId: __moduleName,
  selector: 'albums-page',
  templateUrl: 'albums-page.component.html',
  styleUrls: ['albums-page.component.css'],
  providers: [HTTP_PROVIDERS, AlbumsService],
  directives: [AlbumCoverComponent],
})
export class AlbumsPageComponent implements OnInit {
  albums: any;

  constructor(private _albumsService: AlbumsService) {
    //observable vs promises
    _albumsService.getAllAlbums().subscribe(albums => {
      this.albums = albums
    });
  }

  ngOnInit() {
  }

}
