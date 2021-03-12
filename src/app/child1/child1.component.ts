import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css'],
  providers :[]
})
export class Child1Component implements OnInit {

  sharedValue;
 
   constructor(private sharedService:SharedService){
     this.sharedValue=sharedService.getSharedValue();
     console.log('Child-1 ' + this.sharedValue.toString());
   }

  ngOnInit(): void {
  }

}
