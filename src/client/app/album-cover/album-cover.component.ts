import {Component, OnInit, Input} from 'angular2/core';
import {RouterLink} from 'angular2/router';

@Component({
  moduleId: __moduleName,
  selector: 'album-cover',
  templateUrl: 'album-cover.component.html',
  styleUrls: ['album-cover.component.css'],
  directives: [RouterLink],
  /** ways to define a property*/
  // properties: ['album'], <- this one will be deprecated
  // inputs: ['album'],
})

export class AlbumCoverComponent implements OnInit {

  @Input() album: any;
  
  constructor() {}

  ngOnInit() {
  }

  doClick() {
    this.album.name = `${this.album.name} clicked`;
  }

}

