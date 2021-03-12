import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'parent2',
  templateUrl: './parent2.component.html',
  styleUrls: ['./parent2.component.css'],
  providers :[SharedService]
})
export class Parent2Component implements OnInit {

  sharedValue;
 
  constructor(private sharedService:SharedService){
    this.sharedValue=sharedService.getSharedValue();
    console.log('Parent-2 ' + this.sharedValue.toString());
  }

  ngOnInit(): void {
  }

}
