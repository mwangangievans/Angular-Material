import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mat-datepicker',
  templateUrl: './mat-datepicker.component.html',
  styleUrls: ['./mat-datepicker.component.css']
})
export class MatDatepickerComponent implements OnInit {

  minDate = new Date();
  maxDate = new Date(2022 , 4 ,10);

  //prevent user from selecting sundays and saturdays

  constructor() { }

  dateFilter(date:Date ){
    const day = date.getDate();
    return day != 0 && day != 6 ;
  }

  ngOnInit(): void {
  }

}
