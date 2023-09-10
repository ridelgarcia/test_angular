import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {

  formAddCategory:FormGroup;

  constructor(private _formBuilder:FormBuilder){
    this.formAddCategory = this._formBuilder.group({
      name:['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    
  }

  onSubmit3(){

  }
  onSubmit2(){

  }
  onSubmit1(){

  }

  onDescriptionChange(event:any)  {
    console.log(event.target.value);
  }
}
