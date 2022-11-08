import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSelectChange } from '@angular/material/select';
import { MatSort } from '@angular/material/sort';

import { MatTableDataSource } from '@angular/material/table';


export interface Employee {
  id : number,	
  firstname:string,	
  lastname:string,	
  email:string,
  gender:string, 
  jobtitle:string,
  department:string
}


export interface EmpFilter {
  name:string;
  options:string[];
  defaultValue:string;
}

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})


export class TablesComponent implements OnInit {

   EmployeeData: Employee[] = [
    { id:1, firstname:"ken", lastname:"brown",email:"ken@gmail.com",gender:"Male",jobtitle:'Software Engineer',department:'Engineering'},
    { id:2, firstname:"mutua", lastname:"kamwaki",email:"kamwaki@gmail.com",gender:"Male",jobtitle:'Senior officer',department:'Engineering'},
    { id:3, firstname:"alice", lastname:"Mawia",email:"mawia@gmail.com",gender:"Female",jobtitle:'Project Manager ',department:'finance'},
    { id:4, firstname:"larry", lastname:"kativu",email:"larry@gmail.com",gender:"Male",jobtitle:'Software Engineer',department:'Engineering'},
    { id:5, firstname:"taa", lastname:"makaa",email:"taa@gmail.com",gender:"Female",jobtitle:'Senior officer',department:'Marketing'},
    { id:6, firstname:"bruno", lastname:"mugabi",email:"mugabi@gmail.com",gender:"Male",jobtitle:'Software Engineer',department:'Engineering'},
    { id:7, firstname:"lawrence", lastname:"musyoka",email:"musyoka@gmail.com",gender:"Male",jobtitle:'Senior officer',department:'management'},
    { id:8, firstname:"muthomi", lastname:"njue",email:"jue@gmail.com",gender:"Male",jobtitle:'Software Engineer',department:'Engineering'},
    { id:9, firstname:"ann", lastname:"ngure",email:"ngure@gmail.com",gender:"Female",jobtitle:'Software Engineer',department:'Human Resource'},
    { id:10, firstname:"muli", lastname:"francis",email:"muli@gmail.com",gender:"Male",jobtitle:'Software Engineer',department:'Marketing'},
    { id:11, firstname:"ndonye", lastname:"francis",email:"ndonye@gmail.com",gender:"Male",jobtitle:'Project Manager',department:'finance'},
    { id:12, firstname:"muinde", lastname:"mwangangi",email:"mwangangi@gmail.com",gender:"Male",jobtitle:'Software Engineer',department:'Engineering'},
    { id:13, firstname:"essie", lastname:"david",email:"essie@gmail.com",gender:"Female",jobtitle:'Senior officer',department:'Marketing'},
    { id:14, firstname:"katumbi", lastname:"rose",email:"katumbi@gmail.com",gender:"Female",jobtitle:'Software Engineer',department:'Human Resource'},
    { id:15, firstname:"jose", lastname:"kamwea",email:"kamwea@gmail.com",gender:"Male",jobtitle:'Software Engineer',department:'welfare'},
    { id:16, firstname:"chazima", lastname:"ken",email:"chazima@gmail.com",gender:"Male",jobtitle:'Software Engineer',department:'Engineering'},
    { id:17, firstname:"duke", lastname:"Hosea",email:"hosea@gmail.com",gender:"Male",jobtitle:'Software Engineer',department:'Engineering'},
  
                
  ];
  displayedColumns: string[] = ['id', 'firstname', 'lastname', 'email','gender', 'jobtitle','department'];
  
  dataSource = new MatTableDataSource(this.EmployeeData)

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  filter!:string

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event:Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

   // MatPaginator Inputs
   length = this.EmployeeData.length;
   pageSize = 5;
   pageSizeOptions: number[] = [5, 10, 25, 100];
 
   // MatPaginator Output
   pageEvent?: PageEvent;
 
   setPageSizeOptions(setPageSizeOptionsInput: string) {
     if (setPageSizeOptionsInput) {
       this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
     }
   }

}




  

