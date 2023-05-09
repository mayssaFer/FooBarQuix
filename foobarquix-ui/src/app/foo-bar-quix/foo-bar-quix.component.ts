import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { FooBarQuixService } from '../service/foo-bar-quix.service';

@Component({
  selector: 'app-foo-bar-quix',
  templateUrl: './foo-bar-quix.component.html'
})
export class FooBarQuixComponent implements OnInit, OnDestroy {

	result: string;
  constructor(private fooBarQuixService: FooBarQuixService) { 
	  
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }
}
