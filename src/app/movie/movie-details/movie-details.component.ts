import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DesignService } from 'src/app/service/design.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
shows:any={}
displayCard:boolean=false
spinner:boolean=false
notFound:boolean=false
cardDisplay:boolean=true
btnStyle:string='';
iconStyle:string=''
  constructor(private service:DesignService) { }

  ngOnInit(): void {

  }
  onClick(uname:any,e:any,myForm:NgForm){
    e.preventDefault()
  console.log(myForm)
     if (uname.value!=''){
      this.spinner=true
      this.service.omdb(uname.value).subscribe(data=>{
        console.log(data)
        this.shows=data
        this.spinner=false
        this.displayCard=true
      })  
    }
 else if(uname.value==''){
   alert("please wirte something before search")
 }
    
  }
  btnOver(){
    this.btnStyle="#fff !important"
    this.iconStyle="#ff3d1c !important"
  }
  btnLeave(){
    this.btnStyle="#ff3d1c !important"
    this.iconStyle="#fff !important"
  }
}
