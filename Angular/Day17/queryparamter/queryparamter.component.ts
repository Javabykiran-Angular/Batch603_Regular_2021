import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-queryparamter',
  templateUrl: './queryparamter.component.html',
  styleUrls: ['./queryparamter.component.css']
})
export class QueryparamterComponent implements OnInit {

  myJson={
    myid:0,
    myname:'',
    myrole:''
  }
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
this.GetdataFromURL();
  }


  GetdataFromURL(){
      this.route.queryParamMap
      .subscribe((param)=>{
        this.myJson.myid=+param.get("id")
        this.myJson.myname=param.get("fname");
        this.myJson.myrole=param.get("role");
      })
  }


}
