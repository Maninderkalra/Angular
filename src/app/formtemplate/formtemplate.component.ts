import { Component, OnInit,Input } from '@angular/core';
import { Formdetails } from '../models/formdetails';

@Component({
  selector: 'app-formtemplate',
  templateUrl: './formtemplate.component.html',
  styleUrls: ['./formtemplate.component.sass']
})
export class FormtemplateComponent implements OnInit {

  //@Input() formDetails : Formdetails ;

  formDetails = new Formdetails(); 

  constructor() { 
  }

  ngOnInit(): void {
    
  }

  isSubmitted = false;

  onSubmit() { 
      this.isSubmitted = true; 
      console.log(this.isSubmitted);
  }

}
