import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-mat-snackbar',
  templateUrl: './mat-snackbar.component.html',
  styleUrls: ['./mat-snackbar.component.css']
})
export class MatSnackbarComponent implements OnInit {

  constructor(private snackBar : MatSnackBar) { }

  ngOnInit(): void {
  }

  openSnackBar(message:string){
    this.snackBar.open(message)
  }
}
