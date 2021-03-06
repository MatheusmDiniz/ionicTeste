import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
/*
  Generated class for the MoovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MoovieProvider {
private basiApiPath = "https://api.themoviedb.org/3"
  constructor(public http: Http) {
    console.log('Hello MoovieProvider Provider');
  }

    getLatesMovies(){
      return this.http.get(this.basiApiPath + "/movie/popular?api_key=d8b39ba768713a3d4f468904217ace71");
    }
}
