import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-pipe',
  templateUrl: './custom-pipe.component.html',
  styleUrls: ['./custom-pipe.component.css']
})
export class CustomPipeComponent implements OnInit {

  strDetails:string='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis deserunt, dicta est, unde hic maiores tempora adipisci sed, culpa exercitationem soluta deleniti ullam asperiores porro harum? Eos earum blanditiis aspernatur.';
  constructor() { }

  ngOnInit() {
  }

}
