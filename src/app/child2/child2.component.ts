import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css'],
  providers :[]
})
export class Child2Component implements OnInit {

  sharedValue;

   constructor(private sharedService: SharedService){
     this.sharedValue = sharedService.getSharedValue();
     console.log('Child-2 ' + this.sharedValue.toString());
   }

  ngOnInit(): void {
  }

}
