import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {



  public searchQuery!: string;
  public artists:any;

  public rec:any;
  public top:any;
  public id:any;
  public status:boolean =false;



  constructor(private spotser:SpotifyService, private router: Router) { }

  ngOnInit(): void {


  }

  onswift(x:any){
    console.log(x);
    this.router.navigate(['swift', {id:x}]);
  }


//get songs and artists

  public searchArtists(){


    this.spotser.getAllArtists(this.searchQuery).subscribe(

    data=>{
      this.artists=data;
      },
    err=>{
      console.log("err is",err);
    });

    }


    public recommended(){

       this.status=true;

      for(let x1 of this.artists.tracks.hits)
      {

        this.spotser.getAllRecommended(x1.track.key).subscribe(

          idata=>{
            this.rec=idata;
            },

          err=>{
            console.log("err is",err);
           });

          }


}




}

