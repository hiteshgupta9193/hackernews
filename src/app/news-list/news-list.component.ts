import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';
import 'underscore/underscore.js';
declare let _: any;
@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {

  newsList: Object[];
  maxSize: number;
  bigTotalItems: number;
  bigCurrentPage: number;
  itemsOnPage: number;
  sortParam: string;
  sortOrder = false;

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.getnews()
      .then(res => {
        this.newsList = res;
        debugger
        this.bigTotalItems = res.length;
      });
    this.maxSize = 5;
    this.bigTotalItems = 10;
    this.bigCurrentPage = 1;
    this.itemsOnPage = 10;
  }

  newsPerPageChanged(num) {
    if (num === -1) {
      this.itemsOnPage = this.newsList.length;
    } else {
      this.itemsOnPage = num;
    }
  }

  increasePoints(news) {
    news.num_points += 1;
    this.sortBy(this.sortParam, this.sortOrder, false);
  }

  sortBy(param, desc, updateCurrentPage) {
    this.sortParam = param;
    this.sortOrder = desc;
    this.newsList = _.sortBy(this.newsList, param);
    if (desc) {
      this.newsList = this.newsList.reverse();
    }
    if (updateCurrentPage) {
      this.bigCurrentPage = 1;
    }
  }
}
