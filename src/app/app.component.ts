import { AfterViewInit, Component,  DoCheck,  OnDestroy,  OnInit,  } from '@angular/core';
import { DesignService } from './service/design.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'kanishkapp';
  txt:string=''
 arr:any=[]
constructor(private serv:DesignService){
  // console.log('Constructor called')
}
  ngOnInit(){
  console.log('ngOnInit called') 
  }
  onClick(uname:any){
this.txt=uname.value
this.serv.omdb(uname.value).subscribe(data=>{
  console.log(data)
  this.arr=data
  console.log(this.arr)
})
  }

}
