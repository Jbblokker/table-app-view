import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-table-component',
  templateUrl: './table-component.component.html',
  styleUrls: ['./table-component.component.scss']
})
export class TableComponentComponent implements OnInit {

  //These properties are to hide or to show features in the html page
  isPaginated: boolean = true;
  isCheckable: boolean = true;
  
  
  //pagination properties
  currentPage!: number;
  pageSize!: number;

  //User can change header names in this array
  columnHeaders: Array<any> = [
    '',
    'id',
    'First Name',
    'Last Name',
    'Age',
    'Full name'
  ];

  //property for the user data 
  userData: Array<any> = [
    {
      id:'3',
      name:'John',
      last:'Doe',
      age:'32',
      full:'John Doe'
    },
    {
      id:'4',
      name:'Jane',
      last:'Doe',
      age:'33',
      full:'Jane Doe'
    },
    {
      id:'5',
      name:'Jim',
      last:'Bob',
      age:'35',
      full:'Jim Bob'
    },
    {
      id:'6',
      name:'Sally',
      last:'Sue',
      age:'30',
      full:'Sally Sue'
    },    
  ];
  
  constructor(
  //  private client:HttpClient,
  ){}

  ngOnInit(): void {
    // this.client.get('add json file that you are getting information from').subscribe(userData => {
    //   console.log(userData);
    // })
    
    // You can set values for pagination how you like
    this.currentPage = 1 
    this.pageSize = 10
  }

  numberOfPages() {
    return Math.ceil(this.userData.length / this.pageSize);
  }

  get result() {
    return this.userData.filter(item => item.checked);
  }


}
