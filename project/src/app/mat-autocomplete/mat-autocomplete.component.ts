import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mat-autocomplete',
  templateUrl: './mat-autocomplete.component.html',
  styleUrls: ['./mat-autocomplete.component.css']
})
export class MatAutocompleteComponent implements OnInit {

  options : string [] = [ 'Angular','React','Vue']

  constructor() { }

  ngOnInit(): void {
  }

}
