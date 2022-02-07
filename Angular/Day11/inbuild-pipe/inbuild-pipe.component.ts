import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbuild-pipe',
  templateUrl: './inbuild-pipe.component.html',
  styleUrls: ['./inbuild-pipe.component.css']
})
export class InbuildPipeComponent implements OnInit {

  strdata:string='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad eius facere iusto expedita! Distinctio earum amet rem ad, perferendis dolor sint, vel non eius deserunt pariatur aut sit sunt quos!';

  num2:number=456.123789456;

  mydate=new Date();

  constructor() { }

  ngOnInit() {
  }

}
