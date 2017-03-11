import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';

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

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.getnews()
      .then(res => {
        this.newsList = res;
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
}
