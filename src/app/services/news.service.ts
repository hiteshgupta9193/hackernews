import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class NewsService {

  private newsUrl = 'http://starlord.hackerearth.com/edfora/hackernews';

  newsList: Object[];

  constructor(public http: Http) { }

  getnews() {
    if (this.newsList && this.newsList.length > 0) {
      return Promise.resolve(this.newsList);
    }

    let newsProimse = this.http.get(this.newsUrl).toPromise();

    let newsArr = new Promise((resolve, reject) => {
      newsProimse.then((res) => {
        this.newsList = res.json();
        resolve(this.newsList);
      })
        .catch((error) => {
          console.log('error getting courses list', error);
          reject(error);
        });
    });

    return newsArr;
  }

}
