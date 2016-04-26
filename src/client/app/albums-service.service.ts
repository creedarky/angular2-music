import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';



@Injectable()
export class AlbumsService {

  constructor(private http: Http) {}

  getAllAlbums() {
    return this.http
      .get('/api/albums')
      .map(res => res.json().albums);
  }

  getAlbum(id) {
    return this.http.get(`api/albums/${id}`)
      .map(res => res.json())
    
  }
}
