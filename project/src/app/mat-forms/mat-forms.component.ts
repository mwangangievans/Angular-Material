import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-mat-forms',
  templateUrl: './mat-forms.component.html',
  styleUrls: ['./mat-forms.component.css']
})
export class MatFormsComponent implements OnInit {


  signin_form!: FormGroup

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.signin_form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      UserName: ['', [Validators.required]],
    })
  }


  submit(){
    console.log(this.signin_form);
    
  }
}
