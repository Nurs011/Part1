import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css'],
  providers :[]
})
export class Child3Component implements OnInit {

  sharedValue;
 
   constructor(private sharedService:SharedService){
     this.sharedValue=sharedService.getSharedValue();
     console.log('Child-3 ' + this.sharedValue.toString());
   }

  ngOnInit(): void {
  }

}
