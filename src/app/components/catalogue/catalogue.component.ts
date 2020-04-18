import { Component, OnInit } from '@angular/core';
import { list } from '../../model/list';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss']
})
export class CatalogueComponent implements OnInit {
  list = [...list];
  pageOfItems: Array<any>;
  config;
  searchText;
  constructor(private title : Title) {
    this.config = {
      itemsPerPage: 6,
      currentPage: 1,
      totalItems: this.list.length
    };

    this.title.setTitle('Exam');
  
   }

  ngOnInit() {
  }
  pageChanged(event){
    this.config.currentPage = event;
  }

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
}

}
