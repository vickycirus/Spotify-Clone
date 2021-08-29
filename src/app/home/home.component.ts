
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  public pop:any;
  public justin:any;
  public BTS :any;

  constructor(private spotser:SpotifyService,private router: Router) {}

  ngOnInit(): void {



     //justin hits

      this.spotser.getJustinHits().subscribe(

      data=>{
        this.justin=data;
        },
      err=>{
        console.log("err is",err);


      });


      this.spotser.getbts().subscribe(

        data=>{
          this.BTS=data;
          },
        err=>{
          console.log("err is",err);


        });








  }

  onswift(x:any){
    console.log(x);
    this.router.navigate(['swift', {id:x}]);
  }

  onswift2(x1:any){
    console.log(x1);
    this.router.navigate(['play', {key:x1}]);
  }



}

