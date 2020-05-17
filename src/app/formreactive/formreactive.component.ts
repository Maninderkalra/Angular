import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Formdetails } from '../models/formdetails';

@Component({
  selector: 'app-formreactive',
  templateUrl: './formreactive.component.html',
  styleUrls: ['./formreactive.component.sass']
})
export class FormreactiveComponent implements OnInit {
  form: FormGroup;
  isSubmitted = false;

  constructor(public formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.form=this.formBuilder.group({
      name:[null, Validators.required],
      email:[null, [Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]
    ],
      password:[null, Validators.required],
    });
    console.log(this.form.valid);
  }

  get formControls()
  {
    return this.form.controls;
  }

  onSubmit()
  {
    this.isSubmitted = true;
  }

}
