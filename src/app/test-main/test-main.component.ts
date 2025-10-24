import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-test-main',
  templateUrl: './test-main.component.html',
  styleUrls: ['./test-main.component.scss']
})
export class TestMainComponent implements OnInit {
  reactiveFrom:any =  FormGroup;
  getVal:string = '';
  constructor(private formBuilder:FormBuilder) { 

    this.reactiveFrom = formBuilder.group({
      name: ['',Validators.required,
        Validators.minLength(4),],
      age: new FormControl('18')
    });
  }

  ngOnInit(): void {
      // Initialize the form with default values and validators
  }
  getData(val:any){
   console.log(val);
   this.getVal = val;
  }
  submit(){
    console.log(this.reactiveFrom.value);
  }


}
