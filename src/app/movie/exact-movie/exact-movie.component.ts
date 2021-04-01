import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DesignService } from 'src/app/service/design.service';

@Component({
  selector: 'app-exact-movie',
  templateUrl: './exact-movie.component.html',
  styleUrls: ['./exact-movie.component.css']
})
export class ExactMovieComponent implements OnInit {
data:any={}
  constructor(private service:DesignService ,private router:ActivatedRoute) { 
    this.service.omdb(this.router.snapshot.params.Title).subscribe(data=>{
      console.log(data)
      this.data=data
    })
  }

  ngOnInit(): void {
  }

}
