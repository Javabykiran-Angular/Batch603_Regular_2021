import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stylebinding',
  templateUrl: './stylebinding.component.html',
  styleUrls: ['./stylebinding.component.css']
})
export class StylebindingComponent implements OnInit {

  mycolor:string="red";
  rating:number=21;

  jsonObj={
    color:'tomato',
    fontStyle:'italic',
    "font-size":'52px'
  }

  constructor() { }

  ngOnInit() {
  }

}
