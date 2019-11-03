import { Component, OnInit } from '@angular/core';
import { subjects } from '../subjects';

@Component({
  selector: 'app-listsubject',
  templateUrl: './listsubject.component.html',
  styleUrls: ['./listsubject.component.scss']
})
export class ListsubjectComponent implements OnInit {
  pageOfItems: Array<any>;
  config: any;
  constructor() { 
    this.config = {
      itemsPerPage: 6,
      currentPage: 1,
      totalItems: this.listSubjects.length
    };
  }
  searchText
  listSubjects=[]
  ngOnInit() {
    this.listSubjects=[...subjects]
  }
  pageChanged(event){
    this.config.currentPage = event;
  }

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
}

}
