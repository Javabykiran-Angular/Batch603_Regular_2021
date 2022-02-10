import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  PostArr:any[]=[];
  constructor(private service:HttpService) { }

  ngOnInit() {
    this.GetAllPost();
  }

  GetAllPost(){

      this.service.getPost()
      .subscribe((response)=>{
        // console.log(response);
        this.PostArr=(<any>response);

      })
  }

}
