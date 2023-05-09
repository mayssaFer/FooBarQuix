import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FooBarQuixService } from '../service/foo-bar-quix.service';
@Component({
  selector: 'app-foo-bar-quix-form',
  templateUrl: './foo-bar-quix-form.component.html',
  styleUrls: ['./foo-bar-quix-form.component.css']
})
export class FooBarQuixFormComponent implements OnInit {
	  
	  fooBarQuixForm: FormGroup;
	  numberInput: number;
	  
	  @Output() onResult = new EventEmitter<string>();
	  result:string
	  
  constructor(private formBuilder: FormBuilder,private fooBarQuixService: FooBarQuixService) { }

  ngOnInit(): void {
	  this.onResult.emit(this.result);
	  this.fooBarQuixForm = this.formBuilder.group({
	      number: ['', Validators.required]
	    });
  }

  convertNumber(): void {
	  const inputNumber = this.fooBarQuixForm.get('number').value;
	    this.fooBarQuixService.convertNumber(inputNumber).subscribe(result => {
	      this.result = result;
	    });
	 
  }

}
