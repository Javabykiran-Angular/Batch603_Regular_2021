import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fordirective',
  templateUrl: './fordirective.component.html',
  styleUrls: ['./fordirective.component.css']
})
export class FordirectiveComponent implements OnInit {

  arrobj=[
    {
      name:"Motorolla",
      price:30000,
      quantity:1
    },
    {
      name:"OnePlus",
      price:35000,
      quantity:2
    },
    {
      name:"RealMe",
      price:20000,
      quantity:3
    }
  ];

  selected:string='';

  constructor() { }

  ngOnInit() {
  }

  onMouseOver(item){
    console.log("Mouse Over Event Occur...")
    this.selected=item.name;
  }

  onMouseOut(){
    console.log("==>>> Mouse Out Event Occur...");
    this.selected='';
  }

}
