import {Component, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router'
import {AlbumsService} from '../albums-service.service'

@Component({
  moduleId: __moduleName,
  selector: 'tracks-page',
  templateUrl: 'tracks-page.component.html',
  styleUrls: ['tracks-page.component.css'],
  providers: [AlbumsService]
})
export class TracksPageComponent implements OnInit {
  album: any;
  tracks: any;

  constructor(private _routeParams : RouteParams, private _albumsService : AlbumsService) {}
  
  ngOnInit() {
    let id = this._routeParams.get('id');
    this._albumsService.getAlbum(id)
      .subscribe(data => {
        console.log(data)
        this.album = data[0];
        this.tracks = data[1];
      })
  }

}
