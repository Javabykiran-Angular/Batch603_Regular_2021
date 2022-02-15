import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  PostArr:any[]=[];
  id:number=0;
  title:string='';
  body:string='';
  ishidden:boolean=true;
  constructor(private service:HttpService) { }

  ngOnInit() {
    this.GetAllPost();
  }

  GetAllPost(){

      this.service.getPost()
      .subscribe((response)=>{
         console.log(response);
        this.PostArr=(<any>response);
        
      },(error)=>{
        alert("Error Occured... "+error.status)
      })
  }

  onSend(mytitle,mybody){
    let obj={
      title:mytitle,
      body:mybody
    }

    this.service.PostData(obj)
    .subscribe((response)=>{
        console.log(response)
    })
  }

  onEdit(item){
    this.id=item.id;
    this.title=item.title;
    this.body=item.body;
    this.ishidden=false;
  }

  onUpdate(){
    let obj={
      id:this.id,
      title:this.title,
      body:this.body
    }

    this.service.UpdateData(obj)
    .subscribe((response)=>{
        console.log(response)
    })

  }

  onDelete(id){
    this.service.DeleteData(id)
    .subscribe((response)=>{
      console.log(response)
    })
  }

}
