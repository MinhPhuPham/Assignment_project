import { Component, OnInit } from '@angular/core';
import { list } from '../../model/list';
import { Title } from '@angular/platform-browser';

import { OrderPipe } from 'ngx-order-pipe';
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
  reverse: boolean = false;
  sortedList: any[];
  order: string = 'Name';
  constructor(private title : Title, private orderPipe: OrderPipe) {
    this.config = {
      itemsPerPage: 6,
      currentPage: 1,
      totalItems: this.list.length
    };

    this.title.setTitle('Exam');

    // this.sortedList = orderPipe.transform(this.list, 'Name');
  console.log(this.sortedList);
  
   }

   setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }

    this.order = value;
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
