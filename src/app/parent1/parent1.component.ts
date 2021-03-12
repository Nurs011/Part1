import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';


@Component({
  selector: 'parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.css'],
  providers: [SharedService]
})
export class Parent1Component implements OnInit {

  sharedValue;

  constructor(private sharedService:SharedService) { 
    this.sharedValue=sharedService.getSharedValue();
    console.log('Parent-1 ' + this.sharedValue.toString());
  }

  ngOnInit(): void {
  }

}
