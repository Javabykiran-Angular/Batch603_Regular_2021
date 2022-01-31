import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding1',
  templateUrl: './eventbinding1.component.html',
  styleUrls: ['./eventbinding1.component.css']
})
export class Eventbinding1Component implements OnInit {

  isClick:boolean=true;

  constructor() { }

  ngOnInit() {
  }

  onClick(){

    if(this.isClick==true){
      console.log("Click Event Occur..");
      this.isClick=false;
    }    
  }

  imgClick(){
    console.log("On Image click...")
  }

  onClick1(myevent){
    console.log(myevent);
    console.log("Data is =====> "+myevent.target.value);
  }

  onSend(myname){
      console.log(myname)
      console.log("data is ====> "+myname.value);
      myname.style.background='green';
      myname.style.color='white';
  }

  onSend1(data){
    console.log("Data is => "+data);
  }

}
